import React, { useState } from "react";
import styled from "styled-components";
import { MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";


const Meeting = () => {

	return (
		<ContainerTag>
			<WrapperTag>
				<PageHeaderTag>
					<div className="title">
						<h2>오늘의 모임</h2>
					</div>

					<button type="button">
            <Link to="/upload_post" state={{category:"오늘의 모임"}}>
						<MdEdit />
						글쓰기
            </Link>
					</button>
          
					
				</PageHeaderTag>
			</WrapperTag>
		</ContainerTag>
	);
};

export default Meeting;

export const ContainerTag = styled.div`
	padding: 0 2em;
	width: 100%;
	@media screen and (min-width: 1160px) {
		max-width: 1160px;
		margin: 0 auto;
	}
`;
export const WrapperTag = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
  row-gap: 2em;
	width: 100%;
`;

export const PageHeaderTag = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	.title {
		padding: 1em 3em;
		border: 1px solid skyblue;
		justify-items: center;
		h2 {
			font-size: 1.8rem;
			font-weight: 700;
			color: skyblue;
		}
	}
	button {
		background-color: skyblue;
		border-radius: 5px;
		border: none;
		display: flex;
		align-items: center;
		justify-content: center;
		column-gap: 0.5em;
		color: white;
    a{
      color:white;
      padding: 0.5em 1em;
      width: 100%;

    }
		position: absolute;
		right: 2em;
	}
`;
