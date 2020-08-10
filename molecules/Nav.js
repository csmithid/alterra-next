import Link from "next/link";

const Nav = () => (
  <nav className="flex flex-row gap-4 font-display font-light">
    <Link href="/">
      <a>HOME</a>
    </Link>
    <h2>•</h2>
    <h2>PROJECTS</h2>
    <h2>•</h2>
    <Link href="/about">
      <a>ABOUT</a>
    </Link>
  </nav>
);

export default Nav;
