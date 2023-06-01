'use client'
import React, { useEffect, useState } from "react";
import { fetchMemoriesForLifeTime } from "@app/api/page";


import './_memories.scss';
import Section from "@/app/components/Section";
import LinkButton from "@/app/components/LinkButton";
import MemoryList from "./components/MemoryList";


const Memories = () => {
  const [memories, setMemories] = useState([]);

  useEffect(() => {
    const fetcMemories = async () => {
      const response = await fetchMemoriesForLifeTime();
      const {
        data: { memories_for_lifetime },
      } = response.data;
      setMemories(memories_for_lifetime);
    };
    fetcMemories();
  }, []);

  return ( 
      
    <Section
      id="block-memories"
      className="section-block position-relative bg-light"
      title={`Memories for a lifetime`}
      description={`There's something for every traveller in Kerala. Find a bouquet of enchanting \n\n experiences for your next trip to Kerala.`}
      isFluid={true}
      renderedIn={`container-out`}
    >
      {memories.length > 0 && <MemoryList memories={memories} />}
      <LinkButton isAbsolute={true} link={`#`} linkText={`explore`} />
    </Section>
  );
};

export default Memories;
