import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface PropsTemplate {
  image: string;
  link: string;
  name: string;
  id: number;
}

const Template = ({ image, link, name, id }: PropsTemplate) => {
  return (
    <div
      key={id}
      className="relative overflow-hidden rounded-xl opacity-70 hover:opacity-100 "
    >
      <Link href={link}>
        <Image
          src={image}
          width={1000}
          height={800}
          className="h-full"
          alt="template_designer"
        />
        <div className="absolute inset-0 z-auto flex items-center p-2 text-3xl font-bold text-white opacity-0 backdrop-blur-sm duration-300 hover:opacity-100">
          {name}
        </div>
      </Link>
    </div>
  );
};

export default Template;
