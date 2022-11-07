import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <div className="logo">
        <Image
          src="/logo.png"
          width={50}
          height={50}
          alt="logo"
        ></Image>
      </div>

      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/ninjas">
        <a>The Ninjas List</a>
      </Link>
    </nav>
  );
}
