"use client"

import Link from "next/link"
import { Github, Linkedin, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function SiteNavbar() {
  return (
    <nav className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
      {/* Logo / Brand */}
      <Link
        href="#home"
        className="font-semibold tracking-tight hover:opacity-90 transition-opacity"
      >
        <span className="text-lg">destiaeka</span>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-6 text-sm">
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
      <div className="hidden md:flex items-center gap-2">
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

      {/* Mobile Menu (Hamburger) */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <button className="p-2 rounded-md hover:bg-accent/10 transition-colors">
              <Menu className="size-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="p-6 space-y-4">
            <nav className="flex flex-col gap-4 text-lg">
              <Link href="#home" className="hover:text-accent">
                Home
              </Link>
              <Link href="#about" className="hover:text-accent">
                About
              </Link>
              <Link href="#experience" className="hover:text-accent">
                Experience
              </Link>
              <Link href="#skills" className="hover:text-accent">
                Skills
              </Link>
              <Link href="#projects" className="hover:text-accent">
                Project
              </Link>
              <Link href="#contact" className="hover:text-accent">
                Contact
              </Link>
              <div className="flex gap-3 pt-4 border-t border-accent/20">
                <a
                  href="https://github.com/destiaeka"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github className="size-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/destia-eka-rahmawati-08631228a/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin className="size-5" />
                </a>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}
