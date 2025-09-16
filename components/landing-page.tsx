"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import RegistrationModal from "./registration-modal"

export default function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [timeLeft, setTimeLeft] = useState({ minutes: 1, seconds: 46 })
  const router = useRouter()

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleRegister = () => {
    setIsModalOpen(true)
  }

  const handleModalSubmit = (data: { full_name: string; phone_number: string; tg_user: string }) => {
    setIsModalOpen(false)
    router.push("/thank-you")
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-600/30 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-blue-500/25 to-cyan-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-indigo-500/20 rounded-full blur-2xl animate-bounce delay-500"></div>
      </div>

      <div className="max-w-md mx-auto px-4 py-2 relative z-10">
        <div className="flex justify-center mb-4">
          <div className="bg-gradient-to-r from-blue-900/50 to-black/80 backdrop-blur-sm rounded-full px-6 py-3 flex items-center gap-2 border border-blue-500/50 shadow-lg shadow-blue-500/25 animate-pulse">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <div className="text-white text-sm font-medium">
              <div>19-sentyabr 19:00</div>
              <div>20-sentyabr 11:00</div>
              <div>21-sentyabr 11:00</div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-300 text-sm mb-4">Dostonjon Soyibov bilan 3 kunlik Bepul intensiv</p>

          <h1 className="text-white text-2xl font-bold mb-6 leading-tight">
            QANDAY QILIB 50$ BILAN
            <br />
            BIZNEZ BOSHLASH MUMKIN?
          </h1>

          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg px-4 py-3 mb-6 shadow-lg shadow-blue-500/30 transform hover:scale-105 transition-all duration-300 border border-blue-400/30">
            <p className="text-white text-sm">
              3 kunlik <span className="font-bold">BEPUL</span> intensivimda qatnashib 0 dan biznes boshlashni va borini
              rivojlantirishni o'rganing
            </p>
          </div>

          <div className="relative mb-8 flex justify-center -mt-4">
            <div className="absolute inset-0 bg-gradient-radial from-blue-600/40 via-blue-500/30 to-transparent rounded-full blur-xl animate-pulse"></div>
            <div className="relative">
              <div className="w-80 h-96 rounded-lg shadow-2xl shadow-blue-500/20">
                <Image
                  src="/iman.png"
                  alt="Dostonjon Soyibov"
                  width={320}
                  height={384}
                  className="w-full h-full object-cover object-top rounded-lg"
                  priority
                />
              </div>

              <div className="absolute left-[-20px] top-32 transform -translate-y-1/2">
                <div className="bg-gradient-to-r from-blue-900/90 to-black/90 backdrop-blur-sm rounded-lg px-3 py-2 border border-blue-500/50 shadow-lg shadow-blue-500/30">
                  <div className="text-white text-lg font-bold font-mono">
                    {String(timeLeft.minutes).padStart(2, "0")}:{String(timeLeft.seconds).padStart(2, "0")}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={handleRegister}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-lg py-4 px-6 rounded-full mb-2 flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/30 animate-pulse hover:animate-none border border-blue-400/30"
          >
            BEPUL QATNASHISH
            <span className="text-white text-xl transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>

          <p className="text-gray-500 text-sm mb-8">Bepul qatnashish uchun bosing</p>

          <div className="mb-8">
            <h2 className="text-white font-bold text-xl mb-6">Bepul intensivda Siz:</h2>

            <div className="space-y-4 text-left">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-blue-900/20 to-transparent border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
                <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-lg shadow-blue-500/30">
                  <span className="text-white text-xs">✓</span>
                </div>
                <p className="text-white text-sm leading-relaxed">
                  Qanday qilib 2025 yildagi tekshirilgan va pulsiz, oson daromadga chiqsa bo'ladigan biznes sohalar
                  tanlashni
                </p>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-blue-900/20 to-transparent border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
                <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-lg shadow-blue-500/30">
                  <span className="text-white text-xs">✓</span>
                </div>
                <p className="text-white text-sm leading-relaxed">
                  Qanday qilib bor biznesni daromadini <span className="font-bold">5x</span> oshirishni
                </p>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-blue-900/20 to-transparent border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
                <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-lg shadow-blue-500/30">
                  <span className="text-white text-xs">✓</span>
                </div>
                <p className="text-white text-sm leading-relaxed">
                  Qanday qilib biznesni boshlash va doimiy mijoz oqimini qurishni
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={handleRegister}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-lg py-4 px-6 rounded-full mb-2 flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/30 animate-pulse hover:animate-none border border-blue-400/30"
          >
            BEPUL QATNASHISH
            <span className="text-white text-xl transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>

          <p className="text-gray-500 text-sm mb-8">Bepul qatnashish uchun bosing</p>
        </div>
      </div>

      <footer className="w-full py-6 mt-6 relative z-10">
        <div className="flex items-center justify-center gap-3">
          <p className="text-gray-500 text-sm">Created by</p>
          <a
            href="https://t.me/it_zoneuz"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity duration-300 transform hover:scale-105"
          >
            <Image src="/itzone.png" alt="IT Zone Telegram" width={90} height={90} className="cursor-pointer" />
          </a>
        </div>
      </footer>

      <RegistrationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handleModalSubmit} />
    </div>
  )
}
