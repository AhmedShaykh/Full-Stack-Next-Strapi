"use server";
import { fileDeleteService, fileUploadService } from "@/services/file-service";
import { mutateData } from "@/services/mutate-data";
import { flattenAttributes } from "@/lib/utils";
import { getUser } from "@/services/user";
import { imageSchema } from "@/lib/schema";
import qs from "qs";

export async function updateProfileAction(
    userId: string,
    prevState: any,
    formData: FormData
) {

    const rawFormData = Object.fromEntries(formData);

    const query = qs.stringify({
        populate: "*",
    });

    const payload = {
        firstName: rawFormData.firstName,
        lastName: rawFormData.lastName,
        bio: rawFormData.bio,
    };

    const responseData = await mutateData(
        "PUT",
        `/api/users/${userId}?${query}`,
        payload
    );

    if (!responseData) {
        return {
            ...prevState,
            strapiErrors: null,
            message: "Ops! Something went wrong. Please try again."
        };
    }

    if (responseData.error) {
        return {
            ...prevState,
            strapiErrors: responseData.error,
            message: "Failed to Register."
        };
    }

    const flattenedData = flattenAttributes(responseData);

    return {
        ...prevState,
        message: "Profile Updated",
        data: flattenedData,
        strapiErrors: null
    };

};

export async function uploadProfileImageAction(
    imageId: string,
    prevState: any,
    formData: FormData
) {

    const user = await getUser();

    if (!user.ok) throw new Error("You are not authorized to perform this action.");

    const userId = user.data.id;

    const data = Object.fromEntries(formData);

    const validatedFields = imageSchema.safeParse({
        image: data.image,
    });

    if (!validatedFields.success) {
        return {
            ...prevState,
            zodErrors: validatedFields.error.flatten().fieldErrors,
            strapiErrors: null,
            data: null,
            message: "Invalid Image"
        };
    }

    if (imageId) {

        try {

            await fileDeleteService(imageId);

        } catch (error) {

            return {
                ...prevState,
                strapiErrors: null,
                zodErrors: null,
                message: "Failed to Delete Previous Image."
            };

        }

    }

    const fileUploadResponse = await fileUploadService(data.image);

    if (!fileUploadResponse) {
        return {
            ...prevState,
            strapiErrors: null,
            zodErrors: null,
            message: "Ops! Something went wrong. Please try again."
        };
    }

    if (fileUploadResponse.error) {
        return {
            ...prevState,
            strapiErrors: fileUploadResponse.error,
            zodErrors: null,
            message: "Failed to Upload File.",
        };
    }

    const updatedImageId = fileUploadResponse[0].id;

    const payload = { image: updatedImageId };

    const updateImageResponse = await mutateData(
        "PUT",
        `/api/users/${userId}`,
        payload
    );

    const flattenedData = flattenAttributes(updateImageResponse);

    return {
        ...prevState,
        data: flattenedData,
        zodErrors: null,
        strapiErrors: null,
        message: "Image Uploaded"
    };

};