// データベース型定義

// ユーザー権限
export type UserRole = 'admin' | 'staff' | 'cast' | 'driver'

// ユーザー
export interface User {
    id: string
    line_user_id: string | null
    name: string
    role: UserRole
    phone: string | null
    email: string | null
    is_active: boolean
    created_at: string
    updated_at: string
}

// タスク
export interface Task {
    id: string
    assigned_to: string | null
    created_by: string
    title: string
    description: string | null
    due_date: string | null
    status: 'pending' | 'in_progress' | 'completed' | 'cancelled'
    priority: 'low' | 'medium' | 'high' | 'urgent'
    created_at: string
    updated_at: string
}
