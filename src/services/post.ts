import axios from "axios";
import { unescape } from "html-escaper";
interface Props {
	useNo: number;
	enteredTitle: string;
	enteredWrite: string;
	categoryNum: number;
	selectedRegion: string;
	selectedWeather: number;
}

export const postUpload = async ({
	useNo,
	enteredTitle,
	enteredWrite,
	categoryNum,
	selectedRegion,
	selectedWeather,
}: Props) => {
	const form = new FormData();
	form.append("multipartFiles", "");
	form.append(
		"articles",
		`{"useNo":${useNo}, "artSubject": "${enteredTitle}","artContents": "${enteredWrite}","artCategory":  "${categoryNum}","regNo": "${selectedRegion}","artWSelect" : ${selectedWeather}}`
	);
	const res = await axios.post("/article/post", form);
	return res;
};

//  메인 페이지 게시물
export const getMainPosts = async (categoryNum: number, size: number) => {
	try {
		const res = await axios.get(`/article/category/${categoryNum}`, {
			params: { size },
		});
		return res;
	} catch (error: any) {
		return error.response;
	}
};

//  페이지별 게시물
export const getGategoryPosts = async (
	categoryNum: number,
	region: string,
	page: number
) => {
	try {
		const res = await axios.get(`/article/list/${categoryNum}/${region}`, {
			params: { page },
		});
		return res;
	} catch (error: any) {
		return error.response;
	}
};

// 상세 페이지
export const getDetailPost = async (artNo: number) => {
	try {
		const res = await axios.get(`/article/${artNo}`);
		return res;
	} catch (error: any) {
		return error.response;
	}
};

//  게시물 삭제

//  게시물 수정
