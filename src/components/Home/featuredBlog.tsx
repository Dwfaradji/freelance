import React from "react"
import tempDesign from "@/images/templates/design_interieur.png"
import tempEnergy from "@/images/templates/energyTemplate.png"
import tempOrganic from "@/images/templates/organic-farm.png"
import Image from "next/image";

const FeaturedBlog = () => {
    return (
        <div className="max-w-7xl mx-auto px-8 mt-10">
            <h1 className="text-white font-poppins font-bold text-6xl xxs:text-lg xs:text-xl sm:text-xl lg:text-6xl">
                Découvrez <br/> Chaque Mois <br/> Nos Nouveaux Templates <br/>

            </h1>
            <p className="text-white text-lg mt-5 opacity-50 w-3/4 xxs:w-full lg:w-3/4">
                {`Explorez notre collection de modèles de site web dès aujourd'hui et trouvez celui qui correspond le
                    mieux à votre entreprise. Restez à l'affût des dernières nouveautés en vous abonnant à notre newsletter
                    ou en nous suivant sur les réseaux sociaux. Chez DevEvoke, nous vous offrons les outils
                    dont vous avez besoin pour réussir en ligne.`}
            </p>
            <div className="grid grid-cols-3 mt-10 gap-4 xxs:grid-cols-1 lg:grid-cols-3">
                <div className="rounded-xl overflow-hidden opacity-70  hover:opacity-100">
                    <Image
                        src={tempDesign}
                        width={1950}
                        height={1300}
                        className="h-full"
                        alt="template_designer"
                    />
                    <div
                        className="flex backdrop-blur-sm items-center opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-auto text-3xl text-white font-bold p-2">
                        Design
                    </div>
                </div>
                <div className="rounded-xl overflow-hidden opacity-70  hover:opacity-100">
                    <Image
                        src={tempEnergy}
                        width={1950}
                        height={1300}
                        className=" h-full"
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
                        className="h-full"
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
