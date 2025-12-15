import { XIcon, TelegramIcon, DiscordIcon } from '@/shared/Media/Icon'

export function Header() {
  return (
    <header className="h-20 px-6 bg-transparent relative z-10 flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Luma</h3>
          <div className="flex gap-6">
            <a href="#" className="hover:text-cyan-400 transition-colors" aria-label="X">
              <XIcon />
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors" aria-label="Telegram">
              <TelegramIcon />
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors" aria-label="Discord">
              <DiscordIcon />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

