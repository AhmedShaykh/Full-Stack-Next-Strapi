"use client";
import { updateProfileAction } from "@/actions/profile-actions";
import { Textarea } from "@/Components/ui/textarea";
import { Input } from "@/Components/ui/input";
import SubmitButton from "./SubmitButton";
import StrapiErrors from "./StrapiErrors";
import { cn } from "@/lib/utils";
import { useFormState } from "react-dom";

interface ProfileFormProps {
    id: string;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    bio: string;
    credits: number;
};

const INITIAL_STATE = {
    data: null,
    strapiErrors: null,
    message: null
};

function CountBox({ text }: { readonly text: number }) {

    const style = "font-bold text-md mx-1";

    const color = text > 0 ? "text-primary" : "text-red-500";

    return (
        <div className="flex items-center justify-center h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none">
            You have<span className={cn(style, color)}>{text}</span>Credit(s)
        </div>
    )
};

const ProfileForm = ({
    data,
    className
}: {
    data: ProfileFormProps;
    className?: string;
}) => {

    const updateUserWithId = updateProfileAction.bind(null, data.id);

    const [formState, formAction] = useFormState(updateUserWithId, INITIAL_STATE);

    return (
        <form
            className={cn("space-y-4", className)}
            action={formAction}
        >
            <div className="grid gap-y-7">
                <div className="grid grid-cols-3 gap-4">
                    <Input
                        defaultValue={data.username || ""}
                        placeholder="Username"
                        id="username"
                        name="username"
                        disabled
                    />

                    <input type="hidden" name="id" value={data.id} />

                    <Input
                        defaultValue={data.email || ""}
                        placeholder="Email"
                        id="email"
                        name="email"
                        disabled
                    />

                    <CountBox text={data.credits} />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <Input
                        className="text-gray-200 font-medium"
                        defaultValue={data.firstName || ""}
                        placeholder="First Name"
                        id="firstName"
                        name="firstName"
                    />

                    <Input
                        className="text-gray-200 font-medium"
                        defaultValue={data.lastName || ""}
                        placeholder="Last Name"
                        id="lastName"
                        name="lastName"
                    />
                </div>

                <Textarea
                    className="resize-none border rounded-md w-full h-[224px] p-2"
                    placeholder="Write your bio here..."
                    id="bio"
                    name="bio"
                    defaultValue={data.bio || ""}
                    required
                />
            </div>

            <div className="flex justify-end">
                <SubmitButton
                    loadingText="Saving Profile"
                    text="Update Profile"
                />
            </div>

            <StrapiErrors error={formState?.strapiErrors} />
        </form>
    )
};

export default ProfileForm;