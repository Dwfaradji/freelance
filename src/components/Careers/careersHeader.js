import React from "react"
import {Fade} from "react-awesome-reveal";
import Image from "next/image";
import projectKw from "@/images/projects/kw.png"
import projectFs from "@/images/projects/fenixSolutions.png"


const CareersHeader = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Fade bottom cascade>
        <div className="flex flex-wrap md:flex-nowrap mt-10">
          <div className="w-full md:w-2/4 m-2 text-white bg-lightblack p-8 rounded-xl">
            <h2 className="text-sm opacity-50 font-semibold">Projets</h2>
            <h1 className="text-5xl font-bold">
              Keller Williams <br></br> Création site web et application
            </h1>
            <p className="mt-5 opacity-70">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
              <br></br> <br></br>It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged.
            </p>
          </div>
          <div className=" md:w-2/4 rounded-xl overflow-hidden m-2 ">
            <Image className="h-full"  src={projectKw} alt={""} width={1000} height={300}/>
          </div>
        </div>
      </Fade>
      <Fade bottom cascade>
        <div className="flex flex-wrap md:flex-nowrap flex-row-reverse mt-10">
          <div className="w-full md:w-2/5 m-2 text-white bg-lightblack p-8 rounded-xl">
            <h2 className="text-sm opacity-50 font-semibold">Projets</h2>
            <h1 className="text-5xl font-bold">
              Fenix Solutions <br></br> Création Carousel Youtube.
            </h1>
            <p className="mt-5 opacity-70">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
              <br></br> <br></br>It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged.
            </p>
          </div>
          <div className="md:w-3/5 rounded-xl overflow-hidden m-2">
            <Image className="h-full"  src={projectFs} alt={""} width={1000} height={300}/>
          </div>
        </div>
      </Fade>
      <Fade bottom cascade>
        <div className="flex flex-wrap md:flex-nowrap mt-10">
          <div className="w-full md:w-2/4 m-2 text-white bg-lightblack p-8 rounded-xl">
            <h2 className="text-sm opacity-50 font-semibold">Projets</h2>
            <h1 className="text-5xl font-bold">
              Group Art Photos <br></br> Création d'application
            </h1>
            <p className="mt-5 opacity-70">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
              <br></br> <br></br>It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged.
            </p>
          </div>
          <div className=" md:w-2/4 rounded-xl overflow-hidden m-2 ">
            <Image className="h-full"  src={projectKw} alt={""} width={1000} height={300}/>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default CareersHeader
