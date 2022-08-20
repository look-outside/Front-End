import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import CateHeader from "../../components/CateHeader";


const Meeting = () => {
	const [region, setRegion] = useState<string>("");
	const getRegionHandler = (reg: string) => {
		setRegion(reg);
	};
	useEffect(()=>{
		console.log(region)
	},[region])
	return (
		<ContainerTag>
			<CateHeader categoryNum={0} category="오늘의 모임" onGetRegionNumber={getRegionHandler}/>
			
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