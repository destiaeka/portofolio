export function SiteFooter() {
  return (
    <footer className="mt-12 border-t border-border">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between text-sm text-muted-foreground">
        <span>&copy; {new Date().getFullYear()} destiakea. All rights reserved.</span>
      </div>
    </footer>
  )
}
