/* eslint-disable @typescript-eslint/no-explicit-any */
import { Text, Button, Logo } from "@shared/ui";
import { FiMail, FiChevronDown } from "react-icons/fi";
import { useState } from "react";

const footerLinks = {
  product: [
    { label: "Features", href: "#features" },
    { label: "How it Works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
    { label: "Reviews", href: "#reviews" },
  ],
  company: [
    { label: "About Us", href: "#about" },
    { label: "Blog", href: "#blog" },
    { label: "Careers", href: "#careers" },
    { label: "Contact", href: "#contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms of Service", href: "#terms" },
    { label: "Cookie Policy", href: "#cookies" },
    { label: "Licenses", href: "#licenses" },
  ],
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const socialLinks: any = [];

//   [
//   {
//     name: "X (Twitter)",
//     icon: (
//       <svg
//         className="w-5 h-5"
//         fill="currentColor"
//         viewBox="0 0 24 24"
//         aria-hidden="true"
//       >
//         <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
//       </svg>
//     ),
//     href: "#twitter",
//   },
//   {
//     name: "Instagram",
//     icon: (
//       <svg
//         className="w-5 h-5"
//         fill="currentColor"
//         viewBox="0 0 24 24"
//         aria-hidden="true"
//       >
//         <path
//           fillRule="evenodd"
//           d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
//           clipRule="evenodd"
//         />
//       </svg>
//     ),
//     href: "#instagram",
//   },
//   {
//     name: "LinkedIn",
//     icon: (
//       <svg
//         className="w-5 h-5"
//         fill="currentColor"
//         viewBox="0 0 24 24"
//         aria-hidden="true"
//       >
//         <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
//       </svg>
//     ),
//     href: "#linkedin",
//   },
//   {
//     name: "YouTube",
//     icon: (
//       <svg
//         className="w-5 h-5"
//         fill="currentColor"
//         viewBox="0 0 24 24"
//         aria-hidden="true"
//       >
//         <path
//           fillRule="evenodd"
//           d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
//           clipRule="evenodd"
//         />
//       </svg>
//     ),
//     href: "#youtube",
//   },
// ];

export function Footer() {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [email, setEmail] = useState("");

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="bg-[#0f172a] text-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Main Content - Desktop */}
        <div className="hidden md:grid md:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-16">
          {/* Left Column - Logo & Newsletter */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Logo mode="dark" size="small" />
              <Text variant="heading-3" className="text-white">
                FinanceWrapped
              </Text>
            </div>
            <Text variant="body" className="text-gray-400 leading-relaxed mb-6">
              Master your money with clarity. Get insights delivered straight to
              you.
            </Text>

            {/* Newsletter Form */}
            <div className="hidden gap-3">
              <div className="relative flex-1">
                <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-[#1e293b] border border-[#334155] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <Button variant="primary" size="medium" className="px-8">
                Subscribe
              </Button>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <Text
              variant="body"
              weight="bold"
              className="mb-4 text-white text-sm tracking-wider"
            >
              PRODUCT
            </Text>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <Text
              variant="body"
              weight="bold"
              className="mb-4 text-white text-sm tracking-wider"
            >
              COMPANY
            </Text>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <Text
              variant="body"
              weight="bold"
              className="mb-4 text-white text-sm tracking-wider"
            >
              LEGAL
            </Text>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile Accordions */}
        <div className="md:hidden mb-12">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Logo mode="dark" size="small" />
              <Text variant="heading-3" className="text-white">
                FinanceWrapped
              </Text>
            </div>
            <Text variant="body" className="text-gray-400 leading-relaxed mb-6">
              Master your money with clarity. Get insights delivered straight to
              you.
            </Text>

            {/* Newsletter Form - Mobile */}
            <div className="flex-col gap-3 hidden">
              <div className="relative">
                <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-[#1e293b] border border-[#334155] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <Button variant="primary" size="medium" className="w-full">
                Subscribe
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            {/* Product */}
            <div className="border-b border-[#1e293b] pb-4">
              <button
                onClick={() => toggleSection("product")}
                className="w-full flex items-center justify-between text-left"
              >
                <Text variant="body" weight="bold" className="text-white">
                  Product
                </Text>
                <FiChevronDown
                  className={`w-5 h-5 transition-transform ${
                    openSection === "product" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openSection === "product" && (
                <ul className="mt-4 space-y-3 pl-2">
                  {footerLinks.product.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Company */}
            <div className="border-b border-[#1e293b] pb-4">
              <button
                onClick={() => toggleSection("company")}
                className="w-full flex items-center justify-between text-left"
              >
                <Text variant="body" weight="bold" className="text-white">
                  Company
                </Text>
                <FiChevronDown
                  className={`w-5 h-5 transition-transform ${
                    openSection === "company" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openSection === "company" && (
                <ul className="mt-4 space-y-3 pl-2">
                  {footerLinks.company.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Legal */}
            <div className="border-b border-[#1e293b] pb-4">
              <button
                onClick={() => toggleSection("legal")}
                className="w-full flex items-center justify-between text-left"
              >
                <Text variant="body" weight="bold" className="text-white">
                  Legal
                </Text>
                <FiChevronDown
                  className={`w-5 h-5 transition-transform ${
                    openSection === "legal" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openSection === "legal" && (
                <ul className="mt-4 space-y-3 pl-2">
                  {footerLinks.legal.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Section - Desktop */}
        <div className="hidden md:block border-t border-[#1e293b] pt-8">
          <div className="flex justify-between items-center">
            {/* Left: Copyright & Made in Nigeria */}
            <div className="flex items-center gap-8">
              <Text variant="caption" className="text-gray-500 text-sm">
                © 2024 FinanceWrapped. All rights reserved.
              </Text>
              <Text variant="caption" className="text-gray-400 text-sm">
                Made with{" "}
                <span className="text-red-500" role="img" aria-label="love">
                  ❤️
                </span>{" "}
                in Lagos, Nigeria
              </Text>
            </div>

            {/* Center: Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social: any) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-[#1e293b] rounded-full flex items-center justify-center text-gray-400 hover:bg-[#334155] hover:text-white transition-all"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Right: Trust Badges */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-[#1e293b] rounded-lg">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
                <Text variant="caption" className="text-gray-400 text-xs">
                  Verified & Secure
                </Text>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Mobile */}
        <div className="md:hidden border-t border-[#1e293b] pt-8 space-y-6">
          {/* Social Links */}
          <div className="flex items-center justify-center gap-4">
            {socialLinks.map((social: any) => (
              <a
                key={social.name}
                href={social.href}
                className="w-10 h-10 bg-[#1e293b] rounded-full flex items-center justify-center text-gray-400 hover:bg-[#334155] hover:text-white transition-all"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Trust Badges */}
          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-2 px-4 py-2 bg-[#1e293b] rounded-lg">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7v10c0 5.52 3.82 10.43 9 11.73 5.18-1.3 9-6.21 9-11.73V7l-10-5zm0 18.92c-4.43-1.11-7.5-5.3-7.5-9.92V8.37l7.5-3.75 7.5 3.75V11c0 4.62-3.07 8.81-7.5 9.92z" />
              </svg>
              <Text variant="caption" className="text-gray-400 text-xs">
                Microsoft Azure
              </Text>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-[#1e293b] rounded-lg">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
              <Text variant="caption" className="text-gray-400 text-xs">
                Verified & Secure
              </Text>
            </div>
          </div>

          {/* Copyright & Made in Nigeria */}
          <div className="text-center space-y-2">
            <Text variant="caption" className="text-gray-500 text-sm block">
              © 2024 FinanceWrapped. All rights reserved.
            </Text>
            <Text variant="caption" className="text-gray-400 text-sm block">
              Made with{" "}
              <span className="text-red-500" role="img" aria-label="love">
                ❤️
              </span>{" "}
              in Ogbomoso, Nigeria
            </Text>
          </div>
        </div>
      </div>
    </footer>
  );
}
