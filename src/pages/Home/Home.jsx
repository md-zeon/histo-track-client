import Banner from "./Banner";
import SiteTitle from "../../components/SiteTitle";
import FeaturedArtifacts from "./FeaturedArtifacts";
import { useLoaderData } from "react-router";

const Home = () => {
	const featuredArtifacts = useLoaderData();
	return (
		<div>
			<SiteTitle>Home</SiteTitle>
			{/* Banner Section */}
			<Banner />
			{/* Featured Artifacts Section */}
			<FeaturedArtifacts featuredArtifacts={featuredArtifacts} />
		</div>
	);
};

export default Home;
