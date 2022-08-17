import React from "react";
import styled from "styled-components";
import Comments from "../../components/comment/Comments";
import UploadComment from "../../components/comment/UploadComment";
import PostContent from "../../components/post_content/PostContent";

const DETAILPOST = {
	artNo: 1,
	useNo: 1,
	artSubject: "공휴일",
	artContents: "# Hello, *world*!",
	artCreated: "22.08.16 01:35:35",
	artCategory: 1,
	regNo: "0101",
	artWSelect: 3,
};

const DetailPost = () => {
	// 요기서 api를 호출하고 뿌려준다?
	return (
		<ContainerTag>
			<PostContent content={DETAILPOST}/>
			<Comments />
			<UploadComment />
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
