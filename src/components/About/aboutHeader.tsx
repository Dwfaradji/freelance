import React from "react"
import {Fade} from "react-awesome-reveal";
import Image from "next/image";
import headerAbout from "@/images/about/aboutHeader.jpg"


const AboutHeader = () => {
  return (
    <Fade cascade>
      <div className="max-w-7xl mx-auto mt-10">
        <div className="overflow-hidden rounded-xl">
          <Image width={1600} height={1000} src={headerAbout} alt={""}/>
        </div>
        <div className="mt-5">
          <span className="text-white text-sm opacity-50">A propos</span>
          <h1 className="text-white text-7xl font-poppins font-semibold leading-snug xxs:text-lg xs:text-lg sm:text-3xl lg:text-7xl">
            Qui nous sommes ?
          </h1>
        </div>
      </div>
    </Fade>
  )
}

export default AboutHeader
