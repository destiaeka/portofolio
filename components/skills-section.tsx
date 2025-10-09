import { SectionHeading } from "./section-heading"

const skills = [
  "Linux",
  "Containerization",
  "CI/CD",
  "Cloud",
  "Monitoring",
  "Networking",
  "Docker",
  "GitHub Actions",
  "Prometheus",
  "Grafana",
  "Bash Scripting",
  "Git",
  "Nginx",
  "High Availability",
  "Load Balancing",
]

export function SkillsSection() {
  return (
    <div className="space-y-6">
      <SectionHeading label="skills" />
      <div className="relative overflow-hidden rounded-xl border border-border bg-background/40 p-3">
        <div className="flex flex-wrap gap-3">
          {skills.map((s, i) => (
            <span
              key={i}
              className="inline-flex select-none items-center rounded-full border border-border bg-card px-4 py-2 text-sm font-medium hover:-translate-y-0.5 hover:border-accent hover:text-accent transition"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
