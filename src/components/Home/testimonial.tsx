import React from "react"
import {Fade} from "react-awesome-reveal";
import logo from "@/images/logocv.svg"
import Image from "next/image";

const Testimonial = () => {

    return (
        <div className="max-w-7xl mx-auto px-6 mt-10 h-auto mb-10">
            <Fade>
                <div
                    className="w-full flex flex-row justify-between align-middle bg-lightblack  rounded-lg xxs:flex-col xs:flex-col sm:flex-row  ">
                    <div className="w-3/4 xxs:w-full xs:w-full sm:w-3/4 p-12">

                        <h2 className="font-poppins text-white font-semibold text-xl leading-10 xxs:text-xl xxs:font-medium sm:text-3xl">Expertise
                            digitale à votre service</h2>
                        <p
                            className="mt-3 text-justify font-poppins text-white font-semibold text-xs leading-10 xxs:text-xs xxs:font-normal sm:text-2xl">
                            {`DevEvoke est une entreprise de développement web et mobile. Nous
              sommes spécialisés dans la création de sites web et d'applications
              mobiles. Nous proposons également des services de référencement et
              de web marketing. Nous sommes situés à Perpignan, mais nous
              travaillons avec des clients du monde entier. Nous sommes une équipe
              de développeurs passionnés par notre travail. Nous sommes toujours à
              la recherche de nouveaux défis et de nouvelles technologies. Nous
              sommes à votre disposition pour vous aider à réaliser vos projets.`}

                        </p>
                        <div className="mt-10">
                            <h1 className="text-white text-3xl font-bold font-poppins">
                                Boucif Faradji </h1>
                            <h1 className="text-white text-sm font-semibold font-poppins opacity-50">
                                Développeur
                            </h1>
                        </div>
                    </div>
                    <div
                        className="w-1/4 overflow-hidden flex align-middle justify-center items-center xxs:hidden sm:flex">
                        <div className={"overflow-hidden pt-8 pb-8 pl-8"}>
                            <Image
                                width={100}
                                height={100}
                                src={logo.src}
                                alt={"logo_devevoke"}
                                className="rounded-xl w-auto h-auto overflow-hidden"
                                // src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                            />
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    )
}

export default Testimonial
