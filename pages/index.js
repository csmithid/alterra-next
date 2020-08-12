import Link from "next/link";
import { motion } from "framer-motion";

const HoverImg = ({ src, href }) => {
  return (
    <div className="w-md h-md overflow-hidden">
      <Link href={href ? href : "/projects"}>
        <a>
          <motion.img
            src={src}
            whileHover={{ opacity: 0.8, scale: 1.15 }}
            transition={{ type: "tween" }}
            className="h-full w-full object-cover"
          ></motion.img>
        </a>
      </Link>
    </div>
  );
};

export default () => (
  <div className="max-w-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
    <HoverImg src="img/12.jpg"></HoverImg>
    <HoverImg src="img/17.jpg"></HoverImg>
    <HoverImg src="img/CM3.jpg"></HoverImg>
    <HoverImg src="img/8.jpg"></HoverImg>
    <HoverImg src="img/CM5.jpg"></HoverImg>
    <HoverImg src="img/CR1.jpg"></HoverImg>
    <HoverImg src="img/FA5.jpg"></HoverImg>
    <HoverImg src="img/RB8.jpg"></HoverImg>
    <HoverImg src="img/CM9.jpg"></HoverImg>
  </div>
);
