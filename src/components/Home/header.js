import React from "react"
import Input from "@/components/ui/Atoms/input"
import Button from "@/components/ui/Atoms/button"


// Assets
import HeaderImage from "@/images/home/header-main.jpg"
import {Fade} from "react-awesome-reveal";
import Image from "next/image";

const Header = () => {
  return (
    <div className="max-w-7xl mx-auto px-8">
      <Fade>
        <div>
          <h2 className="text-white font-poppins opacity-50 font-semibold text-xs xxs:text-xs xs:text-xs sm:text-xs md:text-sm lg:text-xl">
              Nous fournissons une solution créative haut de gamme
          </h2>

          <h1 className="text-white font-poppins font-semibold text-2xl xxs:text-2xl xs:text-2xl sm:text-lg md:text-2xl lg:text-4xl xl:text-7xl 2xl:text-8xl">
            Développeur Freelance <br></br> Expert{" "}
            <span className="text-gradient bg-gradient-to-r from-pink to-purple">
              React NextJs
            </span>
          </h1>
        </div>
      </Fade>
      <Fade bottom>
        <div className="mt-10 xxs:flex xxs:flex-row sm:block">
          <Input placeholder="email."></Input>
          <Button
            colorClass="bg-gradient-to-r from-pink to-purple "
            title="Envoyer"
            textColor="text-white"
            marginClass="ml-5"
          ></Button>
        </div>
      </Fade>
      <div className="max-w-7xl mx-auto mt-10">
        <div className="w-full h-auto overflow-hidden rounded-xl">
          <Image width={1024} height={100} className="w-full h-full" src={HeaderImage} alt="Photo_ordinateur_sur_bureau" />
        </div>
      </div>
    </div>
  )
}

export default Header
