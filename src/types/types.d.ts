export interface Post {
    useNo?:number,
    useNick?:string,
    artNo: number,
    artCategory?:string,
    artSubject: string,
    artContents?:string,
    artCreated?:string,
    imgSave ?: string | null,
    regNo?:string,
    regAddr1: string,
    regAddr2: string,
}

export type PageT = {
    [key :string] :number
}

export interface Token {
	useId?: string;
	useRole: string;
	useNick: string;
	useNo: number;
	sub?:string;
	role?:string;
}