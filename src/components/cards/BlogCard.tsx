import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface IBlogCardProps {
  title: string;
  imageUrl?: string;
  subtitle?: string;
  description?: string;
  badges?: string[];
  link?: string;
}

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const hoverVariants = {
  rest: {
    y: 0,
    scale: 1,
  },
  hover: {
    y: -6,
    scale: 1.01,
  },
};

const buttonVariants = {
  rest: {
    opacity: 0,
    x: -20,
  },
  hover: {
    opacity: 1,
    x: 0,
    backgroundColor: "#1E293B",
    color: "white",
    borderRadius: "50%",
  },
};

const MotionLink = motion(Link);

export default function BlogCard({
  title,
  imageUrl,
  subtitle,
  description,
  badges,
  link,
}: IBlogCardProps) {
  return (
    <MotionLink
      href={link ?? "#"}
      initial="hidden"
      whileInView="visible"
      variants={cardVariants}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
    >
      <motion.div
        variants={hoverVariants}
        initial="rest"
        whileHover="hover"
        whileTap={{ scale: 0.98 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
        className="w-full border border-slate-800 hover:border-slate-600 rounded-3xl p-5 text-white flex flex-col gap-5"
      >
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <div className="flex flex-col gap-1">
            <span className="font-semibold text-sm lg:text-base">{title}</span>
            <span className="font-medium text-slate-500 text-xs lg:text-sm">
              {subtitle}
            </span>
          </div>

          <motion.button
            variants={buttonVariants}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
            className="flex items-center justify-center rounded-full p-2 h-7 w-7"
          >
            <ChevronRight width={16} />
          </motion.button>
        </div>

        <p className="text-xs text-justify text-slate-500">{description}</p>

        <div className="flex flex-col lg:flex-row gap-2 items-start lg:items-center">
          <span className="font-medium text-xs lg:text-sm">Topic:</span>
          <div className="flex gap-2 pt-2 flex-wrap">
            {badges?.map((badge) => (
              <Badge name={badge} key={badge} />
            ))}
          </div>
        </div>
      </motion.div>
    </MotionLink>
  );
}

function Badge({ name }: { name: string }) {
  return (
    <div className="flex items-center justify-center p-1 bg-slate-500 text-white w-fit text-[10px] lg:text-xs rounded-lg whitespace-nowrap">
      {name}
    </div>
  );
}
