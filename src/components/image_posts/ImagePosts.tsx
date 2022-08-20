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
									<div>
										<span id="city">{post.regAddr1}</span>
										<span id="district">
											{post.regAddr2}
										</span>
									</div>
									<h3>{post.artSubject}</h3>
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
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(auto-fill, 1fr);
	gap: 1em;
	@media screen and (min-width: 768px) {
		grid-template-columns: repeat(4, 1fr);
	}
    li{
        a{
            color:black
        }
    }
`;

const ImageWrapper = styled.div`
	background-color: skyblue;
	padding: 0.5em;
	border-radius: 10px;
`;

const PostImageTag = styled.img`
	border-radius: 10px;
	width: 100%;
`;

const InfoWrapper = styled.div`
	padding: 0.5em;
	#city,
	#district {
		font-size: 0.7rem;
	}
	#city {
		margin-right: 0.2em;
	}
	h3 {
		margin-top: 0.3em;
		font-weight: 800;
	}
`;
