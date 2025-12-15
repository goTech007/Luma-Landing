import { NextResponse } from 'next/server'
import { validateFormData } from '@/lib/validation'
import { submitForm } from '@/lib/api'

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const validation = validateFormData(data)
    
    if (!validation.valid) {
      return NextResponse.json(
        { error: validation.error },
        { status: 400 }
      )
    }
    
    await submitForm(data)
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json(
      { error: 'Submission failed' },
      { status: 500 }
    )
  }
}

