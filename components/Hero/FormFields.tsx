'use client'

import { FormEvent } from 'react'
import { useFormState } from '@/hooks/useFormState'
import { InputField, TextAreaField, Button } from '@/shared/UI'

interface FormFieldsProps {
  onSubmit: (data: FormData) => void
  isSubmitting: boolean
}

export function FormFields({ onSubmit, isSubmitting }: FormFieldsProps) {
  const { state, updateField, errors } = useFormState()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData()
    Object.entries(state).forEach(([key, value]) => {
      if (value) formData.append(key, value)
    })
    onSubmit(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Early Access</h2>
      <InputField label="Email *" name="email" type="email" value={state.email} onChange={updateField} error={errors.email} />
      <InputField label="Name or Nickname *" name="name" value={state.name} onChange={updateField} error={errors.name} />
      <InputField label="Role or Interest" name="role" value={state.role} onChange={updateField} placeholder="e.g., trader, developer, creator, investor" />
      <TextAreaField label="Why do you want access?" name="reason" value={state.reason} onChange={updateField} />
      <Button type="submit" disabled={isSubmitting} variant="secondary">
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </Button>
    </form>
  )
}

