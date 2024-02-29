import React from "react"
import {Fade} from "react-awesome-reveal";


const PricingFAQ = () => {
    return (
        <div className="mx-auto mt-10 text-center text-white">
            <Fade >
                <h1 className="text-5xl font-poppins font-bold xxs:text-xl sm:text-3xl lg:text-5xl">
                    Questions fréquemment posées
                </h1>
            </Fade>
            <Fade  cascade>
                <div className="grid grid-cols-2 gap-8  text-left mt-10 xxs:grid-cols-1 sm:grid-cols-2">
                    <div className="xxs:p-2 sm:p-0">
                        <h1 className="font-bold text-2xl font-poppins xxs:text-lg sm:text-2xl">
                            Quelles technologies utilisez-vous pour développer des sites web et des applications ?
                        </h1>
                        <p className="mt-2 text-sm opacity-50">
                            Nous utilisons une combinaison de technologies de pointe telles que Next.js, React,
                            TailwindCss, Docker, Twig et GitLab pour créer des sites web et des applications performants
                            et modernes.
                        </p>
                    </div>
                    <div className="xxs:p-2 sm:p-0">
                        <h1 className="font-bold text-2xl font-poppins xxs:text-lg sm:text-2xl">
                            Comment puis-je estimer le coût de développement de mon projet ?
                        </h1>
                        <p className="mt-2 text-sm opacity-50">
                            Le coût de développement dépend de divers facteurs tels que la complexité du projet, les
                            fonctionnalités requises et les délais. Contactez-nous pour obtenir une évaluation
                            personnalisée de votre projet.
                        </p>
                    </div>
                    <div className="xxs:p-2 sm:p-0">
                        <h1 className="font-bold text-2xl font-poppins xxs:text-lg sm:text-2xl">
                            Quelle est la différence entre un site web statique et un site web dynamique ?
                        </h1>
                        <p className="mt-2 text-sm opacity-50">
                            {`Un site web statique affiche le même contenu pour tous les utilisateurs et ne change pas en
                                fonction des actions de l"utilisateur, tandis qu"un site web dynamique peut être modifié en
                                temps réel et offre une expérience utilisateur plus interactive.`}
                        </p>
                    </div>
                    <div className="xxs:p-2 sm:p-0">
                        <h1 className="font-bold text-2xl font-poppins xxs:text-lg sm:text-2xl">
                            {`Pouvez - vous m'aider à héberger mon site web ou mon application ?`}
                        </h1>
                        <p className="mt-2 text-sm opacity-50">
                            {`Oui, nous pouvons vous aider à choisir le bon service d'hébergement en fonction de vos
                                besoins et à configurer votre site web ou votre application pour un déploiement réussi.`}
                        </p>
                    </div>
                    <div className="xxs:p-2 sm:p-0">
                        <h1 className="font-bold text-2xl font-poppins xxs:text-lg sm:text-2xl">
                            Proposez-vous des services de maintenance pour les sites web et les applications que vous
                            développez ?
                        </h1>
                        <p className="mt-2 text-sm opacity-50">
                            Oui, nous proposons des services de maintenance pour garantir que votre site web ou votre
                            application reste sécurisé, fonctionne correctement et bénéficie des dernières mises à jour
                            technologiques.
                        </p>
                    </div>
                    <div className="xxs:p-2 sm:p-0">
                        <h1 className="font-bold text-2xl font-poppins xxs:text-lg sm:text-2xl">
                            {`Comment puis-je suivre l'avancement de mon projet de développement ?`}
                        </h1>
                        <p className="mt-2 text-sm opacity-50">
                            {`Nous vous tiendrons informé de l'avancement de votre projet à chaque étape du processus de
                                développement. De plus, vous aurez accès à notre système de suivi en ligne pour suivre les
                                progrès en temps réel.`}
                        </p>
                    </div>
                </div>
            </Fade>
        </div>
    )
}

export default PricingFAQ
