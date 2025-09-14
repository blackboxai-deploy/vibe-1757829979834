'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginSchema, type LoginFormData } from '@/lib/validations'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

export default function LoginForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [loginMode, setLoginMode] = useState<'login' | 'register' | 'forgot'>('login')

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, touchedFields },
    reset,
    watch,
  } = useForm({
    resolver: zodResolver(loginSchema),
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  })

  const watchedEmail = watch('email')

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      console.log('Login successful:', data)
      
      // Show success message
      alert(`Welcome back! Login successful for ${data.email}`)
      
      // Reset form
      reset()
    } catch (error) {
      console.error('Login failed:', error)
      alert('Login failed. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleModeSwitch = (mode: 'login' | 'register' | 'forgot') => {
    setLoginMode(mode)
    reset()
    setIsLoading(false)
  }

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Glass-morphism Card */}
      <Card className="backdrop-blur-xl bg-white/10 border-white/20 shadow-2xl shadow-black/20 transition-all duration-500 hover:bg-white/15 hover:shadow-3xl">
        <CardHeader className="space-y-2 text-center pb-6">
          <div className="mx-auto w-16 h-16 bg-gradient-to-br from-violet-400 to-cyan-400 rounded-2xl flex items-center justify-center mb-4 shadow-lg animate-pulse">
            <div className="w-8 h-8 bg-white/90 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-gradient-to-br from-violet-600 to-cyan-600 rounded-sm" />
            </div>
          </div>
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent font-poppins">
            {loginMode === 'login' && 'Welcome Back'}
            {loginMode === 'register' && 'Create Account'}
            {loginMode === 'forgot' && 'Reset Password'}
          </CardTitle>
          <CardDescription className="text-gray-300/90 text-base">
            {loginMode === 'login' && 'Sign in to your account to continue'}
            {loginMode === 'register' && 'Join us today and get started'}
            {loginMode === 'forgot' && 'Enter your email to reset your password'}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Email Input */}
            <div className="space-y-2">
              <Label 
                htmlFor="email" 
                className="text-sm font-medium text-gray-200 flex items-center gap-2"
              >
                Email Address
                {touchedFields.email && !errors.email && (
                  <span className="text-green-400 text-xs animate-fade-in">✓</span>
                )}
              </Label>
              <div className="relative group">
                <Input
                  {...register('email')}
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className={`
                    h-12 bg-white/5 border-white/20 text-white placeholder:text-gray-400
                    focus:bg-white/10 focus:border-white/40 focus:ring-2 focus:ring-violet-500/20
                    transition-all duration-300 hover:bg-white/8
                    ${errors.email ? 'border-red-400 focus:border-red-400 focus:ring-red-500/20' : ''}
                    ${touchedFields.email && !errors.email ? 'border-green-400 focus:border-green-400' : ''}
                  `}
                />
                {watchedEmail && (
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 transition-all duration-300">
                    {errors.email ? (
                      <span className="text-red-400 text-sm">✗</span>
                    ) : (
                      <span className="text-green-400 text-sm animate-fade-in">✓</span>
                    )}
                  </div>
                )}
              </div>
              {errors.email && (
                <p className="text-red-400 text-sm animate-fade-in flex items-center gap-1">
                  <span className="text-xs">⚠</span>
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password Input */}
            {loginMode !== 'forgot' && (
              <div className="space-y-2">
                <Label 
                  htmlFor="password" 
                  className="text-sm font-medium text-gray-200 flex items-center gap-2"
                >
                  Password
                  {touchedFields.password && !errors.password && (
                    <span className="text-green-400 text-xs animate-fade-in">✓</span>
                  )}
                </Label>
                <div className="relative group">
                  <Input
                    {...register('password')}
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    className={`
                      h-12 bg-white/5 border-white/20 text-white placeholder:text-gray-400 pr-12
                      focus:bg-white/10 focus:border-white/40 focus:ring-2 focus:ring-violet-500/20
                      transition-all duration-300 hover:bg-white/8
                      ${errors.password ? 'border-red-400 focus:border-red-400 focus:ring-red-500/20' : ''}
                      ${touchedFields.password && !errors.password ? 'border-green-400 focus:border-green-400' : ''}
                    `}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {showPassword ? (
                      <span className="text-sm select-none">👁️</span>
                    ) : (
                      <span className="text-sm select-none">👁️‍🗨️</span>
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red-400 text-sm animate-fade-in flex items-center gap-1">
                    <span className="text-xs">⚠</span>
                    {errors.password.message}
                  </p>
                )}
              </div>
            )}

            {/* Remember Me & Forgot Password */}
            {loginMode === 'login' && (
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    {...register('rememberMe')}
                    id="remember"
                    className="border-white/20 data-[state=checked]:bg-violet-500 data-[state=checked]:border-violet-500"
                  />
                  <Label htmlFor="remember" className="text-sm text-gray-300 select-none">
                    Remember me
                  </Label>
                </div>
                <button
                  type="button"
                  onClick={() => handleModeSwitch('forgot')}
                  className="text-sm text-violet-400 hover:text-violet-300 transition-colors duration-200"
                >
                  Forgot password?
                </button>
              </div>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isLoading || !isValid}
              className="w-full h-12 bg-gradient-to-r from-violet-500 to-cyan-500 hover:from-violet-600 hover:to-cyan-600 
                text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-[1.02] 
                disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg hover:shadow-xl
                focus:ring-2 focus:ring-violet-500/20"
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                  <span>
                    {loginMode === 'login' && 'Signing in...'}
                    {loginMode === 'register' && 'Creating account...'}
                    {loginMode === 'forgot' && 'Sending reset link...'}
                  </span>
                </div>
              ) : (
                <span>
                  {loginMode === 'login' && 'Sign In'}
                  {loginMode === 'register' && 'Create Account'}
                  {loginMode === 'forgot' && 'Send Reset Link'}
                </span>
              )}
            </Button>
          </form>
        </CardContent>

        <CardFooter className="flex flex-col space-y-4 pt-6">
          {/* Mode Switching */}
          <div className="text-center space-y-2">
            {loginMode === 'login' && (
              <p className="text-gray-400 text-sm">
                Don&apos;t have an account?{' '}
                <button
                  onClick={() => handleModeSwitch('register')}
                  className="text-violet-400 hover:text-violet-300 transition-colors duration-200 font-medium"
                >
                  Sign up
                </button>
              </p>
            )}
            {loginMode === 'register' && (
              <p className="text-gray-400 text-sm">
                Already have an account?{' '}
                <button
                  onClick={() => handleModeSwitch('login')}
                  className="text-violet-400 hover:text-violet-300 transition-colors duration-200 font-medium"
                >
                  Sign in
                </button>
              </p>
            )}
            {loginMode === 'forgot' && (
              <p className="text-gray-400 text-sm">
                Remember your password?{' '}
                <button
                  onClick={() => handleModeSwitch('login')}
                  className="text-violet-400 hover:text-violet-300 transition-colors duration-200 font-medium"
                >
                  Sign in
                </button>
              </p>
            )}
          </div>

          {/* Social Login Placeholder */}
          <div className="w-full">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/20" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-transparent text-gray-400">Or continue with</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3 mt-4">
              <Button
                type="button"
                variant="outline"
                className="h-12 bg-white/5 border-white/20 text-white hover:bg-white/10 transition-all duration-300"
              >
                <span className="mr-2">🔍</span>
                Google
              </Button>
              <Button
                type="button"
                variant="outline"
                className="h-12 bg-white/5 border-white/20 text-white hover:bg-white/10 transition-all duration-300"
              >
                <span className="mr-2">📘</span>
                Facebook
              </Button>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}