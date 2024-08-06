"use client";
import { FC, Fragment, useRef, useState } from "react";
import { Label } from "@/Components/ui/label";
import { Input } from "@/Components/ui/input";
import StrapiImage from "./StrapiImage";

interface ImagePickerProps {
    id: string;
    name: string;
    label: string;
    showCard?: boolean;
    defaultValue?: string;
};

function generateDataUrl(file: File, callback: (imageUrl: string) => void) {

    const reader = new FileReader();

    reader.onload = () => callback(reader.result as string);

    reader.readAsDataURL(file);

};

function ImagePreview({ dataUrl }: { readonly dataUrl: string }) {
    return (
        <StrapiImage
            className="rounded-lg w-full object-cover"
            src={dataUrl}
            alt="preview"
            height={200}
            width={200}
        />
    )
};

function ImageCard({
    dataUrl,
    fileInput
}: {
    readonly dataUrl: string;
    readonly fileInput: React.RefObject<HTMLInputElement>;
}) {
    const imagePreview = dataUrl ? <ImagePreview dataUrl={dataUrl} /> : <p>No image selected</p>;

    return (
        <div className="w-full relative">
            <div className=" flex items-center space-x-4 rounded-md border p-4">
                {imagePreview}
            </div>

            <button
                onClick={() => fileInput.current?.click()}
                className="w-full absolute inset-0"
                type="button"
            ></button>
        </div>
    )
};

const ImagePicker: FC<ImagePickerProps> = ({
    id,
    name,
    label,
    defaultValue
}) => {

    const [dataUrl, setDataUrl] = useState<string | null>(defaultValue ?? null);

    const fileInput = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        const file = e.target.files?.[0];

        if (file) generateDataUrl(file, setDataUrl);

    };

    return (
        <Fragment>
            <div className="hidden">
                <Label htmlFor={name}>{label}</Label>
                <Input
                    onChange={handleFileChange}
                    type="file"
                    id={id}
                    name={name}
                    ref={fileInput}
                    accept="image/*"
                />
            </div>

            <ImageCard
                dataUrl={dataUrl ?? ""}
                fileInput={fileInput}
            />
        </Fragment>
    )
};

export default ImagePicker;