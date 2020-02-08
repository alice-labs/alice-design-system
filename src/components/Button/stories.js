import React from "react";
// Import the storybook libraries
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
// Import our component from this folder
import Button from "./Button";

// Here we describe the stories we want to see of the Button. The component is
// pretty simple so we will just make two, one with text and one with emojis
// Simple call storiesOf and then chain .add() as many times as you wish
//
// .add() takes a name and then a function that should return what you want
// rendered in the rendering area

//define all props here
// intent = primary || secondary || danger || success || warning || white
// size = xs || sm || md || lg

const defaultMarginRight = 10;

storiesOf("Button")
	.add("Intent", () => (
		<div>
			<div style={{ display: "inline-block" }}>
				<Button
					intent="primary"
					size="md"
					style={{ marginRight: defaultMarginRight }}
					onClick={action("clicked")}
				>
					Primary
				</Button>
				<Button
					intent="secondary"
					size="md"
					style={{ marginRight: defaultMarginRight }}
					onClick={action("clicked")}
				>
					Secondary
				</Button>
				<Button
					intent="danger"
					size="md"
					style={{ marginRight: defaultMarginRight }}
					onClick={action("clicked")}
				>
					Danger
				</Button>
				<Button
					intent="success"
					size="md"
					style={{ marginRight: defaultMarginRight }}
					onClick={action("clicked")}
				>
					Success
				</Button>
				<Button
					intent="white"
					size="md"
					style={{ marginRight: defaultMarginRight }}
					onClick={action("clicked")}
				>
					White
				</Button>
				<Button
					intent="warning"
					size="md"
					style={{ marginRight: defaultMarginRight }}
					onClick={action("clicked")}
				>
					Warning
				</Button>
			</div>
		</div>
	))
	.add("Size", () => (
		<div style={{ display: "inline-block" }}>
			<Button
				intent="primary"
				size="xs"
				style={{ marginRight: defaultMarginRight }}
				onClick={action("clicked")}
			>
				Button xs
			</Button>
			<Button
				intent="primary"
				size="sm"
				style={{ marginRight: defaultMarginRight }}
				onClick={action("clicked")}
			>
				Button SM
			</Button>
			<Button
				intent="primary"
				size="md"
				style={{ marginRight: defaultMarginRight }}
				onClick={action("clicked")}
			>
				Button MD
			</Button>
			<Button
				intent="primary"
				size="lg"
				style={{ marginRight: defaultMarginRight }}
				onClick={action("clicked")}
			>
				Button LG
			</Button>
		</div>
	));
