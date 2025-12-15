export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

interface FormData {
  email?: string
  name?: string
  role?: string
  reason?: string
}

interface ValidationResult {
  valid: boolean
  error?: string
}

export function validateFormData(data: FormData): ValidationResult {
  if (!data.email || !validateEmail(data.email)) {
    return { valid: false, error: 'Valid email is required' }
  }
  
  if (!data.name || data.name.trim().length === 0) {
    return { valid: false, error: 'Name is required' }
  }
  
  return { valid: true }
}

