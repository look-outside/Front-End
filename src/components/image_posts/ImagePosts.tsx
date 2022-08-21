import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Post } from "../../types/types";

interface Props {
	posts: Post[];
	path: string;
}

const ImagePosts = ({ posts, path }: Props) => {
	return (
		<ImagePostsTag>
			<ListTag>
				{posts.map((post) => (
					<li key={post.artNo}>
						<Link to={`${path}/${post.artNo}`}>
							<article>
								<ImageWrapper>
									<PostImageTag
										src={post.imgSave}
										alt="게시물 이미지"
									/>
								</ImageWrapper>
								<InfoWrapper>
									<h3>{post.artSubject}</h3>
									<div className="info">
										<span className="nickname">
											{post.useNick}
										</span>
										<div>
											<span className="city">
												{post.regAddr1}
											</span>
											<span className="district">
												{post.regAddr2}
											</span>
										</div>
									</div>
								</InfoWrapper>
							</article>
						</Link>
					</li>
				))}
			</ListTag>
		</ImagePostsTag>
	);
};

export default ImagePosts;

const ImagePostsTag = styled.div``;

const ListTag = styled.ul`
	display: grid;
	grid-template-columns: repeat(1, 1fr);
	grid-template-rows: repeat(auto-fill, 1fr);
	gap: 1em;
	@media screen and (min-width: 500px) {
		grid-template-columns: repeat(2, 1fr);
	}
	/* @media screen and (min-width: 768px) {
		grid-template-columns: repeat(4, 1fr);
	} */
	@media screen and (min-width:964px) {
		grid-template-columns: repeat(4, 1fr);
	}

	li {
		padding: 0.4em 0.4em 1em 0.4em;
		border-radius: 5px;
		:hover {
			transform: scale(1.02);
			transition: 0.4s;
			box-shadow: 0 12px 16px hsla(228, 66%, 45%, 0.1);
		}
		a {
			color: black;
		}
	}
`;

const ImageWrapper = styled.div``;

const PostImageTag = styled.img`
	border-radius: 5px;
	width: 100%;
`;

const InfoWrapper = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 0.5em;
	padding: 0.5em;
	.info {
		display: flex;
		align-items: center;
		column-gap: 0.4em;
	}
	.name {
		font-size: .9rem;
		font-weight: 500;
	}
	.city,
	.district {
		font-size: 0.7rem;
		color: gray;
	}
	.city {
		margin-right: 0.2em;
	}
	h3 {
		margin-top: 0.3em;
		font-weight: 500;
		line-height: 130%;
	}
`;
