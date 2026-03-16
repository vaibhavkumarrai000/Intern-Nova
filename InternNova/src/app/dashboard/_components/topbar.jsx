import { Menu, UserCircle } from 'lucide-react'

export default function Topbar() {
  return (
    <header className="w-full flex items-center justify-between bg-background border-b border-border/60 px-6 h-14 shrink-0">
      <div className="md:hidden">
        <Menu size={18} className="text-muted-foreground" />
      </div>
      <h1 className="text-sm font-semibold">Dashboard</h1>
      <UserCircle size={22} className="text-muted-foreground" />
    </header>
  )
}
