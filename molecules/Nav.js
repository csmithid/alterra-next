import Link from "next/link";
import { useSpring, animated } from "react-spring";
import { useRouter, Router } from "next/router";

const NavButton = ({ href, children }) => {
  const router = useRouter();
  const props = useSpring({ opacity: router.pathname === href ? 1 : 0.5 });

  return (
    <Link href={href}>
      <animated.a href="" style={props}>
        {children}
      </animated.a>
    </Link>
  );
};

const Nav = () => (
  <nav className="flex flex-row gap-4 font-display font-light text-gray-800 text-md sm:text-lg">
    <NavButton href="/">HOME</NavButton>
    <h2>•</h2>
    <NavButton href="/projects">PROJECTS</NavButton>
    <h2>•</h2>
    <NavButton href="/about">ABOUT</NavButton>
  </nav>
);

export default Nav;
