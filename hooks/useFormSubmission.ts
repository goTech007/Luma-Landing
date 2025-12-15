import { useState } from 'react'
import { submitFormData } from '@/lib/api'

export function useFormSubmission() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const submit = async (formData: FormData) => {
    setIsSubmitting(true)
    try {
      await submitFormData(formData)
      setIsSuccess(true)
    } catch (error) {
      console.error('Submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return { submit, isSubmitting, isSuccess }
}

