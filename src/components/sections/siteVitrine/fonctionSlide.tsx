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
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim neque numquam odit quam sunt voluptate. Accusamus, officiis, quaerat!  Autem delectus dolorem expedita inventore quis. Libero nesciunt quos tempore vero voluptates. ",
      ComponentType: Template,
      props: { onTemplateSelect: handleTemplateChange },
      button: "template",
    },
    {
      title: "Couleur",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim neque numquam odit quam sunt voluptate. Accusamus, officiis, quaerat! Autem delectus dolorem expedita inventore quis. Libero nesciunt quos tempore vero voluptates. ",
      ComponentType: MultiColorPicker,
      props: { onColorsSelect: handleColorsSelect },
      button: "Couleur",
    },

    {
      title: "Fonts",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim neque numquam odit quam sunt voluptate. Accusamus, officiis, quaerat! Autem delectus dolorem expedita inventore quis. Libero nesciunt quos tempore vero voluptates. ",
      ComponentType: MultiFontsChoice,
      props: { onFontsSelect: handleFontsChange },
      button: "Fonts",
    },
    {
      title: "Nombre de page",
      content: "test",
      ComponentType: MultiCheckbox,
      props: {
        options: ["1", "2", "3", "4", "5 ou plus"],
        selectedOption: selectedPagesOption,
        onOptionChange: (option: string) =>
          handleOptionChange("Nombre_de_page", option),
      },
      button: "Page",
    },
    {
      title: "Hébergement",
      content: "test",
      ComponentType: MultiCheckbox,
      props: {
        options: [
          "1 an",
          "2 ans",
          "3 ans",
          "4 ans",
          "5 ans",
          "Pas d'hébergement",
        ],
        selectedOption: selectedHebergementOption,
        onOptionChange: (option: string) =>
          handleOptionChange("Hébergement", option),
      },
      button: "Hébergement",
    },
    {
      title: "Maintenance",
      content: "test",
      ComponentType: MultiCheckbox,
      props: {
        options: [
          "1 mois",
          "6 mois",
          "1 an",
          "2 ans",
          "5 ans",
          "Pas de maintenance",
        ],
        selectedOption: selectedOptionMaintenance,
        onOptionChange: (option: string) =>
          handleOptionChange("Maintenance", option),
      },
      button: "Maintenance",
    },
    {
      title: "Personnalisation",
      content: "test",
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
