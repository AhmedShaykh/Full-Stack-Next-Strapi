import { flattenAttributes } from "@/lib/utils";
import HeroSection from "./HeroSection";
import qs from "qs";

const homePageQuery = qs.stringify({
    populate: {
        blocks: {
            populate: {
                image: {
                    fields: [
                        "url",
                        "alternativeText"
                    ]
                },
                link: {
                    populate: true
                }
            }
        }
    }
});

async function getStrapiData(path: string) {

    const baseURL = "http://localhost:8080";

    const url = new URL(path, baseURL);

    url.search = homePageQuery;

    try {

        const response = await fetch(url.href, { cache: "no-store" });

        const data = await response.json();

        const flattenedData = flattenAttributes(data);

        return flattenedData;

    } catch (error) {

        console.log(error);

    }

};

const Main = async () => {

    const strapiData = await getStrapiData("/api/home-page");

    const { blocks } = strapiData;

    return (
        <div>
            <HeroSection data={blocks[0]} />
        </div>
    )
};

export default Main;