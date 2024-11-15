import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <Link className="logo" href="/">
        <Image src="/logo.png" width={60} height={10} alt="" />
      </Link>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/users">Ninja</Link>
    </nav>
  );
};

export default Navbar;
