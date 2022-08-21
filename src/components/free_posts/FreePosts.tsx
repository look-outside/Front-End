import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Post } from "../../types/types";

interface Props {
	posts: Post[];
	path: string;
}
const FreePosts = ({ posts, path }: Props) => {
	return (
		<FreePostsTag>
			{posts.length ? (
				<ListTag>
					{posts.map((post) => (
						<li key={post.artNo}>
							<Link to={`${path}/${post.artNo}`} state={{artNo: post.artNo}}>
								<div className="left">
									<span className="artSubject">
										{post.artSubject}
									</span>
								</div>
								<div className="right">
									<div>
										<span className="created">
											{post.artCreated}
										</span>
									</div>
									<div className="info">
										<span className="nickName">
											{post.useNick}
										</span>
										<div>
											<span className="regAddr1">
												{post.regAddr1}
											</span>
											<span className="regAddr2">
												{post.regAddr2}
											</span>
										</div>
									</div>
								</div>
							</Link>
						</li>
					))}
				</ListTag>
			) : (
				<div className="nothing">
					<p>글이 없습니다.</p>
				</div>
			)}
		</FreePostsTag>
	);
};

export default FreePosts;

const FreePostsTag = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
	border-radius: 5px;
	.nothing {
		min-height: 120px;
		display: flex;
		align-items: center;
	}
`;

const ListTag = styled.ul`
	width: 100%;
	display: flex;
	flex-direction: column;
	row-gap: 1em;
	/* height: 100%; */
	li {
		:not(:last-child) {
			border-bottom: 2px solid lightgray;
		} 
		a {
			display: flex;
			flex-direction: column;
			row-gap: 0.8em;
			justify-content: space-between;
			padding: 0.5rem 1rem;
			color: black;
		}
	}
	.left {
		display: flex;
		flex-direction: column;
		row-gap: 0.5em;
		flex: 1;
	}
	.right {
		display: flex;
		justify-content: space-between;
		align-items: center;
		row-gap: 0.5em;
	}
	.created {
		font-size: 0.7rem;
		color: gray;
	}
	.nickName {
		font-size: 0.7rem;
		font-weight: 500;
		margin-right: 0.5em;
	}
	.regAddr1 {
		margin-right: 0.2em;
	}
	.regAddr1,
	.regAddr2 {
		font-size: 0.4rem;
		color: gray;
	}
	.artSubject {
		font-size: 0.9rem;
		font-weight: 500;
	}

	@media screen and (min-width: 500px) {
		.left {
			column-gap: 0.5em;
		}
		.right {
			.info {
				display: flex;
				align-items: center;
			}
		}
		.created {
			font-size: 0.6rem;
		}
		.nickName {
			font-size: 0.8rem;
		}
		.regAddr1 {
		}
		.regAddr1,
		.regAddr2 {
			font-size: 0.6rem;
		}
		.artSubject {
			font-size: 1rem;
		}
	}

	@media screen and (min-width: 875px) {
		.created {
			font-size: 0.8rem;
		}
		.nickName {
			font-size: 1rem;
		}
		.regAddr1 {
		}
		.regAddr1,
		.regAddr2 {
			font-size: 0.7rem;
		}
	}
`;
