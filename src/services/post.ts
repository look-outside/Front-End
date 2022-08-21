import axios from "axios";

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
	form.append("useNo", `${useNo}`);
	form.append("artSubject", enteredTitle);
	form.append("artContents", enteredWrite);
	form.append("artCategory", `${categoryNum}`);
	form.append("regNo", selectedRegion);
	form.append("artWSelect", `${selectedWeather}`);
	console.log(form);
	const res = await axios.post("/article/post",form, {
		headers: {
			"Content-Type": "multipart/form-data",
		},
	});
	return res;
};

//  메인 페이지 게시물 
export const getMainPosts = async(categoryNum:number) => {
	try{
		const res = await axios.get(`/article/list/${categoryNum}`)
		return res
	}catch(error:any){
		return error.response
	}
}

//  페이지별 게시물
export const getGategoryPosts  = async(categoryNum:number,region:string,page:number) => {
	try{
		const res = await axios.get(`/article/list/${categoryNum}/${region}`,{
			params: {page}
		})
		return res
	}catch(error:any){
		return error.response
	}
}