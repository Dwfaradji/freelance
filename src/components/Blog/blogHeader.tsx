import React from "react";
import { Fade } from "react-awesome-reveal";
import Image from "next/image";
import blogData from "@/data/dataBlog";


const BlogHeader = () => {
  const dataHeader = blogData[3];
  return (
    <Fade>
      <div id={dataHeader.id} className="mx-auto mt-10 flex text-white xxs:flex-col sm:flex-row">
        <div className="h-full object-cover overflow-hidden rounded-xl m-5">
          <Image priority={true} src={dataHeader.img} width={2000} height={1500} alt={""} />
        </div>
        <div className="m-5">
          <h2 className="text-sm opacity-50">Develop Process</h2>
          <h1 className="text-5xl font-bold font-poppins xxs:text-lg sm:text-5xl">
            {dataHeader.title}
          </h1>
          <p className="text-lg mt-4 opacity-50 xxs:text-sm sm:text-lg">
            {dataHeader.descriptionShort}
          </p>
          <div className="flex items-center mt-5">
            <div className="h-10 w-10 object-cover overflow-hidden rounded-full">
              <Image
                width={30}
                height={30}
                className="h-10 w-10"
                src={""}
                alt={""}
              />
            </div>
            <div className="ml-2">
              <h2>Boucif Faradji</h2>
              <h4 className="text-xs opacity-50">{dataHeader.date}</h4>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default BlogHeader;
