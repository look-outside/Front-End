import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Footer = () => {
	return (
		<FooterTag>
			<div>
				<Link to="/">
					<h1>밖에 봐봐</h1>
					<span>Look OutSide</span>
				</Link>
			</div>
		</FooterTag>
	);
};

export default Footer;

const FooterTag = styled.footer`
	background-color: skyblue;
	width: 100%;
	margin-top: 50px;
	position: sticky;
	top: 100%;
	a {
		display: flex;
		flex-direction: column;
		row-gap: 0.5em;
		color: yellow;
		h1 {
			font-size: 2rem;
			font-weight: 800;
		}
		span {
			padding-left: 0.2em;
			font-weight: 500;
		}
	}
	div {
		padding: 1em 2em;
		@media screen and (min-width: 1200px) {
			max-width: 1200px;
			margin: 0 auto;
		}
	}
`;
