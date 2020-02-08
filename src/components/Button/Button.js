import React from "react";
// Styled components 💅 is library that allows you create components easily and
// style them, css-in-js style. It's totally optional, but I prefer to use it
// to build things quickly and have them look great every step of the way.
import styled from "styled-components";

// Style components take CSS in a template string. Even Sass functions with work!
// Each element is a property of styled, like h3, p, div, etc...
const ButtonWrapper = styled.button`
	border-radius: ${props =>
		props.size === "xs"
			? "3px"
			: props.size === "sm"
			? "5px"
			: props.size === "md"
			? "8px"
			: props.size === "lg"
			? "10px"
			: "8px"};
	color: ${props => (props.intent === "white" ? "#333" : "#fff")};
	background: ${props =>
		props.intent === "primary"
			? `linear-gradient(90deg,#005762,#007b65)`
			: props.intent === "secondary"
			? "linear-gradient(90deg,#0B132B,#484B69)"
			: props.intent === "warning"
			? "linear-gradient(90deg,#FFBA63,#FF9548)"
			: props.intent === "danger"
			? "linear-gradient(90deg,#FF6B50,#D22D47)"
			: props.intent === "success"
			? "linear-gradient(90deg,#38E89C,#00986D)"
			: props.intent === "white"
			? "linear-gradient(90deg,#FFFFFF,#F2F4F3)"
			: "#005762"};
	padding: ${props =>
		props.size === "xs"
			? "5px 10px"
			: props.size === "sm"
			? "10px 20px"
			: props.size === "md"
			? "15px 30px"
			: props.size === "lg"
			? "20px 35px"
			: "15x 30px"};
	border: none;
	box-shadow: ${props => (props.intent === "white" ? "0 0 1px #ccc" : "none")}
	cursor: pointer;
	outline: none;
	transition: all 0.3s ease-in-out;
	&:hover {
    background: ${props =>
			props.intent === "primary"
				? "linear-gradient(90deg,#007b65,#005762)"
				: props.intent === "secondary"
				? "linear-gradient(90deg,#484B69,#0B132B)"
				: props.intent === "warning"
				? "linear-gradient(90deg,#FF9548,#FFBA63)"
				: props.intent === "danger"
				? "linear-gradient(90deg,#D22D47,#FF6B50)"
				: props.intent === "success"
				? "linear-gradient(90deg,#00986D,#38E89C)"
				: props.intent === "white"
				? "linear-gradient(90deg,#F2F4F3,#FFFFFF)"
				: "#007b65"};
    box-shadow: ${props =>
			props.intent === "primary"
				? "0px 10px 4px -5px rgba(0, 116, 98, 0.4);"
				: props.intent === "secondary"
				? "0 10px 4px -5px rgba(11, 19, 43, 0.4);"
				: props.intent === "warning"
				? "0px 10px 4px -5px rgba(255, 149, 72, 0.4);"
				: props.intent === "danger"
				? "0px 10px 4px -5px rgba(210, 45, 71, 0.4);"
				: props.intent === "success"
				? "0px 10px 4px -5px rgba(0, 152, 109, 0.4);"
				: props.intent === "white"
				? "0px 10px 4px -5px rgba(141, 153, 174, 0.3);"
				: "#007b65"};
  }
`;

// Components are functions, and they must start with a capital letter
function Button(props) {
	// {...props} uses the the ES6 spread operator to send any props you may pass
	// along without changing any of the contents. This is basically just creating
	// a copy to pass along

	//define all props here
	// intent = primary || secondary || danger || success || warning
	// size = xs || sm || md || lg

	return <ButtonWrapper {...props}>{props.children}</ButtonWrapper>;
}

// This export will be picked up in ./index.js
export default Button;
