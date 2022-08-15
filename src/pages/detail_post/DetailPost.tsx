import React from "react";
import styled from "styled-components";
import Comments from "../../components/comment/Comments";
import UploadComment from "../../components/comment/UploadComment";

const DetailPost = () => {
	return (
		<ContainerTag>
			<Comments />
            <UploadComment/>
		</ContainerTag>
	);
};

export default DetailPost;

const ContainerTag = styled.div`
	padding: 0 2em;
	display: grid;
    row-gap: 1em;
	@media screen and (min-width: 1160px) {
		max-width: 1160px;
		margin: 0 auto;
	}
`;
