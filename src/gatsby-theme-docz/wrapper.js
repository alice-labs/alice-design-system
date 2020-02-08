//used for documentation docz

import * as React from "react";
import { Helmet } from "react-helmet-async";

// The doc prop contains some metadata about the page being rendered that you can use.
const Wrapper = ({ children, doc }) => (
	<React.Fragment>
		<Helmet>
			<meta charSet="utf-8" />
			<title>Alice React</title>
			<link
				rel="shortcut icon"
				href="https://raw.githubusercontent.com/alice-labs/alice-design-system/master/public/favicon.ico"
			/>
		</Helmet>
		{children}
	</React.Fragment>
);

export default Wrapper;
