export interface Post {
    useNo: number,
    useNick: string,
    artNo: number,
    artCategory: number,
    artSubject: string,
    artContents: string,
    artCreated: string,
    ImgSave: string | null,
    regNo: string,
    regAddr1: string,
    regAddr2: string,
}

export type PageT = {
    [key :string] :number
}