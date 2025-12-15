import Link from 'next/link'
import { AnimatedBackground } from '@/shared/UI/AnimatedBackground'
import { Header } from '@/components/Header'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <AnimatedBackground />
      <Header />
      <main className="flex-1 max-w-4xl mx-auto px-6 py-20 relative z-10">
        <Link href="/" className="text-cyan-400 hover:text-cyan-300 mb-8 inline-block">
          ← Back to Home
        </Link>
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          Privacy Policy
        </h1>
        <div className="space-y-6 text-neutral-300">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">1. Information We Collect</h2>
            <p className="text-neutral-400">
              We collect information that you provide directly to us, such as when you create an
              account, subscribe to our newsletter, or contact us.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">2. How We Use Your Information</h2>
            <p className="text-neutral-400">
              We use the information we collect to provide, maintain, and improve our services, to
              process transactions, and to communicate with you.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">3. Information Sharing</h2>
            <p className="text-neutral-400">
              We do not sell, trade, or otherwise transfer your personal information to third
              parties without your consent, except as described in this policy.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-white">4. Data Security</h2>
            <p className="text-neutral-400">
              We implement appropriate security measures to protect your personal information against
              unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>
        </div>
      </main>
    </div>
  )
}

