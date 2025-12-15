import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { BottomSection } from '@/components/BottomSection'
import { AnimatedBackground } from '@/shared/UI/AnimatedBackground'

export default function Home() {
  return (
    <main className="h-screen flex flex-col overflow-hidden relative">
      <AnimatedBackground />
      <Header />
      <Hero />
      <BottomSection />
    </main>
  )
}

