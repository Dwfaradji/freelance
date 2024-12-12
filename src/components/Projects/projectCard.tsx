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
    <div className="m-6 mx-auto flex w-full max-w-4xl flex-col items-center gap-8 rounded-xl bg-white p-6 shadow-md transition-all hover:scale-105 lg:flex-row">
      {/* Content Section */}
      <div className="flex w-full flex-col lg:w-1/2">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <h4 className="mt-2 text-2xl font-bold text-gray-900">{subtitle}</h4>
        <p className="mt-4 text-gray-600">{description}</p>
        {details && (
          <p className="mt-2 text-sm text-gray-500">{`🛠️ ${details}`}</p>
        )}
        <p className="mt-4 text-gray-700">{`📈 ${results}`}</p>
        <p className="mt-4 text-sm font-medium text-gray-600">{`🔧 Technologies : ${tech}`}</p>
      </div>

      {/* Image Section */}
      <div className="group relative w-full overflow-hidden rounded-lg shadow-xl lg:w-1/2">
        {/* Image */}
        <Image
          src={image}
          alt={`Project ${title}`}
          width={1000}
          height={600}
          className="h-full w-full transform rounded-lg object-cover transition-all duration-300 group-hover:scale-105 group-hover:blur-sm"
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
    </div>
  );
};

export default ProjectCard;
