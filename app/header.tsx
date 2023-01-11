import Image from "next/image";
import Link from "next/link";
import { companyLogo, headerLinks } from "../lib/constants";

function Header() {
  return (
    <header className="sticky top-0 z-10 bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2">
          <Link href="/">
            <Image alt="logo" src={companyLogo} width={40} height={40} />
          </Link>

          <nav className="hidden sm:block space-x-8">
            {headerLinks.map((link) => (
              <Link
                className="font-medium hover:text-red-500 hover:underline hover:underline-offset-2 transition"
                key={link.label}
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
