const config = {
	htmlContext: {
		head: {
			links: [
				{
					rel: "stylesheet",
					href:
						"https://fonts.googleapis.com/css?family=Kadwa:400,700|Montserrat:400,400i,700"
				},
				{
					rel: "stylesheet",
					href: "https://codemirror.net/theme/material.css"
				}
			]
		}
	},
	themeConfig: {
		codemirrorTheme: "material",
		logo: {
			src:
				"https://raw.githubusercontent.com/alice-labs/alice-design-system/master/public/logo-icon.png",
			width: 232
		},
		colors: {
			primary: "#007B65",
			sidebarBg: "#f3f3f3"
		},
		styles: {
			body: {
				fontFamily: "'Montserrat', Helvetica Neue, Arial, sans",
				fontSize: 16
			},
			h1: {
				fontFamily: "'Kadwa'"
			},
			h2: {
				fontFamily: "'Kadwa'"
			},
			h3: {
				fontFamily: "'Kadwa'"
			},
			logo: {
				background: "transparent",
				alignItems: "center"
			}
		}
	}
};

export default config;
