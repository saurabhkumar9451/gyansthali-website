'use client'

import { MessageCircle } from 'lucide-react'

export function WhatsAppButton() {
  const phone = '911140001234'
  const message = encodeURIComponent(
    "Hi Apex Academy! I'd like to know more about your courses.",
  )

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-lg shadow-[#25D366]/30 transition-transform hover:scale-105"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-30" />
      <MessageCircle className="size-6 fill-white" />
      <span className="hidden text-sm font-semibold sm:inline">Chat with us</span>
    </a>
  )
}
