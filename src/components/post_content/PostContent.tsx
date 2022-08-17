import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
interface Content {
	content: {
		artNo: number;
		useNo: number;
		artSubject: string; //title...???
		artContents: string;
		artCreated: string;
		artCategory: number;
		regNo: string;
		artWSelect: number;
	};
}

const weather = {
	0: "☀️",
	1: "⛅",
	2: "☁️",
	3: "🌧️",
	4: "🌩️",
	5: "선택 안함",
};

const category = {
	0: "오늘의 옷",
	1: "오늘의 하늘",
	2: "오늘의 모임",
};

const PostContent = ({ content }: Content) => {
	return (
		<article>
			<header>
				<div>
					<h2>{content.artSubject}</h2>
					{/* api 호출해서 addr1, addr2 보여준다. */}
					<span>{content.regNo}</span>
				</div>
				{/* 여기는 그냥 시간 */}
				<span>{content.artCreated}</span>
			</header>
			<div>
			</div>
		</article>
	);
};

export default PostContent;
