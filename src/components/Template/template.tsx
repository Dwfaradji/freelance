import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface PropsTemplate {
  image: string;
  link: string;
  name: string;
  id: number;
}

const Template = ({ image, link, name }: PropsTemplate) => {
  return (
    <Link href={link} prefetch={false} className="group block">
      <div className="relative overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-400 hover:border-primary/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5">
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={image}
            width={1000}
            height={750}
            className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
            alt={`Template ${name}`}
            priority
          />
          {/* Overlay avec nom */}
          <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[var(--color-bg)]/90 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 p-4">
            <div className="flex w-full items-center justify-between">
              <span className="font-semibold text-white">{name}</span>
              <span className="rounded-full bg-primary/20 border border-primary/30 px-3 py-1 text-xs font-medium text-primary-400">
                Voir →
              </span>
            </div>
          </div>
        </div>

        {/* Nom en bas */}
        <div className="flex items-center justify-between p-4">
          <span className="text-sm font-medium text-muted-light group-hover:text-white transition-colors">
            {name}
          </span>
          <svg
            className="size-4 text-muted transition-transform duration-200 group-hover:translate-x-1 group-hover:text-primary-400"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default Template;
