"use client";
import React from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Working Windmill",
    description: "working windmill demonstrating SDG 7",
    image: "/images/projects/1.jpeg",
  },
  {
    id: 2,
    title: "Esp Now RC car ",
    description: "Transmitter and RC car based on Esp.",
    image: "/images/projects/rc_car.webp",
  },
];

const ProjectsSection = () => {
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-5xl font-bold mt-4 mb-8 md:mb-12 font-Midorima tracking-widest text-emerald-300">
        My Projects
      </h2>
      <ul className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.2 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
