import { MotionSection } from "@/components";
import { ProjectCard } from "@/components/cards";
import { projectCollections } from "@/constants";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

const MotionLink = motion(Link);

const hoverVariants = {
  rest: {
    x: 0,
    scale: 1,
  },
  hover: {
    x: 6,
    scale: 1.01,
  },
};

export default function ProjectSection() {
  return (
    <MotionSection className="flex flex-col gap-2">
      <h1 className="text-lg lg:text-xl font-semibold">Selected Projects</h1>
      <div className="flex flex-col gap-3">
        {projectCollections
          .filter((project) => project.showOnHome)
          .map((project, index) => (
            <ProjectCard {...project} key={index} />
          ))}
        <MotionLink
          variants={hoverVariants}
          initial="rest"
          whileHover="hover"
          whileTap={{ scale: 0.98 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
          href={"/project"}
          className="flex gap-2 items-center text-slate-600 hover:text-white"
        >
          <span className="text-inherit">View More</span>
          <ArrowRightIcon width={14} className="text-inherit" />
        </MotionLink>
      </div>
    </MotionSection>
  );
}
