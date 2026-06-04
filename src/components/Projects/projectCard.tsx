import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/data/typeFile';

interface ProjectCardProps extends Project {
  index?: number;
}

const ProjectCard = ({
  title,
  subtitle,
  description,
  details,
  results,
  tech,
  link,
  image,
  index = 0,
}: ProjectCardProps) => {
  const isEven = index % 2 === 0;

  return (
    <article className={`group mx-auto mb-16 flex w-full max-w-6xl flex-col items-center gap-10 rounded-3xl glass border border-white/5 p-6 lg:p-10 transition-all duration-500 hover:border-white/10 hover:glass-strong shadow-xl ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
      
      {/* Image Section */}
      <div className="relative w-full overflow-hidden rounded-2xl lg:w-1/2">
        <Image
          src={image}
          alt={`Project ${title}`}
          width={1000}
          height={600}
          className="size-full transform object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)]/80 via-transparent to-transparent opacity-60" />
      </div>

      {/* Content Section */}
      <div className="flex w-full flex-col lg:w-1/2 lg:px-6">
        <div className="flex items-center gap-4 mb-4">
          <h2 className="text-xl font-bold text-white tracking-wide uppercase">{title}</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
        </div>
        
        <h3 className="mb-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl tracking-tight">
          {subtitle.split(' ').slice(0, -1).join(' ')}{' '}
          <span className="text-gradient drop-shadow-sm">{subtitle.split(' ').slice(-1)}</span>
        </h3>
        
        <p className="mb-8 text-lg leading-relaxed text-muted">{description}</p>
        
        <div className="space-y-4 mb-8">
          {details && (
            <div className="flex items-start gap-3 text-muted-light">
              <svg className="w-5 h-5 text-primary-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
              <span>{details}</span>
            </div>
          )}
          <div className="flex items-start gap-3 text-muted-light">
            <svg className="w-5 h-5 text-secondary-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
            <span>{results}</span>
          </div>
          <div className="flex items-start gap-3 text-muted-light">
            <svg className="w-5 h-5 text-violet-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
            <span className="font-medium text-white/90">Tech: <span className="text-muted-light font-normal">{typeof tech === 'string' ? tech : tech.join(', ')}</span></span>
          </div>
        </div>

        <Link href={link} target="_blank" className="btn-primary self-start">
          Visiter le projet →
        </Link>
      </div>
    </article>
  );
};

export default ProjectCard;
