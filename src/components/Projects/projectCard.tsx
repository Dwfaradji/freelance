import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Atoms/button';
import { Project } from '@/data/typeFile';

const ProjectCard = ({
  title,
  subtitle,
  description,
  details,
  results,
  tech,
  link,
  image,
}: Project) => {
  return (
    <article className="m-5 m-6 mx-auto flex w-full max-w-4xl cursor-pointer flex-col items-center gap-8 rounded-xl rounded-xl border bg-lightblack p-5 text-left hover:border-purple lg:flex-row">
      {/* Content Section */}
      <div className="flex w-full flex-col text-white lg:w-1/2">
        <h2 className="text-xl font-semibold ">{title}</h2>
        <h3 className="mt-2 bg-gradient-to-r from-pink to-purple text-2xl font-bold text-gradient">
          {subtitle}
        </h3>
        <p className="mt-4 text-gray-200">{description}</p>
        {details && (
          <p className="mt-2 text-sm text-gray-400">{`🛠️ ${details}`}</p>
        )}
        <p className="mt-4 text-gray-200">{`📈 ${results}`}</p>
        <p className="mt-4 text-sm font-medium text-gray-400">{`🔧 Technologies : ${tech}`}</p>
      </div>

      {/* Image Section */}
      <div className="group relative w-full overflow-hidden rounded-lg shadow-xl lg:w-1/2">
        {/* Image */}
        <Image
          src={image}
          alt={`Project ${title}`}
          width={1000}
          height={600}
          className="size-full transform rounded-lg object-cover transition-all duration-300 group-hover:scale-105 group-hover:blur-sm"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Button Section */}
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-60">
          <Link href={link} target="_blank">
            <Button
              colorClass="bg-gradient-to-r from-white to-white rounded-md px-6 py-3 opacity-100 shadow-lg transition-opacity duration-300 group-hover:opacity-100"
              title="Voir le site"
              textColor="text-white"
            />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
