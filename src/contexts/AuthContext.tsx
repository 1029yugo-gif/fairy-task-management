'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { User as SupabaseUser, Session } from '@supabase/supabase-js'
import { supabase } from '@/lib/supabase'
import { User } from '@/types/database.types'

interface AuthContextType {
  supabaseUser: SupabaseUser | null
  user: User | null
  session: Session | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<{ error: Error | null }>
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [supabaseUser, setSupabaseUser] = useState<SupabaseUser | null>(null)
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)

  const fetchUserProfile = async (email: string) => {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('email', email)
      .single()

    if (error) {
      console.error('ユーザー情報取得エラー:', error)
      return null
    }

    return data as User
  }

  useEffect(() => {
    const initializeAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      setSession(session)
      setSupabaseUser(session?.user ?? null)

      if (session?.user?.email) {
        const userProfile = await fetchUserProfile(session.user.email)
        if (userProfile && !userProfile.is_active) {
          await supabase.auth.signOut()
          setUser(null)
          setSupabaseUser(null)
          setSession(null)
        } else {
          setUser(userProfile)
        }
      }

      setLoading(false)
    }

    initializeAuth()

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setSession(session)
        setSupabaseUser(session?.user ?? null)

        if (session?.user?.email) {
          const userProfile = await fetchUserProfile(session.user.email)
          if (userProfile && !userProfile.is_active) {
            await supabase.auth.signOut()
            setUser(null)
            setSupabaseUser(null)
            setSession(null)
          } else {
            setUser(userProfile)
          }
        } else {
          setUser(null)
        }
      }
    )

    return () => subscription.unsubscribe()
  }, [])

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      return { error }
    }

    const userProfile = await fetchUserProfile(email)

    if (!userProfile) {
      await supabase.auth.signOut()
      return { error: new Error('このメールアドレスは登録されていません') }
    }

    if (!userProfile.is_active) {
      await supabase.auth.signOut()
      return { error: new Error('このアカウントは無効化されています') }
    }

    return { error: null }
  }

  const signOut = async () => {
    await supabase.auth.signOut()
    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{
        supabaseUser,
        user,
        session,
        loading,
        signIn,
        signOut
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
