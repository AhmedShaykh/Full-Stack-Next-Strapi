import FeaturesSection from "./FeaturesSection";
import { getHomePageData } from "@/data";
import HeroSection from "./HeroSection";

function blockRenderer(block: any) {
    switch (block.__component) {
        case "layout.hero-section":
            return <HeroSection key={block.id} data={block} />;
        case "layout.features-section":
            return <FeaturesSection key={block.id} data={block} />;
        default:
            return null;
    }
};

const Main = async () => {

    const strapiData = await getHomePageData();

    const { blocks } = strapiData;

    if (!blocks) return <div>No Blocks Found</div>;

    return (
        <div>
            {blocks.map((block: any) => blockRenderer(block))}
        </div>
    )
};

export default Main;