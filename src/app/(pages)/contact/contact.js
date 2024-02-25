import React from "react"
import pictureContact from "@/images/contact.jpg"
import Button from "@/components/ui/Atoms/button"
import {Fade} from "react-awesome-reveal";
import Image from "next/image";
import {SubmitHandler, useForm} from "react-hook-form";
import axios from "axios";


const Contact = () => {
    const [sendMsg, setSendMsg] = React.useState(false);
    //Variables
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors},
    } = useForm();
    const onSubmit = async (data) => {
        try {
            const response = await axios.post("/api/contact/", data, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            // Traitez la réponse de l'API
            if (response.status === 200) {
                console.log("L'e-mail a été envoyé avec succès.");
                window.location.hash = "confirmation";
                setSendMsg(true);
                reset();
            } else {
                console.log("Erreur lors de l'envoi de l'e-mail");
            }
        } catch (error) {
            console.error("Erreur lors de l'envoi de l'e-mail", error);
        }
    };

    return (
        <Fade bottom cascade>
            <div className="max-w-7xl mx-auto mt-10 flex text-white xxs:flex-col sm:flex-row">
                <div className="bg-lightblack p-10 rounded-xl md:w-3/4 m-5">
                    <h2 className="text-xs opacity-50">Entrer en contact</h2>
                    <h1 className="text-4xl font-bold font-poppins mt-2 xxs:text-lg sm:text-2xl lg:text-4xl">
                        Travaillons ensemble
                    </h1>
                    <p className="text-lg mt-2 opacity-50 w-3/4 xxs:text-xs xxs:w-full sm:text-sm sm:w-3/4">
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text
                    </p>
                    <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex xxs:flex-col sm:flex-row">
                            <div className="sm:mr-5 xxs:mr-0">
                                <input
                                    className="w-full px-2 py-2 rounded-lg bg-white bg-opacity-20 border-transparent flex-1 appearance-none text-white font-poppins focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent sm:width-full md:width-full xxs:text-sm"
                                    placeholder="Votre Nom"
                                    type="text"
                                    id="firstname"
                                    {...register("firstname", {required: true})}
                                />
                                <br/>
                                {errors.firstname && ( // errors est un objet
                                    <span className="error text-white">Ce champ est requis</span>
                                )}
                            </div>


                            <div className="sm:ml-5 xxs:ml-0 xxs:mt-2 sm:mt-0">
                                <input
                                    className="w-full px-2 py-2 rounded-lg bg-white bg-opacity-20 border-transparent flex-1 appearance-none text-white font-poppins focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent sm:width-full md:width-full xxs:text-sm"
                                    placeholder="Votre Société"
                                    type="text"
                                    id="business"
                                    {...register("business", {required: true})}
                                />
                                <br/>
                                {errors.business && ( // errors est un objet
                                    <span className="error text-red">Ce champ est requis</span>
                                )}
                            </div>
                        </div>

                        <div className="flex mt-5 xxs:flex-col sm:flex-row">
                            <div className="sm:mr-5 xxs:mr-0">
                                <input
                                    className="w-full px-2 py-2 rounded-lg bg-white bg-opacity-20 border-transparent flex-1 appearance-none text-white font-poppins focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent sm:width-full md:width-full xxs:text-sm"
                                    placeholder="Votre Adresse Email"
                                    type="email"
                                    id="email"
                                    {...register("email", {required: true})}
                                />
                                <br/>
                                {errors.email && ( // errors est un objet
                                    <span className="error text-white">Ce champ est requis</span>
                                )}
                            </div>
                            <div className="sm:ml-5 xxs:ml-0 xxs:mt-2 sm:mt-0">
                                <input
                                    title={"Le numéro doit comporter 10 chiffres"}
                                    className="w-full px-2 py-2 rounded-lg bg-white bg-opacity-20 border-transparent flex-1 appearance-none text-white font-poppins focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent sm:width-full md:width-full xxs:text-sm"
                                    placeholder="Votre Téléphone"
                                    type="tel"
                                    id="phone"
                                    maxLength="10"
                                    {...register("phone", {required: true})}
                                />
                                <br/>
                                {errors.phone && ( // errors est un objet
                                    <span className="error text-white">Ce champ est requis</span>
                                )}
                            </div>
                        </div>

                        <textarea
                            className="mt-5 w-full bg-white bg-opacity-20 rounded-xl p-5 text-white"
                            rows="5"
                            placeholder="Comment pouvons-nous vous aider?"
                            id="message"
                            {...register("content", {required: true})}
                        />
                        <br/>
                        {errors.content && ( // errors est un objet
                            <span className="error text-white">Ce champ est requis</span>
                        )}
                        <br/>
                        {!sendMsg && (
                            <Button
                                className="submit-button"
                                type="submit"
                                title="Envoie-nous un message"
                                colorClass="bg-gradient-to-r from-pink to-purple"
                                marginClass="mt-5"
                            ></Button>
                        )}

                        {sendMsg && (
                            <div className="send-msg text-white">
                                <p>Votre message a bien été envoyé</p>
                            </div>
                        )}

                    </form>
                </div>
                <div className="w-1/4 overflow-hidden rounded-xl m-5 xxs:hidden sm:block">
                    <Image
                        width={200}
                        height={200}
                        className="object-cover h-full w-full"
                        priority={true}
                        src={pictureContact}
                        alt={"image_contact"}
                    />
                </div>
            </div>
        </Fade>
    )
}

export default Contact
