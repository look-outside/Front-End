import React from "react";
import styled from "styled-components";
import { CommentT } from "../../types/types";
import Empty from "../Empty";
import Comment from "./Comment";

interface Props {
	comments: CommentT[];
	onDelete: (repNo: number) => void;
	onUpdate: (repNo: number, comment: string) => void;
}

const Comments = ({ comments, onDelete, onUpdate }: Props) => {
	return (
		<CommentListWrapperTag>
			<h2>댓글 목록</h2>
			<CommentList>
				{!comments.length ? (
					<Empty />
				) : (
					comments.map((comment) => (
						<Comment
							key={comment.repNo}
							comment={comment}
							onDelete={onDelete}
							onUpdate={onUpdate}
						/>
					))
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
`;
