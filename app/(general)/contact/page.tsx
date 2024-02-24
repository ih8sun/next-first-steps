import { Metadata } from "next";

export const metadata : Metadata = {
    title: "Contact",
    description: "Contact page",
    keywords: ['Contact', 'Alex Santiago','informacion','sobre mi']
};

export default function ContactPage(){
    return ( 
        <>
            <span className="text-7xl">ContactPage</span>
        </>
    )
}