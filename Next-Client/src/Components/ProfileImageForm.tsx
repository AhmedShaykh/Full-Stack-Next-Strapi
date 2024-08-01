"use client";
import { uploadProfileImageAction } from "@/actions/profile-actions";
import SubmitButton from "./SubmitButton";
import StrapiErrors from "./StrapiErrors";
import ImagePicker from "./ImagePicker";
import ZodErrors from "./ZodErrors";
import { cn } from "@/lib/utils";
import { useFormState } from "react-dom";

interface ProfileImageFormProps {
    id: string;
    url: string;
    alternativeText: string;
}

const initialState = {
    message: null,
    data: null,
    strapiErrors: null,
    zodErrors: null
};

const ProfileImageForm = ({
    data,
    className
}: {
    data: Readonly<ProfileImageFormProps>
    className?: string
}) => {

    const uploadProfileImageWithIdAction = uploadProfileImageAction.bind(null, data?.id);

    const [formState, formAction] = useFormState(uploadProfileImageWithIdAction, initialState);

    return (
        <form
            className={cn("space-y-4", className)}
            action={formAction}
        >
            <div>
                <ImagePicker
                    defaultValue={data?.url || ""}
                    label="Profile Image"
                    id="image"
                    name="image"
                />

                <ZodErrors error={formState.zodErrors?.image} />
                <StrapiErrors error={formState.strapiErrors} />
            </div>

            <div className="flex justify-end">
                <SubmitButton
                    loadingText="Saving Image"
                    text="Update Image"
                />
            </div>
        </form>
    )
};

export default ProfileImageForm;