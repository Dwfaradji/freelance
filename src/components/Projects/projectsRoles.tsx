import React from 'react';
import { Fade } from 'react-awesome-reveal';

const ProjectsRoles = () => {
  return (
    <div className="mx-auto mt-20  max-w-7xl flex-col items-center font-poppins text-white">
      <h2 className="text-sm font-bold opacity-50">Join our team</h2>
      <h1 className="mt-3 text-6xl font-bold">View open roles</h1>
      <Fade cascade>
        <div className="mt-10 grid grid-cols-2 gap-6">
          <a
            href="#"
            className="m-5 cursor-pointer rounded-xl border bg-lightblack  hover:border-purple"
          >
            <h2 className="text-3xl font-bold">Product Design Manager</h2>
            <p className="mt-10 opacity-50">
              {`Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy text
                                ever since the 1500s, when an unknown printer took a galley of
                                type and scrambled it to make a type specimen book.`}
            </p>
          </a>
          <a
            href="#"
            className="m-5 cursor-pointer rounded-xl border bg-lightblack p-5 text-left hover:border-purple"
          >
            <h2 className="text-3xl font-bold">Senior Data Engineer</h2>
            <p className="mt-10 opacity-50">
              {`Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy text
                                ever since the 1500s, when an unknown printer took a galley of
                                type and scrambled it to make a type specimen book.`}
            </p>
          </a>
        </div>
      </Fade>
    </div>
  );
};

export default ProjectsRoles;
