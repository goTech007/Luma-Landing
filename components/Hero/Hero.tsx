'use client'

import { useState } from 'react'
import Image from 'next/image'
import { EarlyAccessForm } from './EarlyAccessForm'
import { Button } from '@/shared/UI'

export function Hero() {
  const [showForm, setShowForm] = useState(false)

  return (
    <section className="flex items-center px-6 relative z-10" style={{ height: 'calc(100vh - 5rem - 6rem)' }}>
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-5 animate-fade-in tracking-tight">
            Building the
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Future
            </span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-300 mb-2 font-light">
            We're crafting something extraordinary
          </p>
          <p className="text-sm md:text-base text-cyan-400/70 mb-8">
            Currently in active development
          </p>
          <Button onClick={() => setShowForm(true)} variant="primary">
            Apply for Early Access
          </Button>
        </div>
        <div className="hidden lg:block relative h-full">
          <div className="relative w-full h-full max-w-2xl mx-auto flex items-center">
            <div className="relative w-full aspect-[9/16] max-h-[85vh] scale-110">
              <Image
                src="/mc.webp"
                alt="Hero Image"
                fill
                className="object-contain"
                priority
                quality={100}
                sizes="100vw"
              />
            </div>
          </div>
        </div>
      </div>
      {showForm && (
        <EarlyAccessForm onClose={() => setShowForm(false)} />
      )}
    </section>
  )
}

