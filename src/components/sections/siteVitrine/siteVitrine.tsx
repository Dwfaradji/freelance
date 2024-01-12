"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper/types"; // Importez le type Swiper

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./siteVitrine.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import Template from "@/components/ui/template/template";
import MultiColorPicker from "@/components/ui/MultiColorPicker/MultiColorPicker";
import Page from "@/app/(pages)/form-ui/page";
import MultiFontsChoice from "@/components/ui/MultiFontsChoice/MultiFontsChoice";
import MultiCheckbox from "@/components/ui/MultiCheckbox/MultiCheckbox";
import FormDevis from "@/components/ui/FormDevis/form-devis";

interface Colors {
  Principal: string;
  Secondaire: string;
  Texte: string;
}

const SiteVitrine = () => {
  const swiperRef = useRef<SwiperClass>(null); // Utilisez le type Swiper pour la référence
  const [selectedOption, setSelectedOption] = useState("1"); // Option par défaut

  const [selectedColors, setSelectedColors] = useState<Colors>({
    Principal: "#abc2e8",
    Secondaire: "#f7b6b6",
    Texte: "#a6cca4",
  });

  const handleColorsSelect = (colors: Colors) => {
    setSelectedColors(colors);
    // Actions supplémentaires ici
  };

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
    // Faites d'autres traitements ici si nécessaire
  };
  return (
    <div>
      <Swiper
        onSwiper={(swiper: null) => (swiperRef.current = swiper)}
        pagination={{
          type: "progressbar",
        }}
        navigation={false}
        modules={[Pagination, Navigation]}
        allowTouchMove={false}
        className="mySwiper2 test"
      >
        <SwiperSlide className={"flex flex-col items-center justify-center"}>
          <div className={"m-7"}>
            <h2 className={"text-black m-0"}>Template</h2>
            <p className={"text-black m-3"}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
              aliquam dolor, est id iure, laudantium omnis quisquam, saepe sequi
              tempora vitae voluptas voluptates. Aliquid atque eveniet
              laboriosam laudantium maiores repellendus.
            </p>
          </div>
          <Template />
        </SwiperSlide>
        <SwiperSlide className={"flex items-center"}>
          <div className="m-7">
            <h2 className={"m-0"}>Couleur</h2>
            <p className={"text-black m-3"}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
              aliquam dolor, est id iure, laudantium omnis quisquam, saepe sequi
              tempora vitae voluptas voluptates. Aliquid atque eveniet
              laboriosam laudantium maiores repellendus.
            </p>
          </div>
          <MultiColorPicker onColorsSelect={handleColorsSelect} />
        </SwiperSlide>
        <SwiperSlide>
          <div className="m-7">
            <h2 className={"m-0"}>Fonts</h2>
            <p className={"text-black m-3"}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
              aliquam dolor, est id iure, laudantium omnis quisquam, saepe sequi
              tempora vitae voluptas voluptates. Aliquid atque eveniet
              laboriosam laudantium maiores repellendus.
            </p>
          </div>
          <MultiFontsChoice />
        </SwiperSlide>
        <SwiperSlide>
          <div className="m-7">
            <h2 className={"m-0"}>Nombre de page</h2>
            <p className={"text-black m-3"}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
              aliquam dolor, est id iure, laudantium omnis quisquam, saepe sequi
              tempora vitae voluptas voluptates. Aliquid atque eveniet
              laboriosam laudantium maiores repellendus.
            </p>
          </div>
          <MultiCheckbox
            options={["1", "2", "3", "4", "5"]}
            selectedOption={selectedOption}
            onOptionChange={handleOptionChange}
          />
        </SwiperSlide>
        <SwiperSlide>
          <div className="m-7">
            <h2 className={"m-0"}>Hébergement</h2>
            <p className={"text-black m-3"}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
              aliquam dolor, est id iure, laudantium omnis quisquam, saepe sequi
              tempora vitae voluptas voluptates. Aliquid atque eveniet
              laboriosam laudantium maiores repellendus.
            </p>
          </div>
          <MultiCheckbox
            options={["1 an", "2 ans", "3 ans", "4 ans", "5 ans"]}
            selectedOption={selectedOption}
            onOptionChange={handleOptionChange}
          />
        </SwiperSlide>
        <SwiperSlide>
          <div className="m-7">
            <h2 className={"m-0"}>Maintenance</h2>
            <p className={"text-black m-3"}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
              aliquam dolor, est id iure, laudantium omnis quisquam, saepe sequi
              tempora vitae voluptas voluptates. Aliquid atque eveniet
              laboriosam laudantium maiores repellendus.
            </p>
          </div>
          <MultiCheckbox
            options={["1 mois", "6 mois", "1 an", "2 ans", "5 ans"]}
            selectedOption={selectedOption}
            onOptionChange={handleOptionChange}
          />
        </SwiperSlide>
        <SwiperSlide>
          <div className="m-7">
            <h2 className={"m-0"}>Personnalisation</h2>
            <p className={"text-black m-3"}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
              aliquam dolor, est id iure, laudantium omnis quisquam, saepe sequi
              tempora vitae voluptas voluptates. Aliquid atque eveniet
              laboriosam laudantium maiores repellendus.
            </p>
          </div>
          <MultiCheckbox
            options={["oui", "non"]}
            selectedOption={selectedOption}
            onOptionChange={handleOptionChange}
          />
        </SwiperSlide>
        <SwiperSlide>
          <div className="m-7">
            <h2 className={"m-0"}>{"Formulaire d'informations"}</h2>
            <p className={"text-black m-3"}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
              aliquam dolor, est id iure, laudantium omnis quisquam, saepe sequi
              tempora vitae voluptas voluptates. Aliquid atque eveniet
              laboriosam laudantium maiores repellendus.
            </p>
          </div>
          <FormDevis />
        </SwiperSlide>
      </Swiper>
      <div className="swiper-navigation">
        <button onClick={() => swiperRef.current?.slidePrev()}>
          Précédent
        </button>
        <button onClick={() => swiperRef.current?.slideNext()}>Suivant</button>
      </div>
    </div>
  );
};
export default SiteVitrine;
