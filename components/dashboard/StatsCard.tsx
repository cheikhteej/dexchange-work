import type { LucideIcon } from "lucide-react"

interface StatsCardProps {
  title: string
  value: string
  change: string
  icon: LucideIcon
}

export function StatsCard({ title, value, change, icon: Icon }: StatsCardProps) {
  const isPositive = change.startsWith("+")

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500 mb-1">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mb-2">{value}</p>
          <p className={`text-sm font-medium ${isPositive ? "text-green-600" : "text-red-600"}`}>{change}</p>
        </div>
        <div className="w-14 h-14 rounded-xl bg-[#4FD1C5] flex items-center justify-center">
          <Icon className="w-7 h-7 text-white" />
        </div>
      </div>
    </div>
  )
}
