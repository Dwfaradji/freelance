import React from "react"
import Input from "@/components/ui/Atoms/input"
import Button from "@/components/ui/Atoms/button"
import {Fade} from "react-awesome-reveal";
import Link from "next/link";
import blogData from "@/data/dataBlog";
import Image from "next/image";


const BlogsContainer = () => {
    return (
        <div className="max-w-7xl mx-auto mt-10 text-white">
            <Fade cascade>
                <div className="grid grid-cols-3 gap-4 xxs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {blogData.map((blog, i) => (
                        <Link className="flex justify-center" key={i} href={`/blog/${blog.id.toString()}`}>
                            <div id={blog.id} className={"m-3"}>
                                <div className="w-96 h-72 overflow-hidden rounded-xl xxs:w-full sm:w-96">
                                    <Image
                                        width={300}
                                        height={300}
                                        className="h-full w-full object-cover"
                                        src={blog.img}
                                        alt={"article1"}
                                    />
                                </div>
                                <h1 className="text-3xl mt-2 font-poppins font-bold">
                                    {blog.title}
                                </h1>
                                <div className={"overflow-hidden h-[6]"}>
                                    <p className="text-sm opacity-50 mt-2 line-clamp-4 hover:line-clamp-none ">{blog.descriptionShort}</p>
                                </div>
                            </div>
                        </Link>

                    ))}
                </div>
            </Fade>
            <div
                className="w-full h-72 mt-10 bg-gradient-to-r from-pink to-purple rounded-xl flex flex-col items-center justify-center">
                <h1 className="font-poppins font-bold text-3xl">Rester dans la boucle</h1>
                <h2 className="text-lg mt-2 opacity-50">
                    Abonnez-vous à notre newsletter pour recevoir les meilleures nouvelles avant tout le monde
                </h2>
                <div className="flex-row mt-10">
                    <Input placeholder="email."></Input>
                    <Button
                        colorClass="bg-white"
                        title="S'abonner"
                        textColor="text-black"
                        marginClass="ml-5"
                    ></Button>
                </div>
            </div>
        </div>
    )
}

export default BlogsContainer
