import ProfileImageForm from "@/Components/ProfileImageForm";
import ProfileForm from "@/Components/ProfileForm";
import { getUser } from "@/services/user";

const Dashboard = async () => {

    const user = await getUser();

    const userData = user.data;

    const userImage = userData?.image;

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-black">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 px-6">
                <ProfileForm
                    className="col-span-3"
                    data={userData}
                />

                <ProfileImageForm
                    className="col-span-2"
                    data={userImage}
                />
            </div>
        </div>
    )
};

export default Dashboard;