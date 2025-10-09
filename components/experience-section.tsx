import Image from "next/image"
import { SectionHeading } from "./section-heading"

type Experience = {
  role: string
  org: string
  period: string
  description: string
  avatar: string
}

const experiences: Experience[] = [
  {
    role: "Intern Junior DevOps Engineer",
    org: "PT. Jetorbit Teknologi Indonesia",
    period: "July – December 2025",
    description:
      "Learn server infrastructure, containerized deployments, CI/CD pipelines, and monitoring to maintain availability and performance.",
    avatar: "/images/jetorbit.jpg",
  },
  {
    role: "Bootcamp Speaker — Linux Debian",
    org: "Komunitas IT SMKN 1 Nglagok",
    period: "December 2024",
    description:
      "Delivered hands-on sessions on Linux fundamentals, web server setup, DNS, Mail & Webmail Server, and networking with MikroTik.",
    avatar: "/images/kits.png",
  },
  {
    role: "Expo & Expose SMK Jatim 2024",
    org: "Cloud Computing & ITNSA Fields",
    period: "December 2024",
    description: "Participated and showcased projects related to cloud platforms and automation practices.",
    avatar: "/images/expo.jpg",
  },
  {
    role: "Atswanesa Skill Competition",
    org: "System Administration Category",
    period: "September 2024",
    description: "Participated in the Atswanesa Skill Competition 2024 in the fields of Subnetting and System Administration. Achieved 3rd place in the National-level System Administration category.",
    avatar: "/images/atswa.jpg",
  },
]

export function ExperienceSection() {
  return (
    <div className="space-y-6">
      <SectionHeading label="experience" />
      <ul className="space-y-4">
        {experiences.map((e) => (
          <li
            key={`${e.role}-${e.period}`}
            className="rounded-xl border border-border bg-background/40 p-4 md:p-5 flex gap-4 hover:border-accent transition-colors"
          >
            <div className="shrink-0">
              <div className="relative size-16 rounded-xl overflow-hidden border border-border bg-secondary">
                <Image src={e.avatar || "/placeholder.svg"} alt="" fill className="object-cover" />
              </div>
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold">{e.role}</h3>
              <p className="text-sm font-medium text-muted-foreground">
                {e.org} <span className="font-normal">({e.period})</span>
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">{e.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
