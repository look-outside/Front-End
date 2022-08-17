import React from "react";
import styled from "styled-components";
import Comment from "./Comment";

const COMMENTS = [
	{
		name: "이시형",
		comment: "끝내자 이제",
		create: "Mon Aug 15 2022 00:40:28 GMT+0900",
		id: 1,
		userId: "dltlgud",
	},
	{
		name: "이시형",
		comment: "끝내자 이제",
		create: "Mon Aug 15 2022 00:40:28 GMT+0900",
		id: 2,
		userId: "dltlgud",
	},
	{
		name: "이시형",
		comment: "끝내자 이제",
		create: "Mon Aug 15 2022 00:40:28 GMT+0900",
		id: 3,
		userId: "dltlgud",
	},
];

const Comments = () => {
	return (
		<CommentListWrapperTag>
			<h2>댓글 목록</h2>
			<CommentList>
				{COMMENTS.map((comment) => (
					<Comment key={comment.id} comment={comment} />
				))}
			</CommentList>
		</CommentListWrapperTag>
	);
};

export default Comments;

const CommentListWrapperTag = styled.div`
    h2{
        margin-bottom: 1em;
        color: skyblue;
        font-size: 1.3rem;
        font-weight: 800;
    }
`

const CommentList = styled.ul`
	display: flex;
	flex-direction: column;
	row-gap: 1em;
`;
