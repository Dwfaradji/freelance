import React from "react";
import Link from "next/link";
import {FaceFrownIcon} from "@heroicons/react/24/outline";
import Button from "../components/ui/Atoms/button";

const NotFound = () => {
    return (
        <main className="max-w-7x p-8 mx-auto w-full flex justify-center flex-col text-white items-center">
            <FaceFrownIcon className="w-40 text-gray-400"/>
            <h1 className="title-404">Page introuvable</h1>
            <p className="subtitle-404">
                {"Désolé, la Page que vous recherchez n'existe pas."}
            </p>

            <Link className="mt-8" href={"/"}>
                <Button
                    title={"Retour à l'accueil"}
                    colorClass="bg-gradient-to-r from-pink to-purple "
                    textColor="text-white"
                ></Button>
            </Link>
        </main>
    );
};

export default NotFound;
