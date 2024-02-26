import React, { Suspense } from "react";
import {Inter} from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Loading from "@/app/loading";
import GoogleAnalytics from '@/lib/GoogleAnalytics';

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata = {
    title: "DevEvoke : Développement Web & Applications de Qualité Supérieure à Perpignan",
    description:
        "DevEvoke  Agence web & mobile experte à Perpignan.Développez votre succès numérique avec des solutions innovantes et intuitives. Sites web | Applications | Logiciels sur mesure 5+ans d'expérience | Code propre & Maintenable | Devis gratuit",

    alternates: {
        canonical: "https://www.devevoke.com/",
        languages: {
            fr: "https://www.devevoke.com/",
        },
    }, robots: {
        follow: true,
        index: true,
    },
};

    export default function RootLayout({children}) {
        return (
            <html lang="fr">
            <GoogleAnalytics GA_TRACKING_ID={String(process.env.GA_TRACKING_ID)} />
            <body className={inter.variable}>
            <div>
                <Navbar/>
                <Suspense fallback={<Loading />}>{children}</Suspense>
                <Footer/>
            </div>
            </body>
            </html>
        );
    }
