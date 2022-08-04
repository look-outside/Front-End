import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RiKakaoTalkFill } from "react-icons/ri";

const Login = () => {
	const idRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);
	const [openModal, setOpenModal] = useState(false)
	
	const goToHome = () => {
		// navigation 사용 
	}

	const loginHandler = () => {
		/*
			1.로그인 요청
			2.아이디가 있으면 goToHome (200)
			3. 없다면 모달창 setOpenModal(true) 포탈 사용 login할때 추가!
		*/
	}

	return (
		<Wrapper>
			<WrapperTag>
				<h2>로그인</h2>
				<FormWrapperTag>
					<FormTag>
						<InputWrapperTag>
							<input
								ref={idRef}
								type="text"
								placeholder="아이디 입력"
								required
							/>
							<input
								ref={passwordRef}
								type="password"
								placeholder="비밀번호 입력"
								required
							/>
						</InputWrapperTag>

						<div className="loginAndJoin">
							<ButtonTag
								type="submit"
								bgColor="skyblue"
								color="white"
								onClick={loginHandler}
							>
								로그인
							</ButtonTag>
							<ButtonTag
								type="button"
								bgColor="white"
								color="skyblue"
								border="skyblue"
							>
								<Link to="/join">
									회원 가입
								</Link>
							</ButtonTag>
						</div>
						<div className="find">
							<Link to="/find/id">아이디 찾기</Link>
							<div className="divider">
								<span>|</span>
							</div>
							<Link to="find/password">비밀번호 찾기</Link>
						</div>
						<div className="sns">
							<p>카카오로 간편하게 시작하세요</p>
							<ButtonTag type="button" bgColor="yellow">
								<RiKakaoTalkFill />
								<span id="kakao">카카오로 시작하기</span>
							</ButtonTag>
						</div>
					</FormTag>
				</FormWrapperTag>
			</WrapperTag>
		</Wrapper>
	);
};

export default Login;

const Wrapper = styled.div`
	padding: 0 2em;
	width: 100%;
	@media screen and (min-width: 500px) {
		max-width: 500px;
		margin: 0 auto;
	}
`;

const WrapperTag = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	h2 {
		font-size: 1.5rem;
		font-weight: 700;
		margin-bottom: 1.5em;
		color: skyblue;
	}
	@media screen and (min-width: 372px) {
		h2 {
			font-size: 2rem;
		}
	}
`;

const FormWrapperTag = styled.div`
	width: 100%;
`;

const FormTag = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;

	.loginAndJoin {
		display: flex;
		flex-direction: column;
		row-gap: 0.5em;
		margin-bottom: 1em;
		margin-top: 2em;
		width: 100%;
	}
	.find {
		display: flex;
		column-gap: 0.5em;
		justify-content: center;
		margin-bottom: 1em;
		font-size: 0.8rem;
		a,
		span {
			color: gray;
		}
	}
	.sns {
		display: flex;
		flex-direction: column;
		align-items: center;
		row-gap: 1em;
		width: 100%;
		font-size: 0.8rem;
	}

	@media screen and (min-width: 372px) {
		.find,
		.sns {
			font-size: 1rem;
		}
	}
`;

const InputWrapperTag = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 0.5em;
	width: 100%;
	input {
		width: 100%;
		padding: 0.5em;
		font-size: 1rem;
		letter-spacing: 1px;
		border: 1px solid skyblue;
		border-radius: 5px;
		:focus {
			outline: none;
			border: 2px solid skyblue;
		}
		::placeholder {
			font-size: 0.8rem;
		}
	}
	@media screen and (min-width: 372px) {
		input {
			font-size: 1.2rem;
			::placeholder {
				font-size: 1rem;
			}
		}
	}
`;

interface ButtonProps {
	bgColor: string;
	color?: string;
	border?: string;
}

const ButtonTag = styled.button<ButtonProps>`
	width: 100%;
	border: none;
	cursor: pointer;
	background-color: ${({ bgColor }) => bgColor};
	color: ${({ color }) => (color ? color : "black")};
	border: ${({ border }) => (border ? `1px solid ${border}` : "none")};
	padding: 1em;
	border-radius: 5px;
	font-size: 0.8rem;
	a{
		color: ${({ color }) => (color ? color : "black")};
	}
	#kakao {
		margin-left: 0.5em;
	}
	@media screen and (min-width: 372px) {
		font-size: 1rem;
	}
`;
