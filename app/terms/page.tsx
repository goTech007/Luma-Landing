import Link from 'next/link'
import { AnimatedBackground } from '@/shared/UI/AnimatedBackground'
import { Header } from '@/components/Header'

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <AnimatedBackground />
      <Header />
      <main className="flex-1 max-w-4xl mx-auto px-6 py-20 relative z-10">
        <Link href="/" className="text-cyan-400 hover:text-cyan-300 mb-8 inline-block">
          ← Back to Home
        </Link>
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          Terms of Service
        </h1>
        <div className="space-y-6 text-neutral-300">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">1. Acceptance of Terms</h2>
            <p className="text-neutral-400">
              By accessing and using this website, you accept and agree to be bound by the terms
              and provision of this agreement.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">2. Use License</h2>
            <p className="text-neutral-400">
              Permission is granted to temporarily access the materials on our website for personal,
              non-commercial transitory viewing only.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">3. Disclaimer</h2>
            <p className="text-neutral-400">
              The materials on our website are provided on an 'as is' basis. We make no warranties,
              expressed or implied, and hereby disclaim and negate all other warranties.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">4. Limitations</h2>
            <p className="text-neutral-400">
              In no event shall we or our suppliers be liable for any damages arising out of the use
              or inability to use the materials on our website.
            </p>
          </section>
        </div>
      </main>
    </div>
  )
}

