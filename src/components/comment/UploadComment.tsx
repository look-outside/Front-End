import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { User } from "../../store/authStore";
import TextareaAutosize from "react-textarea-autosize";

interface Props {
	onAddComment: (text: string) => void;
	user: User;
}

const UploadComment = ({ onAddComment, user }: Props) => {
	const [enteredComment, setEnteredComment] = useState<string>("");

	const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		setEnteredComment(event.target.value);
	};

	const submitHandler = async (event: React.ChangeEvent<HTMLFormElement>) => {
		event.preventDefault();
		onAddComment(enteredComment);
		setEnteredComment("");
	};

	if (!user) {
		return (
			<LoginTag>
				<p>로그인 후 댓글 작성이 가능 합니다.</p>
				<button>
					<Link to="/login">로그인</Link>
				</button>
			</LoginTag>
		);
	}
	return (
		<UploadWrapperTag>
			<NickNameTag>
				<span>{user.nickname}</span>
			</NickNameTag>
			<form onSubmit={submitHandler}>
				<CommentTag>
					<TextareaAutosize
						autoFocus
						placeholder="댓글을 입력해 주세요."
						value={enteredComment}
						onChange={onChange}
					/>
				</CommentTag>
				<UploadButtonTag>
					<button type="submit" disabled={enteredComment === ""}>
						등록
					</button>
				</UploadButtonTag>
			</form>
		</UploadWrapperTag>
	);
};

export default UploadComment;

const LoginTag = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	row-gap: 1em;
	p {
		font-size: .8rem;
		letter-spacing: 1.5px;
		@media screen and (min-width: 780px) {
			font-size: 1.2rem;
		}
	}
	button {
		background-color: skyblue;
		border: none;
		outline: none;
		border-radius: 5px;
		padding: 0.5em 1.5em;
		a {
			color: white;
		}
	}
`;

const UploadWrapperTag = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	column-gap: 1.5em;
	row-gap: 1em;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
		rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
	border-radius: 5px;
	padding: 0.5em;
	form {
		display: flex;
		flex-direction: column;
		flex: 1;
		width: 100%;
	}
	@media screen and (min-width: 780px) {
		flex-direction: row;
		padding: 1em;
	}
`;

const NickNameTag = styled.div`
	padding-top: 0.5em;
	padding-left: 0.5em;
	span {
		font-size: 1rem;
	}
	@media screen and (min-width: 780px) {
		span {
			font-size: 1.2rem;
		}
	}
`;
const CommentTag = styled.div`
	flex: 1;
	textarea {
		width: 100%;
		height: 100%;
		font-size: 0.85rem;
		font-weight: 500;
		padding: 0.5em;
		border: none;
		border-bottom: 1px solid lightgray;
		resize: none;
		letter-spacing: 1.5px;
		:focus {
			outline: none;
			border-bottom: 2px solid skyblue;
		}
		::placeholder {
			font-size: 0.85rem;
		}
		@media screen and (min-width: 780px) {
			font-size: 1.25rem;
			::placeholder {
				font-size: 1.25rem;
			}
		}
	}
`;

export const UploadButtonTag = styled.div`
	display: flex;
	justify-content: flex-end;
	column-gap: 1em;
	margin-top: 0.5em;
	button {
		padding: 0.5em 1em;
		font-size: 0.8rem;
		background-color: skyblue;
		color: white;
		border: none;
		outline: none;
		border-radius: 5px;
		cursor: pointer;
		:disabled {
			background-color: gray;
		}
		@media screen and (min-width: 780px) {
			font-size: 1rem;
		}
	}
	button[type="button"] {
		background-color: red;
	}
`;
