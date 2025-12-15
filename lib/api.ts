export async function submitFormData(formData: FormData): Promise<void> {
  const response = await fetch('/api/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(Object.fromEntries(formData)),
  })

  if (!response.ok) {
    throw new Error('Failed to submit form')
  }
}

export async function submitForm(data: Record<string, string>): Promise<void> {
  // This can be extended to integrate with Airtable, Notion, Supabase, etc.
  console.log('Form submission:', data)
  // TODO: Add integration with your preferred service
}

