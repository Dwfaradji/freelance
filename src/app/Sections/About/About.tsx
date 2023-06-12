import React from "react";
import "./About.scss";

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        <h2 className="about-title text-h2">À propos de moi</h2>
        <div className="about-content col-sm-12 col-md-12">
          <p className="text-xl">
            {`Je suis un développeur Full Stack freelance passionné par la
              création d'applications web innovantes. Avec plus de X années
              d"expérience, j'ai acquis une expertise approfondie dans le
              développement frontend et backend, ainsi que dans la conception de
              bases de données robustes.`}
          </p>
          <p className="text-xl">
            {`En tant que développeur Full Stack, je suis à l'aise avec les
              langages de programmation tels que HTML, CSS, JavaScript, ainsi que
              les frameworks populaires tels que React, Angular et Vue.js pour le
              développement côté client. Du côté serveur, j'ai travaillé avec des
              technologies telles que Node.js et PHP, ce qui me permet de créer
              des fonctionnalités puissantes et des API performantes.`}
          </p>
          <p className="text-xl">
            {`Lorsque je développe des applications web, je m'engage à fournir des
              solutions sur mesure à mes clients. Je m"efforce d"utiliser les
              dernières technologies et les meilleures pratiques de développement
              pour garantir des produits de haute qualité. Je suis constamment à
              l'affût des nouvelles tendances et des évolutions technologiques,
              afin de rester à la pointe de mon domaine.`}
          </p>
          <p className="text-xl">
            {`L'expérience utilisateur est une priorité pour moi. Je mets un
              accent particulier sur la conception d'interfaces intuitives,
              réactives et esthétiquement agréables. Je m'assure également que mes
              applications sont optimisées en termes de performances, de sécurité
              et de convivialité.`}
          </p>
          <p className="text-xl">
            {`En travaillant avec moi, vous bénéficierez d'une collaboration
              étroite et d'une communication transparente tout au long du
              processus de développement. Je suis à l'écoute de vos besoins et de
              vos exigences, et je m'engage à fournir des résultats qui dépassent
              vos attentes. Si vous recherchez un développeur Full Stack freelance
              capable de transformer vos idées en produits fonctionnels, je suis
              là pour vous. Contactez-moi dès maintenant pour discuter de votre
              projet et commencer à construire une application web innovante qui
              répondra à vos besoins spécifiques.`}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
