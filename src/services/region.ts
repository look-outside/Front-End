import axios from "axios"

export const getRegion = async(rez:string)=>{
	const res = await axios.get(`/region/${rez}`)
	return res
}