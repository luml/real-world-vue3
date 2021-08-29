export interface EventItem {
  id: number
  category: string
  title: string
  description: string
  location: string
  date: string
  time: string
  petsAllowed: string
  organizer: string
}

type TaskType = 'personal' | 'work' | 'miscellaneous'

export interface TodoItem {
  label: string
  type: TaskType
  isComplete: boolean
}
