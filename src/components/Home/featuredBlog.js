import React from "react"
import tempDesign from "@/images/templates/design_interieur.png"
import tempEnergy from "@/images/templates/energyTemplate.png"
import tempOrganic from "@/images/templates/organic-farm.png"
import Image from "next/image";

const FeaturedBlog = () => {
    return (
        <div className="max-w-7xl mx-auto px-8 mt-10">
            <h1 className="text-white font-poppins font-bold text-6xl xxs:text-lg xs:text-xl sm:text-xl lg:text-6xl">
                Nouveaux <br></br> Templates du Mois
            </h1>
            <p className="text-white text-lg mt-5 opacity-50 w-3/4 xxs:w-full lg:w-3/4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.
            </p>
            <div className="grid grid-cols-3 mt-10 gap-4 xxs:grid-cols-1 lg:grid-cols-3">
                <div className="rounded-xl overflow-hidden opacity-70 relative hover:opacity-100">
                    <Image
                        src={tempDesign}
                        width={1950}
                        height={1300}
                        className="relative h-full"
                        alt="template_designer"
                    />
                    <div
                        className="flex backdrop-blur-sm items-center opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 text-3xl text-white font-bold p-2">
                        Design
                    </div>
                </div>
                <div className="rounded-xl overflow-hidden opacity-70 relative hover:opacity-100">
                    <Image
                        src={tempEnergy}
                        width={1950}
                        height={1300}
                        className="relative h-full"
                        alt="template_energy"
                    />
                    <div
                        className="flex backdrop-blur-sm items-center opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 text-3xl text-white font-bold p-2">
                        Energy renouvelable
                    </div>
                </div>
                <div className="rounded-xl overflow-hidden opacity-70 relative hover:opacity-100">
                    <Image
                        src={tempOrganic}
                        width={1950}
                        height={1300}
                        className="relative h-full"
                        alt="template_organic"
                    />
                    <div
                        className="flex backdrop-blur-sm items-center opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 text-3xl text-white font-bold p-2">
                        Agriculture
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedBlog
