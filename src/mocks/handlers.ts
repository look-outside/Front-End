import {rest} from 'msw'

export const handlers = [
    rest.get('/user', (req, res, ctx) => { //관리자-회원목록
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
    rest.get('/article', (req, res, ctx) => { //관리자-글목록
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
    }),
    rest.get('/my_page/info', (req, res, ctx) => { //마이-회원정보수정
        // const no = req.url.searchParams.get('no');
        return res (
            ctx.status(200),
            ctx.json(
                {
                    useNo: 1,
                    useNick: "nickname4",
                    useId: "id4",
                    usePw: "$2a$10$vy9TR/EEK8XlAWBMBryCJOXxhiy1IRnLmdyAIK9JZES4eypQgOhPW",
                    useName: "test",
                    useEmail: "test@test.com",
                }
            )
        )
    }),
    rest.get('/articles', (req, res, ctx) => { //카테고리글(일단통일)        
        return res (
            ctx.status(200),
            ctx.json([
                {
                    artNo: 1,
                    artTitle: '내추럴 소프트 숲속향',
                    useNick: "듀링듀링",
                    useDis: '서울 강동구'
                },
                {
                    artNo: 2,
                    artTitle: '내추럴 숲속향',
                    useNick: "듀링",
                    useDis: '서울 강동구'
                },
                {
                    artNo: 3,
                    artTitle: '내추럴 소프트 숲속향숲속향',
                    useNick: "듀",
                    useDis: '서울 강동구'
                },
                {
                    artNo: 4,
                    artTitle: '내추럴',
                    useNick: "듀링듀",
                    useDis: '서울 강동구'
                },
            ])
        )
    }),
    rest.get('/articles', (req, res, ctx) => { //페이징 처리
        const pageNum = req.url.searchParams.get('page')
        
        // if (pageNum) {
        //     return res {
        //         ctx.status(pageNum)
        //     }
        // }

        return res (
            ctx.status(Number(pageNum)),
            ctx.json([
                {
                    artNo: 1,
                    artTitle: '내추럴 소프트 숲속향',
                    useNick: "듀링듀링",
                    useDis: '서울 강동구'
                },
                {
                    artNo: 2,
                    artTitle: '내추럴 숲속향',
                    useNick: "듀링",
                    useDis: '서울 강동구'
                },
                {
                    artNo: 3,
                    artTitle: '내추럴 소프트 숲속향숲속향',
                    useNick: "듀",
                    useDis: '서울 강동구'
                },
                {
                    artNo: 4,
                    artTitle: '내추럴',
                    useNick: "듀링듀",
                    useDis: '서울 강동구'
                },
            ])
        )
    }),
]