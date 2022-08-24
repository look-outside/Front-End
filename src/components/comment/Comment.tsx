import React, { useState } from "react";
// import Moment from "react-moment";
// import "moment/locale/ko";

import { BsThreeDotsVertical } from "react-icons/bs"; // ... 클릭시 수정 삭제
import styled from "styled-components";
import authStore from "../../store/authStore";
import TextareaAutosize from "react-textarea-autosize";
import { UploadButtonTag } from "./UploadComment";
import { CommentT } from "../../types/types";
import Swal from "sweetalert2";

interface Props {
	comment: CommentT;
	onDelete: (repNo: number) => void;
	onUpdate: (repNo: number, comment: string) => void;
}

const Comment = ({ comment, onDelete, onUpdate }: Props) => {
	const { userProfile } = authStore();
	const [openEdit, setOpenEdit] = useState<boolean>(false);
	const [editMode, setEditMode] = useState<boolean>(false);
	const [enteredComment, setEnteredComment] = useState<string>(
		comment.repContents
	);

	const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		setEnteredComment(event.target.value);
	};

	const submitHandler = (event: React.ChangeEvent<HTMLFormElement>) => {
		event.preventDefault();
		// api 호출
		setEditMode(false);
	};

	const deleteHandler = () => {
		// 삭제 api 호출
		Swal.fire({
			position: "center",
			icon: "question",
			title: "댓글을 삭제하시겠습니까?!",
			confirmButtonText: "확인",
			confirmButtonColor: "skyblue",
			showCancelButton: true,
			cancelButtonText: "취소",
			cancelButtonColor: "red",
		}).then((result) => {
			if (result.isConfirmed) onDelete(comment.repNo);
			else Swal.close();
		});
		setOpenEdit(false);
	};

	const updateHandler = () => {
		onUpdate(comment.repNo, enteredComment);
		setEditMode(false);
	};
	return (
		<CommentWrapperTag
			onMouseLeave={() => setOpenEdit(false)}
		>
			<CommentBoxTag >
				<CommentHeaderTag >
					<div className="user_info">
						{/* 수정 이름 필드 추가해서 */}
						<span className="nickname">{comment.useNick}</span>
						{userProfile?.nickname === comment.useNick && (
							<span className="mine">내 댓글</span>
						)}
						<span className="time">{comment.repCreated}</span>
					</div>
					{userProfile?.nickname === comment.useNick && (
						<EditTag>
							<BsThreeDotsVertical
								onClick={() => setOpenEdit((pre) => !pre)}
							/>
							{openEdit && (
								<div className="edit_modal">
									<ul>
										<li id="delete" onClick={deleteHandler}>
											삭제
										</li>
										<li
											id="edit"
											onClick={() => {
												setOpenEdit(false);
												setEditMode(true);
											}}
										>
											수정
										</li>
									</ul>
								</div>
							)}
						</EditTag>
					)}
				</CommentHeaderTag>
				<CommentTag>
					{!editMode && <p>{enteredComment}</p>}
					{editMode && (
						<form onSubmit={submitHandler}>
							<CommentTag>
								<TextareaAutosize
									autoFocus
									// 자동으로 커서위치를 끝으로 이동
									onFocus={(e) =>
										e.target.setSelectionRange(
											enteredComment.length,
											enteredComment.length
										)
									}
									value={enteredComment}
									onChange={onChange}
								/>
							</CommentTag>
							<UploadButtonTag>
								<button
									type="button"
									onClick={() => {
										setEditMode(false);
										setEnteredComment(comment.repContents);
									}}
								>
									취소
								</button>
								<button
									type="submit"
									disabled={
										enteredComment === comment.repContents
									}
									onClick={updateHandler}
								>
									등록
								</button>
							</UploadButtonTag>
						</form>
					)}
				</CommentTag>
			</CommentBoxTag>
		</CommentWrapperTag>
	);
};

export default Comment;

const CommentWrapperTag = styled.li`
	box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
		rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
	border-radius: 5px;
	padding: 0.5em;
	@media screen and (min-width: 780px) {
		padding: 1em;
	}
`;

const CommentBoxTag = styled.div`
	display: grid;
	row-gap: 1.25em;
`;
const CommentHeaderTag = styled.div`
	display: flex;
	align-items: center;
	.user_info {
		flex: 1;
		column-gap: 1em;
		display: flex;
		align-items: center;
		.nickname {
			font-size: 1rem;
		}
		.mine {
			font-size: 0.65rem;
			color: white;
			background-color: skyblue;
			border-radius: 5px;
			padding: 0.25em 0.5em;
			margin-left: -0.5em;
		}
		.time {
			font-size: 0.75rem;
			color: gray;
		}
		@media screen and (min-width: 780px) {
			.nickname {
				font-size: 1.2rem;
			}
			.mine {
				font-size: 0.75rem;
			}
		}
	}
`;

const CommentTag = styled.div`
	flex: 1;
	p {
		font-size: 0.85rem;
		letter-spacing: 1.5px;
		white-space: pre-line;
	}
	textarea {
		width: 100%;
		height: 100%;
		font-size: 0.85rem;
		padding: 0.5em;
		border: none;
		border-bottom: 1px solid lightgray;
		resize: none;
		:focus {
			outline: none;
			border-bottom: 2px solid skyblue;
		}
	}
	@media screen and (min-width: 780px) {
		p {
			font-size: 1rem;
		}
		textarea {
			font-size: 1rem;
		}
	}
`;

const EditTag = styled.div`
	position: relative;
	svg {
		cursor: pointer;
	}

	.edit_modal {
		position: absolute;
		top: 30px;
		left: -30px;
		width: max-content;
		display: flex;
		box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
			rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
		padding: 1em 0;
		background-color: white;
		border-radius: 5px;
		font-size: 1rem;
		ul {
			li {
				padding: 0.5em 1.5em;
				cursor: pointer;
				:hover {
					background-color: skyblue;
				}
			}
		}
		#delete {
			color: red;
		}
		#edit {
			:hover {
				color: white;
			}
		}
	}
`;
