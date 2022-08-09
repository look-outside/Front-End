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
    })
]