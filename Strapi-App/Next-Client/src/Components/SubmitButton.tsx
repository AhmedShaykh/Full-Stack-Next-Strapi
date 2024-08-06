"use client";
import { FC } from "react";
import { Button } from "@/Components/ui/button";
import { cn } from "@/lib/utils";
import { useFormStatus } from "react-dom";
import { Loader2 } from "lucide-react";

interface SubmitButtonProps {
    text: string;
    loadingText: string;
    className?: string;
    loading?: boolean;
};

function Loader({ text }: { readonly text: string }) {
    return (
        <div className="flex items-center space-x-2">
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            <p>{text}</p>
        </div>
    )
};

const SubmitButton: FC<SubmitButtonProps> = ({
    text,
    loadingText,
    loading,
    className
}) => {

    const status = useFormStatus();

    return (
        <Button
            aria-disabled={status.pending || loading}
            disabled={status.pending || loading}
            className={cn(className)}
            type="submit"
        >
            {status.pending || loading ? <Loader text={loadingText} /> : text}
        </Button>
    )
};

export default SubmitButton;