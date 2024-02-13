import Link from "next/link";
import Auth from "./components/Auth";
import Brands from "./components/Brands";

function Header() {
  return (
    <header className="px-5 h-14 flex items-center shadow sticky top-0 z-20">
      <Link href="/" className="font-bold text-xl">
        발랑
      </Link>
      <Brands />
      <Auth />
    </header>
  );
}

export default Header;
