'use client'

import { useFormSubmission } from '@/hooks/useFormSubmission'
import { FormFields } from './FormFields'
import { FormModal } from './FormModal'

interface EarlyAccessFormProps {
  onClose: () => void
}

export function EarlyAccessForm({ onClose }: EarlyAccessFormProps) {
  const { submit, isSubmitting, isSuccess } = useFormSubmission()

  const handleSubmit = async (data: FormData) => {
    await submit(data)
  }

  return (
    <FormModal onClose={onClose}>
      {isSuccess ? (
        <div className="text-center py-12">
          <div className="text-5xl mb-6 text-cyan-400">✓</div>
          <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Thank You!</h2>
          <p className="text-neutral-400 text-lg">
            We'll be in touch soon.
          </p>
        </div>
      ) : (
        <FormFields onSubmit={handleSubmit} isSubmitting={isSubmitting} />
      )}
    </FormModal>
  )
}

