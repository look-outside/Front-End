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
			<ListTag>
				{posts.map((post) => (
					<li key={post.id}>
						<Link to={`${path}/${post.id}`}>
							<div className="left">
								<span id="nickName">{post.nickName}</span>
								<span id="city">{post.city}</span>
								<span id="district">{post.district}</span>
							</div>
							<div className="right">
								<span id="title">{post.title}</span>
							</div>
						</Link>
					</li>
				))}
			</ListTag>
		</FreePostsTag>
	);
};

export default FreePosts;

const FreePostsTag = styled.div`
	background-color: skyblue;
	border-radius: 15px;
	padding: 1em;
    @media screen and (min-width: 500px){
        padding: 1.2em;
    }
    @media screen and (min-width: 875px){
        padding: 1.5em;
    }
`;

const ListTag = styled.ul`
	background-color: white;
	border-radius: 15px;
	padding: 0.5em;
	width: 100%;
	display: grid;
	row-gap: 1em;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
	li {
		a {
			display: flex;
            flex-direction: column;
            row-gap: .5em;
			justify-content: space-between;
			align-items: center;
			border-bottom: 2px dotted skyblue;
			padding: 0.5em .8em;
			color: black;
            @media screen and (min-width: 500px){
                flex-direction: row;
                padding: 0.5em 1.5em;
            }
		}
	}
	.left {
		display: flex;
		align-items: flex-end;
	}
	#nickName {
        font-size: .7rem;
		font-weight: 800;
		margin-right: 0.5em;
	}
	#city {
		margin-right: 0.2em;
	}
	#city,
	#district {
		font-size: 0.4rem;
		color: gray;
	}
	#title {
        font-size: .7rem;
		font-weight: 800;
	}


    
    @media screen and (min-width: 500px) {
		#nickName {
            font-size: .8rem;
		}
		#city {
		}
		#city,
		#district {
            font-size: 0.6rem;

		}
        #title {
		font-size:.8rem;
	}
	}

	@media screen and (min-width: 875px) {
		#nickName {
			font-size: 1rem;
		}
		#city {
		}
		#city,
		#district {
			font-size: 0.7rem;
		}
        #title {
		font-size:1rem;
	}
	}

`;
