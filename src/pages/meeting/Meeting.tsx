import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import CateHeader from "../../components/CateHeader";
import Pagination from "../../components/Pagination";
import { PageT } from "../../types/types";
import axios from "axios";
import { getGategoryPosts } from "../../services/post";
import FreePosts from "../../components/free_posts/FreePosts";
const Meeting = () => {
	const [region, setRegion] = useState<string>("");
	const [page, setPage] = useState<PageT>();
	const [curPage, setCurPage] = useState(1);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [posts, setPosts] = useState<[]>([]);
	const getRegionHandler = (reg: string) => {
		setRegion(reg);
	};
	useEffect(() => {
		setIsLoading(true);
		const getPosts = async () => {
			const res = await getGategoryPosts(0, region, curPage);
			console.log(res);
			setPosts(res.data.data.list);
			setPage(res.data.data.pageble);
		};
		getPosts();
		setIsLoading(false);
	}, [region, curPage]);
	return (
		<ContainerTag>
			<CateHeader
				categoryNum={0}
				category="오늘의 모임"
				onGetRegionNumber={getRegionHandler}
			/>
			{isLoading ? (
				<p>로딩중</p>
			) : <FreePosts posts={posts} path="/today_meeting"/>}
			{page && <Pagination curPage={curPage} setCurPage={setCurPage} totalPage={page.totalPages} totalCount={page.totalElements} size={page.size} pageCount={3}/>}
		</ContainerTag>
	);
};

export default Meeting;

export const ContainerTag = styled.div`
	padding: 0 2em;
	width: 100%;
	@media screen and (min-width: 1160px) {
		max-width: 1160px;
		margin: 0 auto;
	}
`;
export const WrapperTag = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	row-gap: 2em;
	width: 100%;
`;
