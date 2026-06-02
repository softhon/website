"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { services } from "@/lib/services";
import ContactModal from "@/components/shared/ContactModal";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-[#e2e8f0] shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-blue rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">S</span>
          </div>
          <span
            className={cn(
              "font-semibold text-lg tracking-tight transition-colors",
              scrolled ? "text-navy" : pathname === "/" ? "text-white" : "text-navy"
            )}
          >
            Softhon
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {["Home", "Insights", "About"].map((item) => {
            const href = item === "Home" ? "/" : `/${item.toLowerCase()}`;
            const active = pathname === href;
            return (
              <Link
                key={item}
                href={href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-blue",
                  scrolled || pathname !== "/"
                    ? active ? "text-blue" : "text-navy"
                    : active ? "text-white" : "text-white/80 hover:text-white"
                )}
              >
                {item}
              </Link>
            );
          })}

          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className={cn(
                "flex items-center gap-1 text-sm font-medium transition-colors hover:text-blue",
                scrolled || pathname !== "/"
                  ? pathname.startsWith("/services") ? "text-blue" : "text-navy"
                  : "text-white/80 hover:text-white"
              )}
            >
              Services
              <ChevronDown
                className={cn(
                  "w-4 h-4 transition-transform",
                  servicesOpen && "rotate-180"
                )}
              />
            </button>

            {servicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3">
                <div className="bg-white rounded-2xl shadow-xl border border-[#e2e8f0] p-4 w-72">
                  <Link
                    href="/services"
                    className="block text-xs font-semibold text-blue uppercase tracking-wider mb-3 px-2"
                  >
                    All Services →
                  </Link>
                  <div className="space-y-1">
                    {services.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="block px-3 py-2 rounded-lg text-sm text-navy hover:bg-[#eff6ff] hover:text-blue transition-colors"
                      >
                        {s.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <ContactModal
            trigger={
              <button className="bg-blue hover:bg-blue/90 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors">
                Contact Us
              </button>
            }
          />
        </div>

        {/* Mobile toggle */}
        <button
          className={cn(
            "lg:hidden p-2 rounded-lg transition-colors",
            scrolled || pathname !== "/" ? "text-navy hover:bg-gray-100" : "text-white hover:bg-white/10"
          )}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-[#e2e8f0]">
          <div className="px-6 py-4 space-y-1">
            {[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Insights", href: "/insights" },
              { label: "About", href: "/about" },
            ].map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className={cn(
                  "block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                  pathname === href || (href !== "/" && pathname.startsWith(href))
                    ? "bg-[#eff6ff] text-blue"
                    : "text-navy hover:bg-gray-50"
                )}
              >
                {label}
              </Link>
            ))}

            <div className="pt-2">
              <ContactModal
                trigger={
                  <button className="w-full bg-blue text-white px-4 py-3 rounded-lg text-sm font-semibold">
                    Contact Us
                  </button>
                }
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
