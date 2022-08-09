import {rest} from 'msw'

export const handlers = [
    rest.get('/user', (req, res, ctx) => {
        return res (
            ctx.status(200),
            ctx.json([
                {
                    userNo: 1,
                    userNick: "abc",
                    userId: "id1",
                    userName: "가나다",
                },
                {
                    userNo: 2,
                    userNick: "def",
                    userId: "id2",
                    userName: "라마바",
                }
            ])
        )
    }),
    rest.get('/article', (req, res, ctx) => {
        return res (
            ctx.status(200),
            ctx.json([
                {
                    boardNo: 1,
                    title: "내추럴 소프트 숲속향",
                    district: "서울시 강동구",
                    date: "22.08.06",
                },
                {
                    boardNo: 2,
                    title: "다시 만난 세계",
                    district: "서울시 송파구",
                    date: "22.12.25",
                }
            ])
        )
    })
]