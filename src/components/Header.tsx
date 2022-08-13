import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { logout } from "../services/user";
import authStore from "../store/authStore";

interface User {
	id: string;
	type: string;
	nickname: string;
}

const Header = () => {
	const { userProfile, removeUser } = authStore()
	return (
		<HeaderTag>
			<LogoTag>
				<Link to="/">
					<h1>밖에봐봐</h1>
					<span>Look OutSide</span>
				</Link>
			</LogoTag>
			<NavTag>
				<div>
					<div>
						<FirstNavTag>
							<li>
								<NavLink to="/today_clothes/main">
									<span className="text">오늘의 옷</span>
								</NavLink>
							</li>
							<li>
								<NavLink to="/today_sky">
									<span className="text">오늘의 하늘</span>
								</NavLink>
							</li>
							<li>
								<NavLink to="/today_meeting">
									<span className="text">오늘의 모임</span>
								</NavLink>
							</li>
						</FirstNavTag>
						<SecondNavTag>
							{!userProfile && (
								<>
									<Link to="/login" className="border">
										<span>로그인</span>
									</Link>
									<Link to="/join" className="border">
										<span>회원가입</span>
									</Link>
								</>
							)}
							{userProfile && (
								<>
									<li className="border">
										<span>{userProfile?.nickname}</span>
									</li>
									<li>
										<button
											className="border"
											onClick={() => logout(removeUser)}
										>
											<span>로그아웃</span>
										</button>
									</li>
									{userProfile?.type === "USER" ? (
										<Link to="/my_page" className="border">
											<span>마이 페이지</span>
										</Link>
									) : (
										<Link
											to="/admin_page"
											className="border"
										>
											<span>관리자 페이지</span>
										</Link>
									)}
								</>
							)}
						</SecondNavTag>
					</div>
				</div>
			</NavTag>
		</HeaderTag>
	);
};

export default Header;

const HeaderTag = styled.header`
	background-color: skyblue;
	width: 100%;
	margin-bottom: 50px;
`;

const LogoTag = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1em 2em;

	a {
		display: flex;
		flex-direction: column;
		align-items: center;
		row-gap: 0.2em;
		color: yellow;
		h1 {
			font-size: 2.2rem;
			font-weight: 800;
		}
		span {
			font-size: 1.3rem;
			font-weight: 600;
			text-transform: uppercase;
		}
	}

`;

const NavTag = styled.nav`
	display: flex;
	flex-direction: column;
	padding: 0.5em 0;
	div {
		background-color: white;
		div {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 0.7em 2em;
			@media screen and (min-width: 1160px) {
				max-width: 1160px;
				margin: 0 auto;
			}
		}
	}
`;

const FirstNavTag = styled.ul`
	display: flex;
	justify-content: space-between;
	column-gap: 1em;
	.text {
		font-size: 0.8rem;
		color: skyblue;
		display: flex;
		align-items: center;
		font-weight: 700;
	}

	@media screen and (min-width: 420px) {
		.text {
			font-size: 1rem;
		}
	}
	@media screen and (max-width: 767px) {
		flex-basis: 100%;
	}
	@media screen and (min-width: 768px) {
		flex-basis: 50%;
		.text {
			font-size: 1.2rem;
		}
	}
	@media screen and (min-width: 1024px) {
		flex-basis: 60%;
		.text {
			font-size: 1.5rem;
		}
	}
`;

// login, logout, mypage, adminpage .. 이름 나중에 수정
const SecondNavTag = styled.ul`
	display: none;
	column-gap: 0.5em;
	.border {
		border: 2px solid skyblue;
		border-radius: 10px;
		font-size: 0.7rem;
		color: skyblue;
		cursor: pointer;
	}
	button {
		border: none;
		background-color: transparent;
	}
	@media screen and (min-width: 768px) {
		column-gap: 1em;
		display: flex;
		.border {
			font-size: 0.8rem;
			padding: 0.5em 1em;
		}
	}
	@media screen and (min-width: 1024px) {
		column-gap: 1em;
		display: flex;
		.border {
			font-size: 1rem;
			padding: 0.5em 1em;
		}
	}
`;