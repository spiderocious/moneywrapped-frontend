import { useState } from "react";
import { Link } from "react-router-dom";
import { Text, Button, Input, Logo, Badge } from "@shared/ui";
import {
  FiArrowLeft,
  FiEye,
  FiEyeOff,
  FiLock,
  FiTrendingUp,
  FiTarget,
  FiBarChart2,
} from "react-icons/fi";

export function SignUpScreen() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!agreedToTerms) {
      alert("Please agree to the Terms of Service and Privacy Policy");
      return;
    }

    setLoading(true);
    // TODO: Implement sign-up logic
    console.log({ fullName, email, password });
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <div className="min-h-screen bg-white md:bg-neutral-50">
      <div className="min-h-screen flex flex-col md:flex-row">
        {/* Left Side - Branding (Desktop Only) */}
        <div className="hidden md:flex md:w-1/2 bg-neutral-100 p-12 items-center justify-center">
          <div className="max-w-2xl w-full">
            <div className="flex items-center gap-3 mb-12">
              <Logo mode="light" size="medium" />
              <Text variant="heading-2">FinanceWrapped</Text>
            </div>

            <Badge variant="info" className="mb-8 px-4 py-2">
              FREE FOREVER
            </Badge>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Understand your money in 60 seconds.
            </h1>

            <Text variant="body" color="secondary" className="mb-12 text-lg">
              Join thousands of Nigerians tracking their wealth, analyzing
              expenses, and reaching financial freedom.
            </Text>

            {/* Feature Cards */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white rounded-2xl p-6">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                  <FiLock className="w-6 h-6 text-primary" />
                </div>
                <Text variant="body" weight="semibold" className="mb-2">
                  Secure Banking
                </Text>
                <Text variant="caption" color="secondary">
                  Bank-grade encryption keeps your data safe.
                </Text>
              </div>

              <div className="bg-white rounded-2xl p-6">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                  <FiTrendingUp className="w-6 h-6 text-primary" />
                </div>
                <Text variant="body" weight="semibold" className="mb-2">
                  Smart Insights
                </Text>
                <Text variant="caption" color="secondary">
                  Automated categorization of your spending.
                </Text>
              </div>

              <div className="bg-white rounded-2xl p-6">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                  <FiTarget className="w-6 h-6 text-primary" />
                </div>
                <Text variant="body" weight="semibold" className="mb-2">
                  Goal Tracking
                </Text>
                <Text variant="caption" color="secondary">
                  Set targets and visualize your progress.
                </Text>
              </div>

              <div className="bg-white rounded-2xl p-6">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                  <FiBarChart2 className="w-6 h-6 text-primary" />
                </div>
                <Text variant="body" weight="semibold" className="mb-2">
                  Expense Analysis
                </Text>
                <Text variant="caption" color="secondary">
                  Deep dive into where your money goes.
                </Text>
              </div>
            </div>

            {/* Footer */}
            <Text variant="caption" color="secondary">
              © 2024 FinanceWrapped Nigeria.
            </Text>
          </div>
        </div>

        {/* Right Side - Sign Up Form */}
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
                Create your account
              </h1>
              <Text variant="body" color="secondary">
                Start your financial clarity journey today
              </Text>
            </div>

            {/* Sign Up Form */}
            <form onSubmit={handleSignUp} className="space-y-5">
              <div>
                <label htmlFor="fullName" className="block mb-2">
                  <Text variant="body" weight="medium">
                    Full Name
                  </Text>
                </label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2">
                  <Text variant="body" weight="medium">
                    Email Address
                  </Text>
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
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
                    placeholder="Create a strong password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength={8}
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

                {/* Password strength indicators */}
                <div className="mt-3 space-y-2">
                  <div className="flex gap-2">
                    <div
                      className={`h-1 flex-1 rounded ${password.length >= 8 ? "bg-green-500" : "bg-neutral-200"}`}
                    />
                    <div
                      className={`h-1 flex-1 rounded ${/\d/.test(password) ? "bg-green-500" : "bg-neutral-200"}`}
                    />
                    <div
                      className={`h-1 flex-1 rounded ${/[!@#$%^&*(),.?":{}|<>]/.test(password) ? "bg-green-500" : "bg-neutral-200"}`}
                    />
                  </div>
                  <div className="flex items-center gap-4 text-xs">
                    <span
                      className={
                        password.length >= 8
                          ? "text-green-600"
                          : "text-neutral-400"
                      }
                    >
                      ✓ 8+ characters
                    </span>
                    <span
                      className={
                        /\d/.test(password)
                          ? "text-green-600"
                          : "text-neutral-400"
                      }
                    >
                      ✓ 1 number
                    </span>
                    <span
                      className={
                        /[!@#$%^&*(),.?":{}|<>]/.test(password)
                          ? "text-green-600"
                          : "text-neutral-400"
                      }
                    >
                      ✓ 1 symbol
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="terms"
                  checked={agreedToTerms}
                  onChange={(e) => setAgreedToTerms(e.target.checked)}
                  className="mt-1 w-4 h-4 text-primary border-neutral-300 rounded focus:ring-primary"
                />
                <label htmlFor="terms">
                  <Text variant="caption" color="secondary">
                    I agree to the{" "}
                    <Link
                      to="/terms"
                      className="text-primary hover:text-primary-600"
                    >
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link
                      to="/privacy"
                      className="text-primary hover:text-primary-600"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </Text>
                </label>
              </div>

              <Button
                type="submit"
                variant="primary"
                size="large"
                className="w-full"
                state={loading ? "loading" : "default"}
              >
                Create Account
              </Button>

              <div className="text-center pt-2">
                <Text variant="body" color="secondary" className="inline">
                  Already have an account?{" "}
                </Text>
                <Link
                  to="/signin"
                  className="text-primary hover:text-primary-600 font-medium"
                >
                  Sign in
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
