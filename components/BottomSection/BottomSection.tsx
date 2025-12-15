import Link from 'next/link'

export function BottomSection() {
  return (
    <section className="h-24 px-4 bg-transparent relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-start gap-4">
          <div className="flex gap-6 text-sm text-neutral-400 uppercase tracking-wider">
            <Link href="/terms" className="hover:text-cyan-400 transition-colors">
              Terms
            </Link>
            <Link href="/privacy" className="hover:text-cyan-400 transition-colors">
              Privacy
            </Link>
          </div>
          <p className="text-xs text-neutral-500">
            © 2025 Luma. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  )
}

