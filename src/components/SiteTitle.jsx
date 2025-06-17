import { Helmet } from "react-helmet-async";

const SiteTitle = ({ children }) => {
	return (
		<Helmet>
			<title>Histo Track | {children}</title>
		</Helmet>
	);
};

export default SiteTitle;
