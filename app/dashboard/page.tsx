import {
  DollarSign,
  Users,
  UserPlus,
  TrendingUp,
  ArrowRight,
  Bell,
  ShoppingBag,
  CreditCard,
  Package,
  Zap,
} from "lucide-react"
import { StatsCard } from "@/components/dashboard/StatsCard"
import { projects, orders } from "@/data/mockData"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

const ProjectLogo = ({ icon }: { icon: string }) => {
  const logos = {
    chakra: (
      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center text-white font-bold text-sm shadow-md">
        XD
      </div>
    ),
    progress: (
      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-md">
        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 19.5h20L12 2z" />
        </svg>
      </div>
    ),
    fix: (
      <div className="w-10 h-10 rounded-lg bg-white border-2 border-gray-200 flex items-center justify-center shadow-md">
        <div className="grid grid-cols-2 gap-0.5">
          <div className="w-2 h-2 bg-yellow-500 rounded-sm" />
          <div className="w-2 h-2 bg-blue-500 rounded-sm" />
          <div className="w-2 h-2 bg-green-500 rounded-sm" />
          <div className="w-2 h-2 bg-red-500 rounded-sm" />
        </div>
      </div>
    ),
    mobile: (
      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-400 flex items-center justify-center shadow-md">
        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="8" />
        </svg>
      </div>
    ),
    pricing: (
      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-500 flex items-center justify-center shadow-md">
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L15.5 8.5L22 9.5L17 14.5L18 21L12 18L6 21L7 14.5L2 9.5L8.5 8.5L12 2Z" />
        </svg>
      </div>
    ),
    shop: (
      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center shadow-md">
        <ShoppingBag className="w-5 h-5 text-white" />
      </div>
    ),
  }

  return logos[icon as keyof typeof logos] || logos.chakra
}

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard title="Today's Money" value="$53,000" change="+55%" icon={DollarSign} />
        <StatsCard title="Today's Users" value="2,300" change="+5%" icon={Users} />
        <StatsCard title="New Clients" value="+3,052" change="-14%" icon={UserPlus} />
        <StatsCard title="Total Sales" value="$173,000" change="+8%" icon={TrendingUp} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="grid grid-cols-5 gap-6 items-center">
            <div className="col-span-2">
              <p className="text-sm text-gray-400 mb-2">Lorem ipsum</p>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Lorem Dashboard</h2>
              <p className="text-gray-600 text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <button className="flex items-center gap-2 text-gray-700 hover:gap-3 transition-all font-medium text-sm">
                Read more <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="col-span-3 bg-[#4FD1C5] rounded-xl p-6 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 400 300"
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0,80 Q100,40 200,80 T400,80 L400,300 L0,300 Z" fill="white" opacity="0.4" />
                  <path d="M0,120 Q100,80 200,120 T400,120 L400,300 L0,300 Z" fill="white" opacity="0.3" />
                  <path d="M0,160 Q100,120 200,160 T400,160 L400,300 L0,300 Z" fill="white" opacity="0.2" />
                </svg>
              </div>
              <div className="relative z-10 flex flex-row items-center justify-center gap-3 h-full min-h-[140px]">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6 text-[#4FD1C5] fill-[#4FD1C5]" />
                </div>
                <h3 className="text-3xl font-bold">chakra</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-xl overflow-hidden relative h-full min-h-[240px] shadow-sm">
          <img
            src="/business-meeting-team-collaboration.jpg"
            alt="Team meeting"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
          <div className="relative z-10 p-6 h-full flex flex-col justify-end text-white">
            <h2 className="text-2xl font-bold mb-2">Lorem Ipsum</h2>
            <p className="text-white/90 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem</p>
            <button className="flex items-center gap-2 text-white hover:gap-3 transition-all text-sm">
              Read more <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">Projects</h2>
              <div className="flex items-center gap-2 text-gray-500">
                <svg className="w-4 h-4 text-[#4FD1C5]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" />
                </svg>
                <span className="text-sm font-medium text-gray-400">30 done this month</span>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    COMPANIES
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    MEMBERS
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    BUDGET
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    COMPLETION
                  </th>
                  <th className="px-6 py-3"></th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100">
                {projects.map((project) => (
                  <tr key={project.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <ProjectLogo icon={project.icon} />
                        <span className="font-medium text-gray-900 text-sm">{project.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex -space-x-2">
                        {project.members.length > 0 ? (
                          project.members.slice(0, 5).map((member, i) => (
                            <Avatar key={i} className="w-7 h-7 border-2 border-white">
                              <AvatarImage src={member || "/placeholder.svg"} />
                              <AvatarFallback>M</AvatarFallback>
                            </Avatar>
                          ))
                        ) : (
                          <span className="text-gray-400 text-sm">No members</span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-gray-900 font-medium text-sm">{project.budget}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-[#4FD1C5] font-bold">{project.completion}%</span>
                        <div className="w-24 h-1 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-[#4FD1C5]" style={{ width: `${project.completion}%` }} />
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <button className="text-gray-400 hover:text-gray-600 text-xl">⋮</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-gray-900">Orders overview</h2>
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4 text-[#4FD1C5]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" />
              </svg>
              <span className="text-sm text-gray-400 font-medium">30% this month</span>
            </div>
          </div>

          <div className="space-y-5">
            {orders.map((order, index) => (
              <div key={order.id} className="flex items-start gap-3 relative">
                {index !== orders.length - 1 && <div className="absolute left-4 top-10 bottom-0 w-px bg-gray-200" />}
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center text-white flex-shrink-0 ${
                    order.icon === "bell"
                      ? "bg-[#4FD1C5]"
                      : order.icon === "cart"
                        ? "bg-red-500"
                        : order.icon === "payment"
                          ? "bg-[#4FD1C5]"
                          : order.icon === "card"
                            ? "bg-orange-500"
                            : "bg-purple-500"
                  }`}
                >
                  {order.icon === "bell" && <Bell className="w-4 h-4" />}
                  {order.icon === "cart" && <ShoppingBag className="w-4 h-4" />}
                  {order.icon === "payment" && <CreditCard className="w-4 h-4" />}
                  {order.icon === "card" && <CreditCard className="w-4 h-4" />}
                  {order.icon === "package" && <Package className="w-4 h-4" />}
                </div>
                <div className="flex-1">
                  <p className="font-bold text-gray-900 text-sm">{order.title}</p>
                  <p className="text-xs text-gray-400 mt-1">{order.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
