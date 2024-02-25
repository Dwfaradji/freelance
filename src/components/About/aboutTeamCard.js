import React from "react"
import {Fade} from "react-awesome-reveal";

const AboutTeamCard = ({ imgSrc, position }) => {
  return (
    <Fade bottom cascade className={"w-full p-3"}>
      <div className=" w-full h-96 relative overflow-hidden rounded-xl flex flex-col justify-end items-center">
        <img width={300} height={400} className="object-cover h-full w-full" src={imgSrc}/>
        <h1 className="bg-white absolute p-2 rounded-xl w-3/4 mb-4 text-center">
          {position}
        </h1>
      </div>
    </Fade>
  )
}

export default AboutTeamCard
