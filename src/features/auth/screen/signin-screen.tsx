import { useState } from "react";
import { Link } from "react-router-dom";
import { Text, Button, Input, Logo } from "@shared/ui";
import { FiArrowLeft, FiEye, FiEyeOff } from "react-icons/fi";

export function SignInScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: Implement sign-in logic
    console.log({ email, password });
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <div className="min-h-screen bg-white md:bg-neutral-50">
      <div className="min-h-screen flex flex-col md:flex-row">
        {/* Left Side - Branding (Desktop Only) */}
        <div className="hidden md:flex md:w-1/2 bg-primary p-12 items-center justify-center">
          <div className="max-w-md text-white">
            <div className="flex items-center gap-3 mb-8">
              <Logo mode="dark" size="medium" />
              <Text variant="heading-2" className="text-white">
                FinanceWrapped
              </Text>
            </div>

            <h1 className="text-4xl font-bold mb-6">
              Your financial story awaits.
            </h1>

            <Text variant="body" className="text-white/90 mb-8 text-lg">
              Securely access your personalized financial analytics and take
              control of your future with FinanceWrapped.
            </Text>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <Text variant="body" className="text-white">
                  Real-time spending analytics
                </Text>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <Text variant="body" className="text-white">
                  Bank-grade security encryption
                </Text>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <Text variant="body" className="text-white">
                  Smart goal tracking & insights
                </Text>
              </div>
            </div>

            {/* Phone Mockup */}
            <div className="mt-12 flex justify-center">
              <div className="relative w-64 h-[420px] bg-white rounded-[3rem] shadow-2xl p-4 border-8 border-neutral-800">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-neutral-800 rounded-b-2xl" />
                <div className="w-full h-full bg-neutral-100 rounded-[2rem] p-4">
                  <div className="space-y-3">
                    <div className="h-4 bg-primary/30 rounded w-3/4" />
                    <div className="h-4 bg-primary/20 rounded w-1/2" />
                    <div className="grid grid-cols-2 gap-2 mt-6">
                      <div className="h-20 bg-white rounded-lg" />
                      <div className="h-20 bg-white rounded-lg" />
                    </div>
                    <div className="h-32 bg-white rounded-lg mt-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Sign In Form */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-12">
          <div className="w-full max-w-md">
            {/* Mobile Header */}
            <div className="md:hidden mb-8">
              <Link
                to="/"
                className="inline-flex items-center text-neutral-600 hover:text-neutral-900 mb-6"
              >
                <FiArrowLeft className="w-5 h-5" />
              </Link>
              <div className="flex justify-center mb-6">
                <Logo mode="light" size="large" />
              </div>
            </div>

            {/* Desktop Back Link */}
            <div className="hidden md:block mb-8">
              <Link
                to="/"
                className="inline-flex items-center text-neutral-600 hover:text-neutral-900"
              >
                <FiArrowLeft className="w-5 h-5 mr-2" />
                Back
              </Link>
            </div>

            {/* Form Header */}
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Welcome back
              </h1>
              <Text variant="body" color="secondary">
                Enter your details to access your account
              </Text>
            </div>

            {/* Sign In Form */}
            <form onSubmit={handleSignIn} className="space-y-6">
              <div>
                <label htmlFor="email" className="block mb-2">
                  <Text variant="body" weight="medium">
                    Email Address
                  </Text>
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="user@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block mb-2">
                  <Text variant="body" weight="medium">
                    Password
                  </Text>
                </label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
                  >
                    {showPassword ? (
                      <FiEyeOff className="w-5 h-5" />
                    ) : (
                      <FiEye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex justify-end">
                <Link
                  to="/forgot-password"
                  className="text-primary hover:text-primary-600 text-sm font-medium"
                >
                  Forgot password?
                </Link>
              </div>

              <Button
                type="submit"
                variant="primary"
                size="large"
                className="w-full"
                state={loading ? "loading" : "default"}
              >
                Sign In
              </Button>

              <div className="text-center">
                <Text variant="body" color="secondary" className="inline">
                  Don't have an account?{" "}
                </Text>
                <Link
                  to="/signup"
                  className="text-primary hover:text-primary-600 font-medium"
                >
                  Sign up
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
