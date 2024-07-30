import { FC } from "react";
import StrapiImage from "./StrapiImage";
import { Button } from "./ui/button";
import Link from "next/link";

interface ImageProps {
    id: number;
    url: string;
    alternativeText: string;
};

interface LinkProps {
    id: number;
    url: string;
    text: string;
};

interface HeroSectionProps {
    data: {
        id: number;
        __component: string;
        heading: string;
        subHeading: string;
        image: ImageProps;
        link: LinkProps;
    };
};

const HeroSection: FC<HeroSectionProps> = ({ data }) => {

    const { heading, subHeading, image, link } = data;

    const imageURL = "http://localhost:8080" + image.url;

    return (
        <div className="relative h-[600px] overflow-hidden">
            <StrapiImage
                alt="Background"
                className="absolute inset-0 object-cover w-full h-full"
                height={1000}
                src={imageURL}
                width={1920}
            />

            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white bg-black bg-opacity-20">
                <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
                    {heading}
                </h1>

                <p className="mt-4 text-lg md:text-xl lg:text-2xl">
                    {subHeading}
                </p>

                <Link
                    className="mt-8"
                    href={link.url}
                >
                    <Button size="lg" className="font-semibold">
                        {link.text}
                    </Button>
                </Link>
            </div>
        </div>
    )
};

export default HeroSection;