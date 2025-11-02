"use client"

import { Search, User, Settings, Bell } from "lucide-react"
import Link from "next/link"

interface HeaderProps {
  title: string
  breadcrumb?: string
}

export function Header({ title, breadcrumb }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500 mb-1">Pages / {breadcrumb || title}</p>
          <h1 className="text-xl font-bold text-gray-900">{title}</h1>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Type here..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <Link href="/" className="text-sm text-gray-700 hover:text-gray-900 font-medium">
            Sign In
          </Link>

          <button className="p-2 text-gray-400 hover:text-gray-600">
            <User className="w-5 h-5" />
          </button>

          <button className="p-2 text-gray-400 hover:text-gray-600">
            <Settings className="w-5 h-5" />
          </button>

          <button className="p-2 text-gray-400 hover:text-gray-600">
            <Bell className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  )
}
