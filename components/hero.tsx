"use client"

import Image from "next/image"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { Download } from "lucide-react"
import { TypingAnimation } from "@/components/ui/typing-animation"

export function Hero() {
  const handleDownloadCV = () => {
    const fileUrl = "/destiaekacv.pdf"
    const fileName = "Destiaeka_CV.pdf"

    // Buat elemen <a> sementara untuk trigger download langsung
    const link = document.createElement("a")
    link.href = fileUrl
    link.download = "/destiaekacv.pdf"
    link.style.display = "none"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {/* Bagian Teks */}
      <div className="space-y-3">
        <p className="text-sm text-muted-foreground">
          Hello, I&apos;m <span className="font-semibold">destiaeka</span>!
        </p>

        <TypingAnimation
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-pretty text-accent"
          speed={2000}   // kecepatan mengetik per karakter (ms)
          loop={true} 
        >
          Junior DevOps Engineer
        </TypingAnimation>


        <p className="text-muted-foreground max-w-prose">
          I design, automate, and operate reliable systems. I enjoy CI/CD,
          containers, cloud, and infrastructure as code.
        </p>

        <div className="pt-2">
          <ShimmerButton
            onClick={handleDownloadCV}
            className="mt-6 gap-2 bg-accent text-white hover:bg-accent/90"
            data-testid="button-download-cv"
          >
            <Download className="h-4 w-4" />
            Download CV
          </ShimmerButton>
        </div>
      </div>

      {/* Foto Profil */}
      <div className="justify-self-center md:justify-self-end">
        <div className="relative aspect-square w-56 sm:w-64 md:w-72 rounded-3xl border border-border bg-secondary overflow-hidden">
          <Image
            src="/profile.jpeg"
            alt="Profile photo"
            fill
            sizes="(min-width: 768px) 18rem, 14rem"
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  )
}
