import React from "react"
import {Fade} from "react-awesome-reveal";
import Image from "next/image";

interface AboutTeamCardProps {
    imgSrc: string,
    position:string
}

const AboutTeamCard = ({ imgSrc, position }:AboutTeamCardProps) => {
  return (
    <Fade cascade className={"w-full p-3"}>
      <div className=" w-full h-96 relative overflow-hidden rounded-xl flex flex-col justify-end items-center">
        {/*<Image width={300} height={400} className="object-cover h-full w-full" src={""} alt={""}/>*/}
        <h2 className="bg-white absolute p-2 rounded-xl w-3/4 mb-4 text-center">
          {position}
        </h2>
      </div>
    </Fade>
  )
}

export default AboutTeamCard
