import axios from "axios";

// 댓글 추가
export const addComment = async(artNo:number, useNo:number, repContents: string)=>{
    const res = await axios.post(`/article/reply`,{
        artNo,
        useNo,
        repContents
    })
    console.log(res)
    return res
}

// 댓글 삭제 
export const deleteComment = async(repNo:number) => {
    await axios.delete(`/article/reply/${repNo}`)
}

// 댓글 목록 조회
export const getComments = async(artNo:number)=>{
    const res = await axios.get(`/article/replylist/${artNo}`)
    console.log("목록: ",res)
    return res 
}
