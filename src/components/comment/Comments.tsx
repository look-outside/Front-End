import React from "react";
import styled from "styled-components";
import { CommentT } from "../../types/types";
import Comment from "./Comment";

interface Props {
	comments: CommentT[];
}

const Comments = ({ comments }: Props) => {
	return (
		<CommentListWrapperTag>
			<h2>댓글 목록</h2>
			<CommentList>
				{comments.length ? (
					comments.map((comment) => (
						<Comment key={comment.repNo} comment={comment} />
					))
				) : (
					<div className="nothing">
						<p>등록된 댓글이 없습니다.</p>
					</div>
				)}
			</CommentList>
		</CommentListWrapperTag>
	);
};

export default Comments;

const CommentListWrapperTag = styled.div`
	h2 {
		margin-bottom: 1em;
		color: skyblue;
		font-size: 1.3rem;
		font-weight: 800;
	}
`;

const CommentList = styled.ul`
	display: flex;
	flex-direction: column;
	row-gap: 1em;
	.nothing{
		box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
		rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
	border-radius: 5px;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 2em;
	}
`;
