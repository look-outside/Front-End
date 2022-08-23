import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Comments from "../../components/comment/Comments";
import UploadComment from "../../components/comment/UploadComment";
import LoadingSpinner from "../../components/LoadingSpinner";
import Pagination from "../../components/Pagination";
import PostContent from "../../components/post_content/PostContent";
import {
	addComment,
	deleteComment,
	getComments,
	updateComment,
} from "../../services/comment";
import authStore from "../../store/authStore";
import { CommentT, PageT } from "../../types/types";

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
interface CustomizedState {
	artNo: number;
}

const DetailPost = () => {
	const { userProfile } = authStore();
	const [comments, setComments] = useState<CommentT[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [page, setPage] = useState<PageT>({})
	const [curPage, setCurPage] = useState(1);
	const location = useLocation();
	const { artNo } = location.state as CustomizedState;

	const addCommentHandler = async (text: string) => {
		const res = await addComment(artNo, userProfile.no, text);
		const newComment = res.data.data;
		setComments((pre) =>
			pre.length ? [newComment, ...pre] : [newComment]
		);
	};

	const deleteCommentHandler = async (repNo: number) => {
		await deleteComment(repNo);
		const updateComment = comments.filter(
			(comment) => comment.repNo !== repNo
		);
		setComments(updateComment);
	};

	const updateCommentHandler = async (repNo: number, comment: string) => {
		await updateComment(repNo, comment);
	};

	useEffect(() => {
		const get = async () => {
			setIsLoading(true);
			const res = await getComments(artNo,curPage -1);
			setPage(res.data.data.pageable)
			setComments(res.data.data.list);
			setIsLoading(false);
		};
		get();
	}, [curPage]);

	return (
		<ContainerTag>
			<PostContent content={DETAILPOST} />
			{isLoading && (
				<LoadingSpinnerWrapperTag>
					<LoadingSpinner />
				</LoadingSpinnerWrapperTag>
			)}
			{!isLoading && (
				<Comments
					comments={comments}
					onDelete={deleteCommentHandler}
					onUpdate={updateCommentHandler}
				/>
			)}
			<UploadComment
				onAddComment={addCommentHandler}
				user={userProfile}
			/>
			{page && comments.length !== 0 && (
				<Pagination
					curPage={curPage}
					setCurPage={setCurPage}
					totalPage={page.totalPages}
					totalCount={page.totalElements}
					size={page.size}
					pageCount={page.totalPages < 3 ? page.totalPages : 3}
				/>
			)}
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

const LoadingSpinnerWrapperTag = styled.div`
	position: relative;
	height: 200px;
`;
