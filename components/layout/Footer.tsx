import Link from "next/link";

const footerLinks = {
  solutions: [
    { name: "Hygiene Solutions", href: "/what-we-do/hygiene-solutions" },
    { name: "Packaging Solutions", href: "/what-we-do/packaging-solutions" },
    { name: "Commercial Kitchen Solutions", href: "/what-we-do/commercial-kitchen-solutions" },
    { name: "Manpower Solutions", href: "/what-we-do/manpower-solutions" },
  ],
  industries: [
    { name: "Hospitality", href: "/who-we-serve/hospitality" },
    { name: "Corporates", href: "/who-we-serve/corporates" },
    { name: "Healthcare", href: "/who-we-serve/healthcare" },
    { name: "Education", href: "/who-we-serve/education" },
    { name: "Industrial", href: "/who-we-serve/industrial" },
  ],
  company: [
    { name: "About Us", href: "/about-us" },
    { name: "Our Philosophy", href: "/about-us/philosophy" },
    { name: "Sustainability", href: "/about-us/sustainability" },
    { name: "Leadership", href: "/about-us/leadership" },
    { name: "Careers", href: "/about-us/careers" },
  ],
  resources: [
    { name: "Blogs", href: "/insights/blogs" },
    { name: "Case Studies", href: "/insights/case-studies" },
    { name: "Industry Updates", href: "/insights/industry-updates" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold text-white">InfinityBox</span>
            </Link>
            <p className="text-neutral-400 mb-4 max-w-md">
              Pan-India operator delivering an integrated ecosystem across
              sustainable hygiene solutions, eco-friendly packaging, commercial
              kitchens, and workforce enablement.
            </p>
            <p className="text-sm text-neutral-500">
              Hygiene made Sustainable
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-white font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-white font-semibold mb-4">Industries</h3>
            <ul className="space-y-2">
              {footerLinks.industries.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 mb-6">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-neutral-500">
              © {new Date().getFullYear()} InfinityBox. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/privacy-policy"
                className="text-sm text-neutral-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-sm text-neutral-400 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

