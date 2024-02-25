import React from 'react';
import {Fade} from "react-awesome-reveal";

const Offerings = ({services}) => {
    return (
        <div>
            <Fade bottom cascade>
                <div className="max-w-7xl mx-auto px-8 mt-10">
                    <h2 className="text-white text-7xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-7xl">
                        Services proposés
                    </h2>
                    <p className="text-white text-sm mt-5 opacity-50">
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text
                        ever
                        <br></br>
                        since the 1500s, when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                    </p>
                </div>
            </Fade>
            <Fade bottom cascade>
                <div className="max-w-7xl mx-auto px-8  mt-10 flex flex-row justify-space xxs:flex-col xs:flex-col sm:flex-row flex-wrap justify-center">
                    {services.map((service, i) => (
                        <div key={i}
                             className="w-[30%] hover:bg-gradient-to-r hover:from-pink hover:to-purple p-5 rounded-xl xxs:w-full xs:w-full sm:w-[30%]">
                            <article
                                className="flex justify-between flex-col h-full">
                                <h3 className="text-white text-2xl">{service.title}</h3>
                                <div className="items-start flex">
                                    <p className="mt-10 text-white text-sm opacity-50">{service.description}</p>
                                </div>

                                {/*<p className="mt-10 text-white opacity-50 text-sm">{service.description}</p>*/}
                                <ul className={"text-white mt-3"}>
                                    {service.items.map((item, i) => (
                                        <li key={i}>
                                            {/*<i className="fa-solid fa-caret-up fa-rotate-90"></i>*/}
                                            {item.title}
                                        </li>
                                    ))}
                                </ul>
                            </article>
                        </div>
                    ))}
                </div>
            </Fade>
        </div>
    );
};

export default Offerings;
