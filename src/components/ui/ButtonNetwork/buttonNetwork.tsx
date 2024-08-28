import React from 'react';
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
} from 'next-share';

interface PropsButtonNetwork {
  id: string;
}

const ButtonNetwork = ({ id }: PropsButtonNetwork) => {
  const shareUrl = `https://www.devevoke/blog/${id}`; // Remplacez cela par l'URL de votre article de blog

  return (
    <div className={'flex w-1/4 justify-between'}>
      <FacebookShareButton
        url={shareUrl}
        quote={'Découvrez le blog devevoke'}
        hashtag={'#devevoke'}
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>

      <TwitterShareButton
        url={shareUrl}
        title={'Découvrez le blog de devevoke'}
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>

      <LinkedinShareButton url={shareUrl}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
    </div>
  );
};

export default ButtonNetwork;
