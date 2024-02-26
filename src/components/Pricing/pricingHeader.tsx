import React from "react"
import {Fade} from "react-awesome-reveal";
import Link from "next/link";


const PricingHeader = () => {
    return (
        <div className="max-w-7xl mx-auto mt-10 font-poppins text-white flex flex-col items-center">
            <Fade>
                <h1 className="text-6xl font-bold m-5 xxs:text-xl sm:text-4xl lg:text-6xl">
                    Une tarification simple et transparente
                </h1>
                <h2 className="text-base opacity-50 text-center xxs:text-sm sm:text-lg">
                    Obtenez le plan Devevoke qui correspond à vos besoins avec une introduction spéciale de
                    prix.
                </h2>
            </Fade>
            <Fade cascade>
                <div className="grid grid-cols-2 gap-4 mt-10 xxs:grid-cols-1 sm:grid-cols-2">
                    <div className="bg-lightblack p-10 rounded-xl flex flex-col justify-between">
                        <h2 className="text-2xl text-gradient bg-gradient-to-r from-pink to-purple ">
                            Maintenance
                        </h2>
                        <h1 className="text-4xl mt-2 font-bold">49€/Mois</h1>
                        <h3 className="text-sm mt-2 opacity-50">
                            {`Chez DevEvoke, nous comprenons l'importance de maintenir votre site web en
                                parfait état.
                                Nos forfaits sont là pour vous simplifier la vie.`}
                        </h3>
                        <ul className="mt-5">
                            <li className="text-sm opacity-70 py-2">
                                {" "}
                                Mises à jour régulières du système et des plugins

                            </li>
                            <li className="text-sm opacity-70 py-2">
                                {" "}
                                Sauvegardes automatiques régulières
                            </li>
                            <li className="text-sm opacity-70 py-2">
                                {" "}
                                Assistance prioritaire par e-mail
                            </li>
                            <li className="text-sm opacity-70 py-2">
                                {" "}
                                Analyse de la sécurité et protection contre les menaces potentielles
                            </li>
                        </ul>
                        {/*<button className="mt-5 px-5 bg-gradient-to-r from-pink to-purple p-2">*/}
                        <Link className="mt-5 px-5 text-center bg-gradient-to-r from-pink to-purple p-2"
                              href={"/contact"}>
                            Commencez
                        </Link>
                        {/*</button>*/}
                    </div>
                    <div className="bg-lightblack p-10 rounded-xl flex flex-col justify-between">
                        <h2 className="text-2xl text-gradient bg-gradient-to-r from-pink to-purple ">
                            Hébergement
                        </h2>
                        <h1 className="text-4xl mt-2 font-bold">25€/An</h1>
                        <h3 className="text-sm mt-2 opacity-50">
                            {`Confiez l"hébergement de votre site web à DevEvoke et profitez d"une solution fiable,
                                sécurisée et performante pour votre présence en ligne.`}
                        </h3>
                        <ul className="mt-5">
                            <li className="text-sm opacity-70 py-2">
                                {" "}
                                Stabilité et Fiabilité
                            </li>
                            <li className="text-sm opacity-70 py-2">
                                {" "}
                                Sécurité Avancée
                            </li>
                            <li className="text-sm opacity-70 py-2">
                                {" "}
                                Performances Optimales
                            </li>
                            <li className="text-sm opacity-70 py-2">
                                {" "}
                                Support Expert
                            </li>
                        </ul>

                        <Link className="mt-5 px-5 text-center bg-gradient-to-r from-pink to-purple p-2"
                              href={"/contact"}>
                            Commencez
                        </Link>
                    </div>
                </div>
            </Fade>
        </div>
    )
}

export default PricingHeader
