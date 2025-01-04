"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>C++, Python, Linux and Electronics</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Class 5th, CMS lucknow, India</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (

    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-me.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold mb-4 font-Midorima text-purple-400 ">About Me</h2>
          <p className="text-3xl font-thin lg:text-[3rem] font-BadUnicorn tracking-wide leading-7 lg:leading-9 text-center">
            I am a 5th standard child with a passion to become a programmer
            and a author. I am inspired a lot by my brother and other sussessful
            people, I love to read manga and adventeurous books. I can get my
            hands on almost anything that fascinates me.
          </p>
          <div className="flex flex-row justify-start mt-8 font-Midorima text-2xl  ">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
          </div>
          <div className="mt-8 font-BadUnicorn text-4xl">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
