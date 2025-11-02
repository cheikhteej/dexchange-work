import { authors, projects } from "@/data/mockData"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function TablesPage() {
  return (
    <div className="space-y-6">
      <div className="rounded-xl shadow-sm overflow-hidden">
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-900">Authors Table</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  AUTHOR
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  FUNCTION
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  STATUS
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  EMPLOYED
                </th>
                <th className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {authors.map((author) => (
                <tr key={author.id} className="border-b border-gray-50 last:border-0">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={author.avatar || "/placeholder.svg"} />
                        <AvatarFallback>{author.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{author.name}</p>
                        <p className="text-xs text-gray-400">{author.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{author.function}</p>
                      <p className="text-xs text-gray-400">{author.department}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Badge
                      variant={author.status === "Online" ? "default" : "secondary"}
                      className={
                        author.status === "Online"
                          ? "bg-[#4FD1C5] hover:bg-[#38B2AC] text-white"
                          : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                      }
                    >
                      {author.status}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-900">{author.employed}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <Button variant="link" size="sm" className="text-gray-900 hover:text-gray-600">
                      Edit
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="p-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#4FD1C5]" />
            <h2 className="text-xl font-bold text-gray-900">Projects</h2>
            <span className="text-xs text-gray-400 ml-2">30 done this month</span>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100">
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
            <tbody className="bg-white">
              {projects.map((project) => (
                <tr key={project.id} className="border-b border-gray-50 last:border-0">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-xs ${
                          project.id === 1
                            ? "bg-purple-600"
                            : project.id === 2
                              ? "bg-blue-500"
                              : project.id === 3
                                ? "bg-orange-500"
                                : project.id === 4
                                  ? "bg-green-500"
                                  : project.id === 5
                                    ? "bg-blue-600"
                                    : "bg-pink-600"
                        }`}
                      >
                        {project.icon.substring(0, 1).toUpperCase()}
                      </div>
                      <span className="font-semibold text-gray-900 text-sm">{project.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex -space-x-2">
                      {project.members.slice(0, 4).map((member, idx) => (
                        <Avatar key={idx} className="w-7 h-7 border-2 border-white">
                          <AvatarImage src={member || "/placeholder.svg"} />
                          <AvatarFallback>M</AvatarFallback>
                        </Avatar>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-semibold text-gray-900">{project.budget}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-semibold text-[#4FD1C5]">{project.completion}%</span>
                      <div className="w-32 h-1 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-[#4FD1C5] rounded-full" style={{ width: `${project.completion}%` }} />
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <button className="text-gray-300 hover:text-gray-500 text-xl font-bold">⋮</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
