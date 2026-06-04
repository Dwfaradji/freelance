import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface PropsTemplate {
  image: string;
  link: string;
  name: string; // Used as category
  id: number;
  title?: string;
  description?: string;
}

const Template = ({ image, link, name, title, description }: PropsTemplate) => {
  return (
    <Link href={link} prefetch={false} className="group block h-full">
      <div className="relative flex flex-col h-full overflow-hidden rounded-2xl border border-white/5 bg-white/5 transition-all duration-400 hover:border-primary-500/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-500/10">
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={image}
            width={1000}
            height={750}
            className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
            alt={`Template ${title || name}`}
            priority
          />
          {/* Badge Catégorie */}
          <div className="absolute top-4 left-4">
            <span className="rounded-full bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1 text-xs font-semibold text-white tracking-wide shadow-sm">
              {name}
            </span>
          </div>
          {/* Overlay Hover */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <span className="rounded-full bg-primary-500 text-white px-5 py-2 text-sm font-semibold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
              Voir la démo
            </span>
          </div>
        </div>

        {/* Contenu en bas */}
        <div className="flex flex-col flex-grow p-5">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
            {title || name}
          </h3>
          {description && (
            <p className="text-sm text-gray-400 line-clamp-2 leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default Template;
