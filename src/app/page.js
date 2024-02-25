"use client"
import Header from "@/components/Home/header";
import Testimonial from "@/components/Home/testimonial";
import Pricing from "@/components/Home/pricing";
import FeaturedBlog from "@/components/Home/featuredBlog";
import FeatureSection from "@/components/Home/featureSection";
import {projects,services} from "@/data/data";
import Projects from "@/components/Home/projects";
import Offerings from "@/components/Home/offerings";

export default function Home() {
    return (
      <main>
        <div className="h-auto w-full">
            <Header></Header>
            <FeatureSection data={projects}></FeatureSection>
            <Projects data={projects}/>
            <Offerings services={services}/>
            <Testimonial></Testimonial>
            <Pricing></Pricing>
            <FeaturedBlog></FeaturedBlog>
        </div>
      </main>
  );
}
