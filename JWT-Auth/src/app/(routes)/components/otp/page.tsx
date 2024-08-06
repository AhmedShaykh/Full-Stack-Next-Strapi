import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/Components/ui/input-otp";

const OTPPage = () => {
    return (
        <div className="grid place-items-center h-screen bg-[#0A0A0A]">
            <InputOTP
                maxLength={6}
            >
                <InputOTPGroup>
                    <InputOTPSlot className="text-xl h-16 w-16" index={0} />
                    <InputOTPSlot className="text-xl h-16 w-16" index={1} />
                    <InputOTPSlot className="text-xl h-16 w-16" index={2} />
                </InputOTPGroup>

                <InputOTPSeparator />

                <InputOTPGroup>
                    <InputOTPSlot className="text-xl h-16 w-16" index={3} />
                    <InputOTPSlot className="text-xl h-16 w-16" index={4} />
                    <InputOTPSlot className="text-xl h-16 w-16" index={5} />
                </InputOTPGroup>
            </InputOTP>
        </div>
    )
};

export default OTPPage;