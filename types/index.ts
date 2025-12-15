export interface FormSubmission {
  email: string
  name: string
  role?: string
  reason?: string
}

export interface ApiResponse {
  success?: boolean
  error?: string
}

