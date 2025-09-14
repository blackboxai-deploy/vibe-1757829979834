import AnimatedBackground from '@/components/AnimatedBackground'
import LoginForm from '@/components/LoginForm'

export default function LoginPage() {
  return (
    <main className="min-h-screen relative flex items-center justify-center p-4">
      {/* Animated Background */}
      <AnimatedBackground />
      
      {/* Main Content */}
      <div className="relative z-10 w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-violet-500/20 to-cyan-500/20 backdrop-blur-sm border border-white/10 rounded-3xl mb-6 shadow-2xl">
            <div className="w-12 h-12 bg-gradient-to-br from-violet-400 to-cyan-400 rounded-2xl flex items-center justify-center shadow-lg">
              <div className="w-6 h-6 bg-white/90 rounded-lg flex items-center justify-center">
                <div className="w-3 h-3 bg-gradient-to-br from-violet-600 to-cyan-600 rounded-sm" />
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-violet-200 to-cyan-200 bg-clip-text text-transparent mb-4 font-poppins">
            Premium Auth
          </h1>
          
          <p className="text-lg text-gray-300/90 max-w-sm mx-auto leading-relaxed">
            Experience the future of authentication with our modern, secure login system
          </p>
        </div>

        {/* Login Form */}
        <LoginForm />

        {/* Footer */}
        <div className="text-center mt-8 space-y-4">
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
            <a 
              href="#" 
              className="hover:text-white transition-colors duration-200 hover:underline"
            >
              Privacy Policy
            </a>
            <span className="w-1 h-1 bg-gray-500 rounded-full" />
            <a 
              href="#" 
              className="hover:text-white transition-colors duration-200 hover:underline"
            >
              Terms of Service
            </a>
            <span className="w-1 h-1 bg-gray-500 rounded-full" />
            <a 
              href="#" 
              className="hover:text-white transition-colors duration-200 hover:underline"
            >
              Support
            </a>
          </div>
          
          <p className="text-xs text-gray-500">
            © 2024 Premium Auth. All rights reserved.
          </p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        {/* Top Left Glow */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl animate-pulse" />
        
        {/* Bottom Right Glow */}
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000" />
        
        {/* Center Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse animation-delay-4000" />
      </div>

      {/* Vignette Effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/40 pointer-events-none" />
    </main>
  )
}