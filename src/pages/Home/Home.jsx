import Banner from "./Banner";
import SiteTitle from "../../components/SiteTitle";
import FeaturedArtifacts from "./FeaturedArtifacts";
import { useLoaderData } from "react-router";
import HowItWorks from "./HowItWorks";
import TopContributors from "./TopContributors";
import CallToAction from "./CallToAction";
import FunFacts from "./FunFacts";
import RecentlyAddedArtifacts from "./RecentlyAddedArtifacts";

const Home = () => {
	const featuredArtifacts = useLoaderData();
	return (
		<div>
			<SiteTitle>Home</SiteTitle>
			{/* Banner Section */}
			<Banner />
			{/* Featured Artifacts Section */}
			<FeaturedArtifacts featuredArtifacts={featuredArtifacts} />
			{/* How It Works Section */}
			<HowItWorks />
			<FunFacts />
			{/* Top Contributors Section */}
			<TopContributors />
			<RecentlyAddedArtifacts />
			{/* Call To Action Section */}
			<CallToAction />
		</div>
	);
};

export default Home;
