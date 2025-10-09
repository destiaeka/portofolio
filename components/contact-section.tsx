"use client"

import { ShimmerButton } from "@/components/ui/shimmer-button"
import { Github, Instagram, Linkedin } from "lucide-react"
import { useState } from "react"

export function ContactSection() {
  const [showModal, setShowModal] = useState(false)

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/6282244307548?text=Halo%20Destika,%20saya%20tertarik%20dengan%20portfolio%20Anda!",
      "_blank"
    )
    setShowModal(false)
  }

  const handleEmail = () => {
    window.location.href =
      "mailto:destiaeka38@gmail.com?subject=Halo%20Destika&body=Hai%20Destika,%20saya%20tertarik%20dengan%20portfolio%20Anda!"
    setShowModal(false)
  }

  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
      {/* Tombol Contact Me dengan Shimmer */}
      <ShimmerButton
        onClick={() => setShowModal(true)}
        className="inline-flex items-center justify-center rounded-full bg-accent text-white px-5 py-2 font-medium transition-colors hover:bg-accent/90"
      >
        Contact Me
      </ShimmerButton>


      {/* Ikon Sosial Media */}
      <div className="flex items-center gap-3">
        <a
          href="https://www.linkedin.com/in/destia-eka-rahmawati-08631228a/"
          target="_blank"
          rel="noreferrer"
          className="p-2 rounded-md border border-border hover:border-accent hover:text-accent transition-colors"
          aria-label="LinkedIn"
          title="LinkedIn"
        >
          <Linkedin className="size-5" />
        </a>

        <a
          href="https://github.com/destiaeka"
          target="_blank"
          rel="noreferrer"
          className="p-2 rounded-md border border-border hover:border-accent hover:text-accent transition-colors"
          aria-label="GitHub"
          title="GitHub"
        >
          <Github className="size-5" />
        </a>

        <a
          href="https://instagram.com/destia.co.id"
          target="_blank"
          rel="noreferrer"
          className="p-2 rounded-md border border-border hover:border-accent hover:text-accent transition-colors"
          aria-label="Instagram"
          title="Instagram"
        >
          <Instagram className="size-5" />
        </a>
      </div>

      {/* Modal Pilihan Kontak */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-background border border-border rounded-2xl p-6 w-72 space-y-4 text-center shadow-lg">
            <h3 className="font-semibold text-lg text-accent">Hubungi Saya via:</h3>

            <div className="flex flex-col gap-3">
              <button
                onClick={handleWhatsApp}
                className="w-full rounded-full bg-green-500 text-white py-2 font-medium hover:bg-green-600 transition-colors"
              >
                WhatsApp
              </button>

              <button
                onClick={handleEmail}
                className="w-full rounded-full bg-blue-500 text-white py-2 font-medium hover:bg-blue-600 transition-colors"
              >
                Email
              </button>
            </div>

            <button
              onClick={() => setShowModal(false)}
              className="text-sm text-muted-foreground hover:text-accent mt-3"
            >
              Batal
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
