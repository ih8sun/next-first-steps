import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About",
    description: "About page",
    keywords: ['about', 'Alex Santiago', 'informacion', 'sobre mi']
};

export default function AboutPage() {
    return (

        <span className="text-7xl">About page</span>

    )
}