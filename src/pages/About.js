import React from 'react';
import Accordion from '../components/acordion/Accordion';
import SectionCard from '../components/SectionCard/SectionCard';
import { homeObjTwo } from '../components/SectionCard/Data';

const About = () => {
  return (
      <>
      <SectionCard {...homeObjTwo} />
      <Accordion/>
    </>
  );
};

export default About;