import Link from "next/link";
import { motion } from "framer-motion";

const HoverImg = ({ src, href }) => {
  return (
    <div className="w-md h-48 overflow-hidden">
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

export default HoverImg;
