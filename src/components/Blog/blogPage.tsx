"use client"
import React, {useEffect, useState} from "react"
import {Fade} from "react-awesome-reveal";
import Button from "@/components/ui/Atoms/button";
import Link from "next/link";
import Image from "next/image";
import blogData from "@/data/dataBlog";
import { BlogProps } from "@/data/typeFile";


const BlogPage = () => {
    const [contentBlog, setContentBlog] = useState<BlogProps>();

    useEffect(() => {
        const id = window.location.pathname.split("/")[2];
        blogData.map((data) => {
            if (data.id === id) {
                setContentBlog(data);
                return data;
            }
        });
    }, []);


    // nouveau tableau qui contient les 2 derniers articles publiés en fonction de la date de publication
    // const lastBlog = blog
    //     .sort((a, b) => {
    //       return new Date(b.date).getTime() - new Date(a.date).getTime();
    //     })
    //     .slice(0, 2);
    //
    return (
        <>
            {contentBlog && (
                <Fade >
                    <div className="mx-auto mt-10 flex flex-col text-white relative">
                        <div className="overflow-hidden rounded-xl m-5">
                            <Image priority src={contentBlog.img} width={1650} height={300} alt={"article_blog"} className={"w-full"}/>
                        </div>

                        <div className="m-5">
                            <div className="flex items-center mt-5">
                                <div className="h-10 w-10 object-cover overflow-hidden rounded-full">
                                    {/*<Image className="h-10 w-10" priority={true} width={300} height={300} src={""}*/}
                                    {/*       alt={"article_blog"}/>*/}
                                </div>
                                <div className="ml-2">
                                    <h2>Boucif Faradji</h2>
                                    <h4 className="text-xs opacity-50">{contentBlog.date}</h4>
                                </div>
                            </div>
                            <Fade >

                                <h1 className="text-5xl font-bold font-poppins xxs:text-lg sm:text-5xl">
                                    {contentBlog.title}
                                </h1>
                                <p className="text-lg mt-4 mb-4 opacity-50 xxs:text-sm sm:text-lg">
                                    {contentBlog.descriptionShort}
                                </p>
                            </Fade>
                            <div className="mt-8">
                                {contentBlog.descriptionLong &&
                                    contentBlog.descriptionLong.map((val, i) => (
                                        <div key={i} className="mt-8 mb-8">
                                            <Fade>
                                                <h2 className={"mb-3 text-xl"}>{val.title}</h2>
                                                <p>{val.text}</p>
                                            </Fade>
                                        </div>
                                    ))}
                            </div>
                            <div className={"absolute xl:bottom-[50%] xl:left-0 2xl:left-0 xl:fixed"}>
                                <Link href={"/blog"}>
                                    <Button
                                        colorClass="bg-gradient-to-r from-pink to-purple "
                                        textColor="text-white"
                                        marginClass="ml-2"
                                        title="Retour"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </Fade>
            )}
        </>

    )
}

export default BlogPage
