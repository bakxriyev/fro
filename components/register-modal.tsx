"use client"

import type React from "react"

import { useState } from "react"
import { X } from "lucide-react"

interface RegistrationModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (data: { full_name: string; phone_number: string }) => void
}

export default function RegistrationModal({ isOpen, onClose, onSubmit }: RegistrationModalProps) {
  const [fullName, setFullName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (fullName.trim() && phoneNumber.trim()) {
      onSubmit({ full_name: fullName, phone_number: phoneNumber })
      setFullName("")
      setPhoneNumber("")
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
          <X size={24} />
        </button>

        <h2 className="text-xl font-bold text-gray-900 mb-4">Ro'yxatdan o'tish</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
              To'liq ismingiz
            </label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
              required
            />
          </div>

          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
              Telefon raqamingiz
            </label>
            <input
              type="tel"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="+998 90 123 45 67"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition-colors"
          >
            Ro'yxatdan o'tish
          </button>
        </form>
      </div>
    </div>
  )
}
