import React from "react";
import AnimationIcon from "../../Components/AnimationIcon/AnimationIcon";
import AnimationPicture from "../../Components/AnimationPicture/AnimationPicture";
import "./Banner.scss";
import images from "@/app/Assets/Gallery";

interface BannerProps {
  typeBanner: string;
}

const Banner = ({ typeBanner }: BannerProps) => {
  const bannerIcon = [
    { title: "CleanCode", icon: "fa-solid fa-code" },
    { title: "Populaire", icon: "fa-brands fa-react" },
    { title: "Sécurité", icon: "fa-solid fa-database" },
    { title: "CleanCode", icon: "fa-brands fa-node-js" },
  ];

  const bannerPicture = [
    {
      title: "Prise de contact",
      picture: images.bannerPicture3,
      alt: "Image de prise contact",
    },
    {
      title: "Planification et conception",
      picture: images.bannerPicture2,
      alt: "Image de planification et conception",
    },
    {
      title: "Développement",
      picture: images.bannerPicture1,
      alt: "Image de développement",
    },
    {
      title: "Livrable final",
      picture: images.bannerPicture5,
      alt: "Image de livrable final",
    },
  ];
  return (
    <section className="container-banner">
      {typeBanner === "icon" && <AnimationIcon itemsIcon={bannerIcon} />}
      {typeBanner === "picture" && (
        <AnimationPicture itemsPicture={bannerPicture} />
      )}
    </section>
  );
};

export default Banner;
