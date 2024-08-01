import { FC } from "react";
import { getStrapiMedia } from "@/lib/utils";
import Image from "next/image";

interface StrapiImageProps {
    src: string;
    alt: string;
    height: number;
    width: number;
    className?: string;
};

const StrapiImage: FC<StrapiImageProps> = ({
    src,
    alt,
    height,
    width,
    className
}) => {

    if (!src) return null;

    const imageUrl = getStrapiMedia(src);

    const imageFallback = `https://placehold.co/${width}x${height}`;

    return (
        <Image
            src={imageUrl ?? imageFallback}
            alt={alt}
            height={height}
            width={width}
            className={className}
        />
    )
};

export default StrapiImage;