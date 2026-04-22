"use client";

import { FormEvent, useState } from "react";
import { Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // TODO: Add your newsletter subscription logic here
    setTimeout(() => {
      setEmail("");
      setIsLoading(false);
    }, 500);
  };

  const footerSections = [
    {
      title: "Buying & Selling",
      links: [
        { label: "Find A Car", href: "#" },
        { label: "Listings By City", href: "#" },
        { label: "Sell Your Car", href: "#" },
        { label: "Compare Side By Side", href: "#" },
      ],
    },
    {
      title: "Resource",
      links: [
        { label: "Blog", href: "#" },
        { label: "Guides", href: "#" },
        { label: "FAQ", href: "#" },
        { label: "Help Center", href: "#" },
      ],
    },
    {
      title: "About",
      links: [
        { label: "Company", href: "#" },
        { label: "Career", href: "#" },
        { label: "Contact", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    { icon: Mail, href: "#", label: "Twitter" },
    { icon: Mail, href: "#", label: "Facebook" },
    { icon: Mail, href: "#", label: "LinkedIn" },
  ];

  const bottomLinks = [
    { label: "Terms of Service", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Trust & Safety", href: "#" },
    { label: "Law Enforcement", href: "#" },
  ];

  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Newsletter Section */}
          <div className="lg:col-span-2">
            <p className="text-sm font-semibold text-neutral-900">
              Subscribe To The Newsletter
            </p>
            <form onSubmit={handleSubscribe} className="mt-4 space-y-3">
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Email"
                  className="flex-1 rounded-l-md border border-neutral-300 px-3 py-2 text-sm placeholder-neutral-400 focus:border-red-600 focus:outline-none focus:ring-1 focus:ring-red-600"
                  required
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex items-center justify-center rounded-r-md bg-red-600 px-3 py-2 hover:bg-red-700 disabled:opacity-50"
                >
                  <svg
                    className="h-5 w-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </form>

            {/* Social Icons */}
            <div className="mt-4 flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="inline-flex items-center justify-center rounded-full bg-blue-500 p-2 text-white hover:bg-blue-600"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Links Sections */}
          {footerSections.map((section) => (
            <div key={section.title} className="lg:col-span-1">
              <p className="text-sm font-semibold text-neutral-900">
                {section.title}
              </p>
              <ul className="mt-4 space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-600 hover:text-neutral-900"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-neutral-200 bg-white px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-neutral-600">© 2023 Car Dealership</p>
            <div className="flex flex-wrap justify-center gap-4 sm:justify-end">
              {bottomLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-neutral-600 hover:text-neutral-900"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
