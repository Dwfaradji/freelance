import design from "@/images/templates/design_interieur.png"
import energy from "@/images/templates/energyTemplate.png"
import hairdresser from "@/images/templates/hairdresser.png"
import medical from "@/images/templates/medicalTemplate.png"
import organic from "@/images/templates/organic-farm.png"
import yoga from "@/images/templates/yogaTemplate.png"

interface Article {
    id: number;
    title: string;
    image: any;
    description: string;
    link: string;
}

// const url = "https://www.devevoke.com";
const url = "http://localhost:3000";
const articles: Article[] = [
    {
        id: 1,
        title: "Clinique Bien-Être ⚕️",
        image: medical,
        description:
            "Créez un site web professionnel et rassurant pour votre clinique médicale avec ce template intuitif et personnalisable.",
        link: `${url}/template/mediplus/index.html/`,
    },
    {
        id: 2,
        title: "Éveil Intérieur ‍♀️",
        image: yoga,
        description:
            "Trouvez votre équilibre intérieur et explorez votre potentiel avec ce template conçu pour les yogis de tous niveaux.",
        link: `${url}/template/yoga/index.html/`,
    },
    {
        id: 3,
        title: "Éco-Futur",
        image: energy,
        description:
            "Engagez-vous dans la transition écologique et donnez vie à votre projet d'énergie renouvelable avec ce template dynamique et informatif.",
        link: `${url}/template/renewableEnergy/index.html/`,
    },
    {
        id: 4,
        title: "Studio Créatif",
        image: design,
        description:
            "Exprimez votre vision unique et présentez votre entreprise avec style grâce à ce template flexible et adaptable à tous les domaines du design.",
        link: `${url}/template/design-interieur/index.html`,
    },
    {
        id: 5,
        title: "Terre nourricière",
        image: organic,
        description:
            "Valorisez votre exploitation agricole et partagez votre passion avec ce template authentique et convivial.",
        link: `${url}/template/organic-farm/index.html`,
    },
    {
        id: 6,
        title: "Salon Tendance ‍♀",
        image: hairdresser,
        description:
            "Mettez en valeur votre talent et attirez de nouveaux clients avec ce template élégant et moderne dédié aux professionnels de la coiffure.",
        link: `${url}/template/hairdresser/index.html`,
    },
];

export default articles
