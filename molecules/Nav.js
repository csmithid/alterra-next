import Link from "next/link";
import { useRouter } from "next/router";
import { motion as m } from "framer-motion";
import { useBoolean } from "react-use";

const NavButton = ({ href, children }) => {
  const router = useRouter();
  const [hovered, setHovered] = useBoolean(false);

  return (
    <Link href={href} className="flex flex-col items-center">
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="flex flex-col items-center"
      >
        <m.a
          animate={{ opacity: router.pathname === href ? 1 : 0.5 }}
          initial={{ opacity: 0.5 }}
          href=""
        >
          {children}
        </m.a>
        <m.div
          animate={{ width: hovered ? "100%" : "0%" }}
          initial={{ width: "0%" }}
          transition={{ type: "tween" }}
          style={{ height: "1px" }}
          className="bg-gray-600"
        ></m.div>
      </div>
    </Link>
  );
};

const Nav = () => (
  <nav className="grid grid-flow-col gap-4 font-display font-light text-gray-800 text-md sm:text-lg">
    <NavButton href="/">HOME</NavButton>
    <h2 className="text-gray-500">•</h2>
    <NavButton href="/projects">PROJECTS</NavButton>
    <h2 className="text-gray-500">•</h2>
    <NavButton href="/about">ABOUT</NavButton>
  </nav>
);

export default Nav;
