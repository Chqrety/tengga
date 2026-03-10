export interface Task {
  id: string | null
  title: string
  course?: string
  timestamp: number | null
  link: string | null
  description?: string
  status?: string
  is_submitted?: boolean
  opened_date?: string
  due_date?: string
}
