import React from 'react';
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
} from 'next-share';
import { slugify } from "@/utils/slugify";
import { BlogProps } from "@/data/typeFile";

interface PropsButtonNetwork {
  url: BlogProps;

}

const ButtonNetwork = ({ url }: PropsButtonNetwork) =>{
  const shareUrl = `https://www.devevoke.com/blog/${slugify( url.title)}`; // Assurez-vous que l'URL de base soit correcte
  return (
    <div className="gap-x-5 flex" aria-label="Boutons de partage sur les réseaux sociaux">
      {/* Facebook Share Button */}
      <FacebookShareButton
        url={shareUrl}
        quote={`Découvrez cet article intéressant sur Devevoke :`} // Inclut le lien dans le post Facebook
        hashtag={'#devevoke'}
        aria-label="Partager sur Facebook"
      >
        <FacebookIcon size={32} round aria-label="Facebook Icon" />
      </FacebookShareButton>

      {/* Twitter Share Button */}
      <TwitterShareButton
        url={shareUrl}
        title={`Découvrez cet article sur Devevoke :`} // Inclut le lien dans le tweet
        aria-label="Partager sur Twitter"
      >
        <TwitterIcon size={32} round aria-label="Twitter Icon" />
      </TwitterShareButton>

      {/* LinkedIn Share Button */}
      <LinkedinShareButton
        url={shareUrl}
        title={`Un nouvel article est disponible sur Devevoke :`} // Inclut le lien dans le post LinkedIn
        aria-label="Partager sur LinkedIn"
      >
        <LinkedinIcon size={32} round aria-label="LinkedIn Icon" />
      </LinkedinShareButton>
    </div>
  );
};

export default ButtonNetwork;
