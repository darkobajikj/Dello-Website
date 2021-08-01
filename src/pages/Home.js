import {React, Component } from 'react';
import ImageSlider from '../components/corousel/ImageSlider';
import { SliderData } from '../components/corousel/SliderData';
import Hero from '../components/Hero/Index';
import Products from '../components/Products';
import SectionCard from '../components/SectionCard/SectionCard';
import Feature from '../components/Feature';
import { homeObjOne } from '../components/SectionCard/Data';



class Home extends Component {
  render() {
    return (
      <div>
        <Hero/>
        <ImageSlider slides={SliderData} />
        <Products />
        <SectionCard {...homeObjOne} />
        <Feature/>
      </div>
    );
  }
}

export default Home;