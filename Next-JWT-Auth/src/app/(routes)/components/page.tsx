import Link from "next/link";

const ComponentPage = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen gap-16">
            <Link
                className="text-2xl font-semibold hover:text-blue-600 hover:underline"
                href={"/components/breadcrumb"}
                target="_blank"
            >
                BreadCrumb
            </Link>

            <Link
                className="text-2xl font-semibold hover:text-blue-600 hover:underline"
                href={"/components/otp"}
                target="_blank"
            >
                Input OTP
            </Link>
        </div>
    )
};

export default ComponentPage;