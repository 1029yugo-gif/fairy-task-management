'use client'
  
import { useState } from 'react'
  import { useRouter } from 'next/navigation'
    import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
      
export default function LoginPage() {
    const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')

        
  export default function LoginPage() {
      const [email, setEmail] = useState('')
          const [password, setPassword] = useState('')
              const [error, setError] = useState('')
                  const [loading, setLoading] = useState(false)
                      const router = useRouter()
                          const supabase = createClientComponentClient()
                            
      const handleSubmit = async (e: React.FormEvent) => {
            e.preventDefault()
                  setError('')
                        setLoading(true)
                          
            try {
                    // Supabase Authでログイン
                    const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
                              email,
                              password,
                    })
                      
                    if (authError) throw authError
                            if (!authData.user) throw new Error('認証に失敗しました')
                              
                    // ログイン成功 - tasksページへ
                    router.push('/tasks')
                            router.refresh()
            } catch (err: any) {
                    console.error('ログインエラー:', err)
                            setError(err.message || 'ログインに失敗しました')
                                    setLoading(false)
            }
      }
        
      return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                  <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow">
                          <div>
                                    <h2 className="text-center text-3xl font-bold text-gray-900">
                                                フェアリー タスク管理システム
                                    </h2>h2>
                                    <p className="mt-2 text-center text-sm text-gray-600">
                                                ログインしてください
                                    </p>p>
                          </div>div>
                          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                            {error && (
                          <div className="rounded-md bg-red-50 p-4">
                                        <p className="text-sm text-red-800">{error}</p>p>
                          </div>div>
                                    )}
                                    <div className="space-y-4">
                                                <div>
                                                              <label htmlFor="email" className="sr-only">
                                                                              メールアドレス
                                                              </label>label>
                                                              <input
                                                                                id="email"
                                                                                name="email"
                                                                                type="email"
                                                                                required
                                                                                className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                                                                placeholder="メールアドレス"
                                                                                value={email}
                                                                                onChange={(e) => setEmail(e.target.value)}
                                                                                disabled={loading}
                                                                              />
                                                </div>div>
                                                <div>
                                                              <label htmlFor="password" className="sr-only">
                                                                              パスワード
                                                              </label>label>
                                                              <input
                                                                                id="password"
                                                                                name="password"
                                                                                type="password"
                                                                                required
                                                                                className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                                                                placeholder="パスワード"
                                                                                value={password}
                                                                                onChange={(e) => setPassword(e.target.value)}
                                                                                disabled={loading}
                                                                              />
                                                </div>div>
                                    </div>div>
                          
                                    <div>
                                                <button
                                                                type="submit"
                                                                disabled={loading}
                                                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400"
                                                              >
                                                  {loading ? 'ログイン中...' : 'ログイン'}
                                                </button>button>
                                    </div>div>
                          </form>form>
                  </div>div>
            </div>div>
          )
  }
  </div>'use cient'
  
  import { useState } from 'react'
    import { useRouter } from 'next/navigation'
      import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
        
  export default function LoginPage() {
      const [email, setEmail] = useState('')
          const [password, setPassword] = useState('')
              const [error, setError] = useState('')
                  const [loading, setLoading] = useState(false)
                      const router = useRouter()
                          const supabase = createClientComponentClient()
                            
      const handleSubmit = async (e: React.FormEvent) => {
            e.preventDefault()
                  setError('')
                        setLoading(true)
                          
            try {
                    // Supabase Authでログイン
                    const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
                              email,
                              password,
                    })
                      
                    if (authError) throw authError
                            if (!authData.user) throw new Error('認証に失敗しました')
                              
                    // ログイン成功 - tasksページへ
                    router.push('/tasks')
                            router.refresh()
            } catch (err: any) {
                    console.error('ログインエラー:', err)
                            setError(err.message || 'ログインに失敗しました')
                                    setLoading(false)
            }
      }
        
      return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                  <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow">
                          <div>
                                    <h2 className="text-center text-3xl font-bold text-gray-900">
                                                フェアリー タスク管理システム
                                    </h2>h2>
                                    <p className="mt-2 text-center text-sm text-gray-600">
                                                ログインしてください
                                    </p>p>
                          </div>div>
                          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                            {error && (
                          <div className="rounded-md bg-red-50 p-4">
                                        <p className="text-sm text-red-800">{error}</p>p>
                          </div>div>
                                    )}
                                    <div className="space-y-4">
                                                <div>
                                                              <label htmlFor="email" className="sr-only">
                                                                              メールアドレス
                                                              </label>label>
                                                              <input
                                                                                id="email"
                                                                                name="email"
                                                                                type="email"
                                                                                required
                                                                                className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                                                                placeholder="メールアドレス"
                                                                                value={email}
                                                                                onChange={(e) => setEmail(e.target.value)}
                                                                                disabled={loading}
                                                                              />
                                                </div>div>
                                                <div>
                                                              <label htmlFor="password" className="sr-only">
                                                                              パスワード
                                                              </label>label>
                                                              <input
                                                                                id="password"
                                                                                name="password"
                                                                                type="password"
                                                                                required
                                                                                className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                                                                placeholder="パスワード"
                                                                                value={password}
                                                                                onChange={(e) => setPassword(e.target.value)}
                                                                                disabled={loading}
                                                                              />
                                                </div>div>
                                    </div>div>
                          
                                    <div>
                                                <button
                                                                type="submit"
                                                                disabled={loading}
                                                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400"
                                                              >
                                                  {loading ? 'ログイン中...' : 'ログイン'}
                                                </button>button>
                                    </div>div>
                          </form>form>
                  </div>div>
            </div>div>
          )
  }
  </div>'use client'
  
  import { useState } from 'react'
    import { useRouter } from 'next/navigation'
      import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
        
  export default function LoginPage() {
      const [email, setEmail] = useState('')
          const [password, setPassword] = useState('')
              const [error, setError] = useState('')
                  const [loading, setLoading] = useState(false)
                      const router = useRouter()
                          const supabase = createClientComponentClient()
                            
      const handleSubmit = async (e: React.FormEvent) => {
            e.preventDefault()
                  setError('')
                        setLoading(true)
                          
            try {
                    // Supabase Authでログイン
                    const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
                              email,
                              password,
                    })
                      
                    if (authError) throw authError
                            if (!authData.user) throw new Error('認証に失敗しました')
                              
                    // ログイン成功 - tasksページへ
                    router.push('/tasks')
                            router.refresh()
            } catch (err: any) {
                    console.error('ログインエラー:', err)
                            setError(err.message || 'ログインに失敗しました')
                                    setLoading(false)
            }
      }
        
      return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                  <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow">
                          <div>
                                    <h2 className="text-center text-3xl font-bold text-gray-900">
                                                フェアリー タスク管理システム
                                    </h2>h2>
                                    <p className="mt-2 text-center text-sm text-gray-600">
                                                ログインしてください
                                    </p>p>
                          </div>div>
                          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                            {error && (
                          <div className="rounded-md bg-red-50 p-4">
                                        <p className="text-sm text-red-800">{error}</p>p>
                          </div>div>
                                    )}
                                    <div className="space-y-4">
                                                <div>
                                                              <label htmlFor="email" className="sr-only">
                                                                              メールアドレス
                                                              </label>label>
                                                              <input
                                                                                id="email"
                                                                                name="email"
                                                                                type="email"
                                                                                required
                                                                                className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                                                                placeholder="メールアドレス"
                                                                                value={email}
                                                                                onChange={(e) => setEmail(e.target.value)}
                                                                                disabled={loading}
                                                                              />
                                                </div>div>
                                                <div>
                                                              <label htmlFor="password" className="sr-only">
                                                                              パスワード
                                                              </label>label>
                                                              <input
                                                                                id="password"
                                                                                name="password"
                                                                                type="password"
                                                                                required
                                                                                className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                                                                placeholder="パスワード"
                                                                                value={password}
                                                                                onChange={(e) => setPassword(e.target.value)}
                                                                                disabled={loading}
                                                                              />
                                                </div>div>
                                    </div>div>
                          
                                    <div>
                                                <button
                                                                type="submit"
                                                                disabled={loading}
                                                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400"
                                                              >
                                                  {loading ? 'ログイン中...' : 'ログイン'}
                                                </button>button>
                                    </div>div>
                          </form>form>
                  </div>div>
            </div>div>
          )
  }</div>const [error, setError] = useState('')
                const [loading, setLoading] = useState(false)
                    const router = useRouter()
                        const supabase = createClientComponentClient()
                          
    const handleSubmit = async (e: React.FormEvent) => {
          e.preventDefault()
                setError('')
                      setLoading(true)
                        
          try {
                  // Supabase Authでログイン
                  const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
                            email,
                            password,
                  })
                    
                  if (authError) {
                            throw authError
                  }
            
                  if (!authData.user) {
                            throw new Error('ログインに失敗しました')
                  }
            
                  // staffsテーブルからスタッフ情報を取得
                  const { data: staff, error: staffError } = await supabase
                            .from('staffs')
                            .select('*')
                            .eq('id', authData.user.id)
                            .single()
                    
                  if (staffError || !staff) {
                            await supabase.auth.signOut()
                                      throw new Error('このメールアドレスは登録されていません')
                  }
            
                  if (staff.status !== 'active') {
                            await supabase.auth.signOut()
                                      throw new Error('このアカウントは無効化されています。管理者にお問い合わせください。')
                  }
            
                  // ログイン成功
                  router.push('/tasks')
                          router.refresh()
          } catch (err: any) {
                  setError(err.message)
                          setLoading(false)
          }
    }
      
    return (
          <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                        <div>
                                  <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                                              フェアリー タスク管理システム
                                  </h2>h2>
                                  <p className="mt-2 text-center text-sm text-gray-600">
                                              ログインしてください
                                  </p>p>
                        </div>div>
                        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                          {error && (
                        <div className="rounded-md bg-red-50 p-4">
                                      <div className="text-sm text-red-700">{error}</div>div>
                        </div>div>
                                  )}
                                  <div className="rounded-md shadow-sm -space-y-px">
                                              <div>
                                                            <label htmlFor="email" className="sr-only">
                                                                            メールアドレス
                                                            </label>label>
                                                            <input
                                                                              id="email"
                                                                              name="email"
                                                                              type="email"
                                                                              autoComplete="email"
                                                                              required
                                                                              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                                                                              placeholder="メールアドレス"
                                                                              value={email}
                                                                              onChange={(e) => setEmail(e.target.value)}
                                                                              disabled={loading}
                                                                            />
                                              </div>div>
                                              <div>
                                                            <label htmlFor="password" className="sr-only">
                                                                            パスワード
                                                            </label>label>
                                                            <input
                                                                              id="password"
                                                                              name="password"
                                                                              type="password"
                                                                              autoComplete="current-password"
                                                                              required
                                                                              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                                                                              placeholder="パスワード"
                                                                              value={password}
                                                                              onChange={(e) => setPassword(e.target.value)}
                                                                              disabled={loading}
                                                                            />
                                              </div>div>
                                  </div>div>
                        
                                  <div>
                                              <button
                                                              type="submit"
                                                              disabled={loading}
                                                              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                                                            >
                                                {loading ? 'ログイン中...' : 'ログイン'}
                                              </button>button>
                                  </div>div>
                        </form>form>
                </div>div>
          </div>div>
        )
}</div>'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/contexts/AuthContext'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { signIn, user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (user) {
      router.push('/tasks')
    }
  }, [user, router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    const { error } = await signIn(email, password)

    if (error) {
      setError(error.message)
      setLoading(false)
    } else {
      router.push('/tasks')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            フェアリー タスク管理システム
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            ログインしてください
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="rounded-md bg-red-50 p-4">
              <div className="text-sm text-red-700">{error}</div>
            </div>
'use client';
          
          import { useState } from 'react';
          import { useRouter } from 'next/navigation';
          import { createClient } from '@/lib/supabase/client';
          
          export default function LoginPage() {
            const router = useRouter();
            const [email, setEmail] = useState('');
            const [password, setPassword] = useState('');
            const [error, setError] = useState('');
            const [loading, setLoading] = useState(false);
          
            const handleLogin = async (e: React.FormEvent) => {
                e.preventDefault();
              setError('');
              setLoading(true);
          
              try {
                    const supabase = createClient();
          
                // Supabase Authでログイン
                const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
                        email,
                        password,
                });
          
                if (authError) {
                        throw authError;
          }
          
                if (!authData.user) {
                        throw new Error('ログインに失敗しました');
          }
          
                // スタッフ情報を取得して、アカウントが有効か確認
                const { data: staff, error: staffError } = await supabase
                  .from('staffs')
                  .select('*')
                  .eq('id', authData.user.id)
                  .single();
          
                if (staffError || !staff) {
                        // スタッフ情報が見つからない場合はログアウト
                        await supabase.auth.signOut();
                  throw new Error('アカウント情報が見つかりません。管理者にお問い合わせください。');
          }
          
                if (staff.status !== 'active') {
                        // アカウントが無効化されている場合はログアウト
                        await supabase.auth.signOut();
                  throw new Error('このアカウントは無効化されています。管理者にお問い合わせください。');
          }
          
                // 最終ログイン時刻を更新
                await supabase
                  .from('staffs')
                  .update({ last_login_at: new Date().toISOString() })
                  .eq('id', authData.user.id);
          
                // ダッシュボードへリダイレクト
                router.push('/dashboard');
                router.refresh();
          } catch (err: any) {
                setError(err.message || 'ログインに失敗しました');
          } finally {
                setLoading(false);
          }
          };
          
            return (
              <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-md w-full space-y-8">
                            <div>
                                      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                                                  フェアリー タスク管理システム
                                      </h2>h2>
                                      <p className="mt-2 text-center text-sm text-gray-600">
                                                  ログインしてください
                                      </p>p>
                            </div>div>
                    
                            <form className="mt-8 space-y-6" onSubmit={handleLogin}>
                              {error && (
              <div className="rounded-md bg-red-50 p-4">
                            <div className="text-sm text-red-700">{error}</div>div>
              </div>div>
                                      )}
                            
                                      <div className="rounded-md shadow-sm -space-y-px">
                                                  <div>
                                                                <label htmlFor="email" className="sr-only">
                                                                                メールアドレス
                                                                </label>label>
                                                                <input
                                                                                  id="email"
                                                                                  name="email"
                                                                                  type="email"
                                                                                  autoComplete="email"
                                                                                  required
                                                                                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                                                                  placeholder="メールアドレス"
                                                                                  value={email}
                                                                                  onChange={(e) => setEmail(e.target.value)}
                                                                                  disabled={loading}
                                                                                />
                                                  </div>div>
                                                  <div>
                                                                <label htmlFor="password" className="sr-only">
                                                                                パスワード
                                                                </label>label>
                                                                <input
                                                                                  id="password"
                                                                                  name="password"
                                                                                  type="password"
                                                                                  autoComplete="current-password"
                                                                                  required
                                                                                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                                                                  placeholder="パスワード"
                                                                                  value={password}
                                                                                  onChange={(e) => setPassword(e.target.value)}
                                                                                  disabled={loading}
                                                                                />
                                                  </div>div>
                                      </div>div>
                            
                                      <div>
                                                  <button
                                                                  type="submit"
                                                                  disabled={loading}
                                                                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-gray-400 disabled:cursor-not-allowed"
                                                                >
                                                    {loading ? 'ログイン中...' : 'ログイン'}
                                                  </button>button>
                                      </div>div>
                            </form>form>
                    </div>div>
              </div>div>
          );
          }</div>
            )}
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email" className="sr-only">
                メールアドレス
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="メールアドレス"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                パスワード
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="パスワード"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'ログイン中...' : 'ログイン'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
