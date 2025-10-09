type Props = {
  label: string
  className?: string
}

export function SectionHeading({ label, className }: Props) {
  return (
    <div className={className}>
      <div className="flex items-center gap-4">
        <h2 className="text-xl sm:text-2xl font-extrabold lowercase text-accent">{label}</h2>
        <div className="h-px flex-1 bg-border" />
      </div>
    </div>
  )
}
