import { getSession } from "@/lib/session";
import User from "@/Components/User";

const Home = async () => {

    const session = await getSession();

    return <User session={session} />

};

export default Home;