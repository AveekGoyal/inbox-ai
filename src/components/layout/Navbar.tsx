import { 
  Home,
  Zap,
  MessageCircle
} from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"

export function Navbar() {
  const navItems = [
    { name: 'Home', url: '/', icon: <Home /> },
    { name: 'Features', url: '/#features', icon: <Zap /> },
    { name: 'Testimonials', url: '/#testimonials', icon: <MessageCircle /> }
  ]

  return <NavBar items={navItems} 
    className="" 
  />
}
