import { Facebook, Apple } from "lucide-react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative bg-gradient-to-br from-[#4FD1C5] via-[#38B2AC] to-[#4FD1C5] h-[65vh] overflow-hidden">
        <div className="absolute inset-0">
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="wave-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M0 50 Q 25 30, 50 50 T 100 50" stroke="rgba(255,255,255,0.1)" strokeWidth="2" fill="none" />
                <path d="M0 70 Q 25 50, 50 70 T 100 70" stroke="rgba(255,255,255,0.05)" strokeWidth="2" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#wave-pattern)" />
          </svg>
        </div>

        <header className="relative z-10 flex items-center justify-between px-8 py-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <span className="text-sm font-bold text-white tracking-wide">DEXCHANGE SAAS</span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/dashboard"
              className="text-xs font-medium text-white hover:text-white/80 transition-colors flex items-center gap-1"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              DASHBOARD
            </Link>
            <Link
              href="/profile"
              className="text-xs font-medium text-white hover:text-white/80 transition-colors flex items-center gap-1"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              PROFILE
            </Link>
            <Link
              href="/"
              className="text-xs font-medium text-white hover:text-white/80 transition-colors flex items-center gap-1"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                />
              </svg>
              SIGN UP
            </Link>
            <Link
              href="/"
              className="text-xs font-medium text-white hover:text-white/80 transition-colors flex items-center gap-1"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                />
              </svg>
              SIGN IN
            </Link>
            <Button size="sm" className="bg-white text-gray-900 hover:bg-gray-100 text-xs font-medium px-4">
              Call to action
            </Button>
          </nav>
        </header>

        <div className="relative z-10 flex items-start justify-center pt-8">
          <h1 className="text-4xl font-bold text-white">Welcome!</h1>
        </div>
      </div>

      <div className="relative -mt-32 px-4 pb-12">
        <div className="max-w-sm mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <h2 className="text-base font-semibold text-gray-900 text-center mb-4">Register with</h2>

            <div className="flex gap-3 justify-center mb-4">
              <Button
                variant="outline"
                className="w-14 h-14 border-gray-300 hover:bg-gray-50 bg-transparent rounded-xl"
              >
                <Facebook className="w-5 h-5 text-gray-700" fill="currentColor" />
              </Button>
              <Button
                variant="outline"
                className="w-14 h-14 border-gray-300 hover:bg-gray-50 bg-transparent rounded-xl"
              >
                <Apple className="w-5 h-5 text-gray-700" fill="currentColor" />
              </Button>
              <Button
                variant="outline"
                className="w-14 h-14 border-gray-300 hover:bg-gray-50 font-bold text-lg bg-transparent text-gray-700 rounded-xl"
              >
                G
              </Button>
            </div>

            <div className="relative mb-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="px-2 bg-white text-gray-500">or</span>
              </div>
            </div>

            <form className="space-y-3">
              <div className="space-y-1.5">
                <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                  Name
                </Label>
                <Input
                  id="name"
                  placeholder="Your full name"
                  className="h-11 text-sm border-gray-300 focus:border-[#4FD1C5] focus:ring-[#4FD1C5]"
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Your email address"
                  className="h-11 text-sm border-gray-300 focus:border-[#4FD1C5] focus:ring-[#4FD1C5]"
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Your password"
                  className="h-11 text-sm border-gray-300 focus:border-[#4FD1C5] focus:ring-[#4FD1C5]"
                />
              </div>

              <div className="flex items-center gap-2 py-1">
                <Switch id="remember" className="data-[state=checked]:bg-[#4FD1C5]" />
                <Label htmlFor="remember" className="text-sm font-normal cursor-pointer text-gray-700">
                  Remember me
                </Label>
              </div>

              <Button className="w-full h-11 bg-[#4FD1C5] hover:bg-[#38B2AC] text-white font-medium text-sm">
                SIGN UP
              </Button>

              <p className="text-center text-sm text-gray-600 pt-1">
                Already have an account?{" "}
                <Link href="/" className="text-[#4FD1C5] hover:text-[#38B2AC] font-medium">
                  Sign in
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
