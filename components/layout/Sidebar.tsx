"use client"

import { Home, CreditCard, BarChart3, User, LogIn, UserPlus, Table } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const menuItems = [
  { icon: Home, label: "Dashboard", path: "/dashboard" },
  { icon: Table, label: "Tables", path: "/tables" },
]

const transactionItems = [
  { icon: BarChart3, label: "TRANSACTIONS", path: "#", isHeader: true },
  { icon: CreditCard, label: "Billing", path: "/billing" },
  { icon: BarChart3, label: "RTL", path: "/rtl" },
]

const accountItems = [
  { icon: User, label: "ACCOUNT PAGES", path: "#", isHeader: true },
  { icon: User, label: "Profile", path: "/profile" },
  { icon: LogIn, label: "Sign In", path: "/auth" },
  { icon: UserPlus, label: "Sign Up", path: "/auth" },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white border-r border-gray-200 overflow-y-auto">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 bg-[#4FD1C5] rounded-lg" />
          <span className="text-xl font-bold text-gray-800">DEXCHANGE SAAS</span>
        </div>

        <nav className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.path
            return (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                  isActive ? "bg-[#4FD1C5] text-white" : "text-gray-700 hover:bg-gray-100",
                )}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </Link>
            )
          })}
        </nav>

        <div className="mt-8 space-y-1">
          {transactionItems.map((item) => {
            const Icon = item.icon
            if (item.isHeader) {
              return (
                <div key={item.label} className="px-4 py-2 text-xs font-bold text-gray-500 uppercase tracking-wider">
                  {item.label}
                </div>
              )
            }
            const isActive = pathname === item.path
            return (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                  isActive ? "bg-[#4FD1C5] text-white" : "text-gray-700 hover:bg-gray-100",
                )}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </Link>
            )
          })}
        </div>

        <div className="mt-8 space-y-1">
          {accountItems.map((item) => {
            const Icon = item.icon
            if (item.isHeader) {
              return (
                <div key={item.label} className="px-4 py-2 text-xs font-bold text-gray-500 uppercase tracking-wider">
                  {item.label}
                </div>
              )
            }
            const isActive = pathname === item.path
            return (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                  isActive ? "bg-[#4FD1C5] text-white" : "text-gray-700 hover:bg-gray-100",
                )}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </Link>
            )
          })}
        </div>

        <div className="mt-8 p-4 bg-[#4FD1C5] rounded-xl">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-[#4FD1C5] mb-3 text-xl font-bold">
            ?
          </div>
          <h3 className="font-bold text-white mb-1">Need help?</h3>
          <p className="text-sm text-white/90 mb-3">Please check our docs</p>
          <button className="w-full px-4 py-2 bg-white text-gray-900 text-sm font-medium rounded-lg hover:bg-gray-100 transition-colors">
            DOCUMENTATION
          </button>
        </div>
      </div>
    </aside>
  )
}
