import React from 'react';
import AboutTeamCard from './aboutTeamCard';

const AboutGrid = () => {
  return (
    <article className="mx-auto mt-20 grid grid-cols-3 justify-items-center gap-16 p-8 xxs:grid-cols-1 sm:grid-cols-3">
      <AboutTeamCard
        imgSrc="https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
        position="React"
      ></AboutTeamCard>
      <AboutTeamCard
        imgSrc="https://images.unsplash.com/photo-1507038732509-8b1a9623223a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAwfHxwZW9wbGV8ZW58MHwxfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        position="NextJs"
      ></AboutTeamCard>
      <AboutTeamCard
        imgSrc="https://images.unsplash.com/photo-1515468381879-40d0ded81044?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA3fHxwZW9wbGV8ZW58MHwxfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        position="TailwindCss"
      ></AboutTeamCard>
      <AboutTeamCard
        imgSrc="https://images.unsplash.com/photo-1536096928601-99bac26a838b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE5fHxwZW9wbGV8ZW58MHwxfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        position="NodeJs"
      ></AboutTeamCard>
      <AboutTeamCard
        imgSrc="https://images.unsplash.com/photo-1484515991647-c5760fcecfc7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI1fHxwZW9wbGV8ZW58MHwxfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        position="PostGreySql"
      ></AboutTeamCard>
      <AboutTeamCard
        imgSrc="https://images.unsplash.com/photo-1539125530496-3ca408f9c2d9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI4fHxwZW9wbGV8ZW58MHwxfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        position="Symfony"
      ></AboutTeamCard>
    </article>
  );
};

export default AboutGrid;
