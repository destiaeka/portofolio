import { SectionHeading } from "./section-heading"

export function AboutSection() {
  return (
    <div className="space-y-6">
      <SectionHeading label="about" />

      <p className="text-muted-foreground leading-relaxed">
        I&apos;m a DevOps & System Administration enthusiast focused on building reliable infrastructure, automating
        deployments, and improving developer workflows. I work with Linux, containers, CI/CD pipelines, clouds, and
        infrastructure as code to deliver scalable, secure systems.
      </p>
    </div>
  )
}
