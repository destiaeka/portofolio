import Image from "next/image"
import { SectionHeading } from "./section-heading"
import { ExternalLink, Github } from "lucide-react"

type Project = {
  title: string
  description: string
  stack: string[]
  imageSrc: string
  repoUrl?: string
  liveUrl?: string
}

const projects: Project[] = [
  {
    title: "Company Profile Website",
    description:
      "Company Profile Website providing complete information about the company, its services, and achievements.",
    stack: ["HTML", "CSS", "JavaScript"],
    imageSrc: "/images/companyprofile.jpg",
    repoUrl: "https://github.com/destiaeka/Company-Profile.git",
    liveUrl: "https://destiaeka.github.io/Company-Profile/home.html",
  },
  {
    title: "Moodle Deployment for E-Learning",
    description:
      "Deployed and configured Moodle as an online learning platform to support digital classrooms, ensuring stable performance and secure access for students and teachers.",
    stack: ["Debian", "Apache", "PHP", "MySQL", "Moodle"],
    imageSrc: "/images/moodles.png",
  },
  {
    title: "Server Monitoring Dashboard",
    description: "Implemented a monitoring stack using Prometheus and Grafana to visualize system performance metrics in real-time, including CPU, memory, and network usage, ensuring proactive infrastructure maintenance.",
    stack: ["Prometheus", "Grafana", "Ubuntu", "Node Exporter"],
    imageSrc: "/images/grafana.jpg",
  },
]

export function ProjectsSection() {
  return (
    <div className="space-y-6">
      <SectionHeading label="project" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <article
            key={p.title}
            className="rounded-lg border border-border bg-background/40 overflow-hidden hover:border-accent transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={p.imageSrc || "/placeholder.svg"}
                alt={`${p.title} screenshot`}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-4 space-y-3">
              <div>
                <h3 className="font-semibold">{p.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.description}</p>
                <p className="mt-2 text-xs text-muted-foreground">{p.stack.join(" · ")}</p>
              </div>

              {/* tombol hanya muncul jika ada repoUrl atau liveUrl */}
              {(p.repoUrl || p.liveUrl) && (
                <div className="flex items-center gap-3">
                  {p.repoUrl && (
                    <a
                      href={p.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-sm hover:border-accent hover:text-accent transition-colors"
                      aria-label={`${p.title} GitHub repository`}
                    >
                      <Github className="size-4" />
                      <span>GitHub</span>
                    </a>
                  )}

                  {p.liveUrl && (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-3 py-1.5 text-sm hover:bg-accent/90 transition-colors"
                      aria-label={`${p.title} live site`}
                    >
                      <ExternalLink className="size-4" />
                      <span>Live</span>
                    </a>
                  )}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
