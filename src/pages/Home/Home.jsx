import Banner from "./Banner";
import SiteTitle from "../../components/SiteTitle";
import FeaturedArtifacts from "./FeaturedArtifacts";
import { useLoaderData } from "react-router";
import HowItWorks from "./HowItWorks";
import TopContributors from "./TopContributors";
import CallToAction from "./CallToAction";

const Home = () => {
	const featuredArtifacts = useLoaderData();
	return (
		<div>
			<SiteTitle>Home</SiteTitle>
			{/* Banner Section */}
			<Banner />

			<HowItWorks />
			{/* Featured Artifacts Section */}
			<FeaturedArtifacts featuredArtifacts={featuredArtifacts} />
			{/* How It Works Section */}

			<TopContributors />
			<CallToAction />
		</div>
	);
};

export default Home;
