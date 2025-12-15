import { useState } from 'react'
import { validateEmail } from '@/lib/validation'

interface FormState {
  email: string
  name: string
  role: string
  reason: string
}

interface FormErrors {
  email?: string
  name?: string
}

export function useFormState() {
  const [state, setState] = useState<FormState>({
    email: '',
    name: '',
    role: '',
    reason: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})

  const updateField = (name: string, value: string) => {
    setState((prev) => ({ ...prev, [name]: value }))
    
    if (name === 'email' && value && !validateEmail(value)) {
      setErrors((prev) => ({ ...prev, email: 'Invalid email' }))
    } else if (name === 'email') {
      setErrors((prev) => ({ ...prev, email: undefined }))
    }
  }

  return { state, updateField, errors }
}

