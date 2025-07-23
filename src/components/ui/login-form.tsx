"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff } from "lucide-react"
import sisfrota from "/lovable-uploads/364bcb6d-e8bc-4b2e-8d6c-917260041610.png"

interface LoginFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function LoginForm({ className, ...props }: LoginFormProps) {
  const [showPassword, setShowPassword] = React.useState(false)
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  const [isLoading, setIsLoading] = React.useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate login process
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    console.log("Login attempt:", { email, password })
    setIsLoading(false)
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={handleSubmit}>
        <div className="grid gap-4">
          {/* Logo and Title */}
          <div className="flex flex-col items-center text-center mb-6">
            <div className="relative mb-4">
              <img 
                src={sisfrota} 
                alt="SISFROTA Logo"
                className="w-24 h-24 object-contain"
              />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Login</h1>
          </div>

          {/* Email Field */}
          <div className="grid gap-2">
            <Label htmlFor="email" className="sr-only">
              Email
            </Label>
            <Input
              id="email"
              placeholder="Email"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 bg-white border-gray-300 text-gray-900 placeholder:text-gray-500"
            />
          </div>

          {/* Password Field */}
          <div className="grid gap-2">
            <Label htmlFor="password" className="sr-only">
              Senha
            </Label>
            <div className="relative">
              <Input
                id="password"
                placeholder="Senha"
                type={showPassword ? "text" : "password"}
                autoCapitalize="none"
                autoComplete="current-password"
                disabled={isLoading}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 pr-10"
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                onClick={() => setShowPassword(!showPassword)}
                disabled={isLoading}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4 text-gray-500" />
                ) : (
                  <Eye className="h-4 w-4 text-gray-500" />
                )}
                <span className="sr-only">
                  {showPassword ? "Ocultar senha" : "Mostrar senha"}
                </span>
              </Button>
            </div>
          </div>

          {/* Forgot Password Link */}
          <div className="text-left">
            <a 
              href="#" 
              className="text-sm font-medium text-primary hover:underline"
            >
              Esqueceu sua senha?
            </a>
          </div>

          {/* Login Button */}
          <Button 
            disabled={isLoading || !email || !password} 
            className="h-12 bg-primary hover:bg-primary-hover text-primary-foreground font-medium text-base disabled:opacity-50 disabled:bg-gray-300 disabled:text-gray-500"
          >
            {isLoading ? "ENTRANDO..." : "LOGIN"}
          </Button>
        </div>
      </form>
    </div>
  )
}