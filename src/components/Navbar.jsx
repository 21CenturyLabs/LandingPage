export default function Navbar() {
  const links = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Our Works", href: "#works" },
    { name: "Our Team", href: "#team" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <nav className="fixed top-4 left-1/2 z-50 -translate-x-1/2 rounded-2xl bg-white/40 px-6 py-3 backdrop-blur-md shadow-lg">
      <ul className="flex items-center gap-8 text-sm font-medium text-gray-800">
        {links.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className="transition hover:text-gray-900 hover:font-semibold"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
