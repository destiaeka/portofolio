"use client"

import Link from "next/link"
import { Github, Linkedin } from "lucide-react"

export function SiteNavbar() {
  return (
    <nav className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
      {/* Logo / Brand */}
      <Link href="#home" className="font-semibold tracking-tight hover:opacity-90 transition-opacity">
        <span className="sr-only">Home</span>
        <span className="text-lg">destiaeka</span>
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center gap-6 text-sm">
        <Link href="#home" className="hover:text-accent transition-colors">
          Home
        </Link>
        <Link href="#about" className="hover:text-accent transition-colors">
          About
        </Link>
        <Link href="#experience" className="hover:text-accent transition-colors">
          Experience
        </Link>
        <Link href="#skills" className="hover:text-accent transition-colors">
          Skills
        </Link>
        <Link href="#projects" className="hover:text-accent transition-colors">
          Project
        </Link>
        <Link href="#contact" className="hover:text-accent transition-colors">
          Contact
        </Link>
      </div>

      {/* Social Icons */}
      <div className="flex items-center gap-2">
        <a
          href="https://github.com/destiaeka"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="p-2 rounded-md hover:bg-accent/15 transition-colors"
          title="GitHub"
        >
          <Github className="size-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/destia-eka-rahmawati-08631228a/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="p-2 rounded-md hover:bg-accent/15 transition-colors"
          title="LinkedIn"
        >
          <Linkedin className="size-5" />
        </a>
      </div>
    </nav>
  )
}
