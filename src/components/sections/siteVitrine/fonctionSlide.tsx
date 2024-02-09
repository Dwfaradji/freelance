"use client";
import React, { useEffect, useRef, useState } from "react";
import Template from "@/components/ui/template/template";
import MultiColorPicker from "@/components/ui/MultiColorPicker/MultiColorPicker";
import MultiFontsChoice from "@/components/ui/MultiFontsChoice/MultiFontsChoice";
import MultiCheckbox from "@/components/ui/MultiCheckbox/MultiCheckbox";
import Slider from "@/components/sections/siteVitrine/slider";
import { useMyContext } from "@/context/Mycontext";

interface Colors {
  Principal: string;
  Secondaire: string;
  Texte: string;
}

// interface Checkbox {
//   numberPages: string;
//   hebergement: string;
//   maintenance: string;
//   perso: string;
// }

interface Selections {
  [key: string]: string;
}

const FonctionSlide = () => {
  //STATE
  const [selectedColors, setSelectedColors] = useState<Colors>({
    Principal: "#abc2e8",
    Secondaire: "#f7b6b6",
    Texte: "#a6cca4",
  });

  const [selections, setSelections] = useState<Selections>({
    Nombre_de_page: "1",
    Hebergement: "1 an",
    Maintenance: "6 mois",
    Personnalisation: "Non",
  });

  const [selectedPagesOption, setSelectedPagesOption] = useState("1"); // Option par défaut
  const [selectedPersoOption, setSelectedPersoOption] = useState("Non"); // Option par défaut
  const [selectedHebergementOption, setSelectedHebergementOption] =
    useState("1 an"); // Option par défaut
  const [selectedOptionMaintenance, setSelectedOptionMaintenance] =
    useState("1 mois"); // Option par défaut

  const [selectedTemplateOption, setSelectedTemplateOption] = useState(""); // Option par défaut
  const [selectedFontsOption, setSelectedFontsOption] = useState("1"); // Option par défaut

  useEffect(() => {
    if (selections) {
      dispatch({
        type: "ADD_CHECKBOX",
        payload: selections,
      });
    }

    if (selectedColors) {
      dispatch({ type: "ADD_COLORS", payload: selectedColors });
    }

    if (selectedTemplateOption) {
      dispatch({ type: "ADD_TEMPLATE", payload: selectedTemplateOption });
    }

    if (selectedFontsOption) {
      dispatch({ type: "ADD_FONTS", payload: selectedFontsOption });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedColors, selections, selectedTemplateOption, selectedFontsOption]);

  const handleColorsSelect = (colors: Colors) => {
    setSelectedColors(colors);
  };

  const handleOptionChange = (page: string, option: string) => {
    setSelections((prevSelections) => ({
      ...prevSelections,
      [page]: option,
    }));

    switch (page) {
    case "Nombre_de_page":
      setSelectedPagesOption(option);
      break;
    case "Hébergement":
      setSelectedHebergementOption(option);
      break;
    case "Maintenance":
      setSelectedOptionMaintenance(option);
      break;
    case "Personnalisation":
      setSelectedPersoOption(option);
      break;
    }
  };

  const [{}, dispatch] = useMyContext();

  const handleTemplateChange = (option: string) => {
    setSelectedTemplateOption(option);
    // Faites d'autres traitements ici si nécessaire
  };

  const handleFontsChange = (option: string) => {
    setSelectedFontsOption(option);
    // Faites d'autres traitements ici si nécessaire
  };

  const formRef = useRef();

  const handleSubmitForm = () => {
    if (formRef.current) {
      // formRef.current.submit();
    }
  };
  const data = [
    {
      title: "Template",
      content:
        "Dans l'univers professionnel actuel, votre empreinte en ligne définit le succès. Conçus pour les visionnaires, nos templates allient design avant-gardiste, fonctionnalité impeccable et flexibilité totale, vous équipant pour vous distinguer. Explorez une collection où chaque modèle est une promesse d'excellence et d'adaptabilité, garantissant que votre présence en ligne soit non seulement remarquée, mais mémorable. Faites le choix de l'excellence professionnelle dès aujourd'hui.",
      ComponentType: Template,
      props: { onTemplateSelect: handleTemplateChange },
      button: "template",
    },
    {
      title: "Couleur",
      content:
        "Définissez le succès dans le monde professionnel avec nos templates sur-mesure : design avant-gardiste, fonctionnalité sans faille, et une adaptabilité exceptionnelle, incluant la personnalisation complète des couleurs pour refléter votre identité unique. Chaque choix est une promesse d'excellence, assurant que votre présence en ligne ne soit pas seulement vue, mais ressentie. Embrassez l'excellence professionnelle et la personnalisation totale dès maintenant.",
      ComponentType: MultiColorPicker,
      props: { onColorsSelect: handleColorsSelect },
      button: "Couleur",
    },

    {
      title: "Fonts",
      content:
        "Dans le paysage numérique actuel, marquez votre différence avec nos templates conçus pour les professionnels exigeants. Offrant un design moderne, une fonctionnalité sans faille et une adaptabilité remarquable, nos templates vous permettent de personnaliser entièrement la police de caractères pour qu'elle parle véritablement de votre marque. Chaque template est une invitation à l'excellence, assurant que votre présence en ligne soit distincte et mémorable. Embrassez une identité visuelle qui vous est propre dès aujourd'hui.",
      ComponentType: MultiFontsChoice,
      props: { onFontsSelect: handleFontsChange },
      button: "Fonts",
    },
    {
      title: "Nombre de page",
      content:
        "Elevez votre présence en ligne avec nos templates sur mesure, conçus pour les professionnels à la recherche d'excellence. Dotés d'un design moderne, d'une fonctionnalité irréprochable, et d'une adaptabilité inégalée, nos templates vous offrent la liberté de définir le nombre de pages, vous permettant ainsi de créer un site qui s'adapte parfaitement à votre contenu et reflète fidèlement votre identité de marque. Chaque template est une promesse d'impact et de distinction. Personnalisez votre site jusqu'au nombre de pages et démarquez-vous dès aujourd'hui.",
      ComponentType: MultiCheckbox,
      props: {
        options: ["1", "2", "3", "4 ou plus"],
        selectedOption: selectedPagesOption,
        onOptionChange: (option: string) =>
          handleOptionChange("Nombre_de_page", option),
      },
      button: "Page",
    },
    {
      title: "Hébergement",
      content:
        "Découvrez la synergie parfaite entre design exceptionnel et performance inégalée avec nos templates et notre service d'hébergement dédié aux professionnels. Conçus pour transcender les attentes, nos templates modernes, fonctionnels et entièrement personnalisables, associés à une solution d'hébergement fiable et sécurisée, garantissent que votre site ne se contente pas d'exister, mais excelle en ligne. Profitez de la liberté de modeler votre site à l'image de votre marque, tout en bénéficiant d'une infrastructure d'hébergement de premier plan. Faites le choix d'une présence en ligne sans compromis et propulsez votre projet vers de nouveaux sommets dès aujourd'hui.",
      ComponentType: MultiCheckbox,
      props: {
        options: ["1 an", "2 ans", "3 ans", "Pas d'hébergement"],
        selectedOption: selectedHebergementOption,
        onOptionChange: (option: string) =>
          handleOptionChange("Hébergement", option),
      },
      button: "Hébergement",
    },
    {
      title: "Maintenance",
      content:
        "Chez Devevoke, nous comprenons que votre temps en tant que professionnel est précieux. C'est pourquoi notre service de maintenance de sites web est conçu pour vous offrir la tranquillité d'esprit. Nous prenons en charge la maintenance proactive, la surveillance continue, et les mises à jour nécessaires pour que votre site reste optimal, sécurisé, et à jour, vous libérant ainsi de toute préoccupation technique. Laissez Devevoke s'occuper de votre présence en ligne pendant que vous vous concentrez sur ce que vous savez faire de mieux.",
      ComponentType: MultiCheckbox,
      props: {
        options: ["1 mois", "6 mois", "1 an", "Pas de maintenance"],
        selectedOption: selectedOptionMaintenance,
        onOptionChange: (option: string) =>
          handleOptionChange("Maintenance", option),
      },
      button: "Maintenance",
    },
    {
      title: "Personnalisation",
      content:
        "Chez Devevoke, nous transformons votre vision en réalité avec des sites web entièrement personnalisés. Comprendre vos besoins uniques est notre priorité, ce qui nous permet de concevoir et développer des solutions sur mesure qui captent l'essence de votre marque et répondent précisément à vos objectifs. Profitez d'une expérience de personnalisation sans précédent, où chaque aspect de votre site, de la conception à la fonctionnalité, est façonné pour vous distinguer. Choisissez Devevoke pour une présence en ligne qui transcende le standard et reflète véritablement votre identité professionnelle.",
      ComponentType: MultiCheckbox,
      props: {
        options: ["Oui", "Non"],
        selectedOption: selectedPersoOption,
        onOptionChange: (option: string) =>
          handleOptionChange("Personnalisation", option),
      },
      button: "Personnalisation",
    },
  ];

  return (
    <>
      <Slider
        slidesData={data}
        onSubmitForm={handleSubmitForm} // Passez la fonction ici
      />
    </>
  );
};

export default FonctionSlide;
