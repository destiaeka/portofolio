import { SiteNavbar } from "@/components/site-navbar"
import { Hero } from "@/components/hero"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import { SiteFooter } from "@/components/site-footer"
import { ExperienceSection } from "@/components/experience-section"
import { SkillsSection } from "@/components/skills-section"

export default function HomePage() {
  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-border">
        <SiteNavbar />
      </header>

      <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        <section id="home" className="rounded-xl border border-border bg-card p-6 md:p-10">
          <Hero />
        </section>

        <section id="about" className="rounded-xl border border-border bg-card p-6 md:p-10">
          <AboutSection />
        </section>

        <section id="experience" className="rounded-xl border border-border bg-card p-6 md:p-10">
          <ExperienceSection />
        </section>

        <section id="skills" className="rounded-xl border border-border bg-card p-6 md:p-10">
          <SkillsSection />
        </section>

        <section id="projects" className="rounded-xl border border-border bg-card p-6 md:p-10">
          <ProjectsSection />
        </section>

        <section id="contact" className="rounded-xl border border-border bg-card p-6 md:p-10">
          <ContactSection />
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
