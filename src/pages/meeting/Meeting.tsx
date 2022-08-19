import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SelectRezion from "../../components/select_region/SelectRegion";
import CateHeader from "../../components/CateHeader";
const list = [
	{
		useNo: 3,
		regNo: "0101",
		artContents: "살려줘어어",
		artSubject: "리라라",
		artNo: 1,
		artCategory: 1,
		useNick: "hj2",
		imgSave: "",
		artCreated: "22.08.18 17:24:29",
		regAddr2: "종로구",
		regAddr1: "서울특별시",
		artWselect: 3,
	},
];
const Meeting = () => {
	const [region, setRegion] = useState<string>("");
	const getRegionHandler = (reg: string) => {
		console.log(reg)
		setRegion(reg);
	};
	// useEffect(()=>{
	// 	//  호출
	// },[region])
	return (
		<ContainerTag>
			<CateHeader category="오늘의 모임" onGetRegionNumber={getRegionHandler}/>
			<ListBoxTag>
				<p>{list[0].artSubject}</p>
				<p>{list[0].useNick}</p>
				<p>{list[0].artCreated}</p>
				<p>{list[0].regAddr2}</p>
				<p>{list[0].regAddr1}</p>
			</ListBoxTag>
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


const ListBoxTag = styled.div`
	border-radius: 10px;
	background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
	box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;
