import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import authStore from "../store/authStore";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { logout } from "../services/user";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
	const [openSidebar, setOpenSidebar] = useState<boolean>(false);
	const [openSubList, setOpenSubList] = useState<boolean>(false);
	const { userProfile, removeUser } = authStore();

	const navigate = useNavigate();

	const logoutHandler = () => {
		setOpenSidebar(false);
		logout(removeUser);
	};

	useEffect(() => {
		setOpenSidebar(false);
		setOpenSubList(false);
	}, [navigate]);

	return (
		<>
			{!openSidebar && (
				<SidebarButtonTag
					type="button"
					onClick={() => setOpenSidebar((pre) => !pre)}
				>
					<GiHamburgerMenu />
				</SidebarButtonTag>
			)}
			{openSidebar && (
				<>
					<Backdrop onClick={() => setOpenSidebar(false)} />
					<SidebarTag>
						<div className="title">
							<h1>밖에봐봐</h1>
							<span>Look OutSide</span>
						</div>
						<div className="content">
							{userProfile ? (
								<>
									<div className="auth about">
										<p id="nickname">
											{userProfile?.nickname}
										</p>
										{userProfile.type === "USER" ? (
											<NavLinkTag to="/my_page">
												<span>마이 페이지</span>
											</NavLinkTag>
										) : (
											<NavLinkTag to="/admin">
												<span>관리자 페이지</span>
											</NavLinkTag>
										)}
									</div>
								</>
							) : (
								<div className="auth login">
									<Link to="login">
										<span>로그인</span>
									</Link>
								</div>
							)}
							<div className="category">
								<div
									onMouseOver={() => setOpenSubList(true)}
									onMouseLeave={() => setOpenSubList(false)}
								>
									<NavLinkTag to="/today_clothes">
										오늘의 옷
									</NavLinkTag>
									{openSubList && (
										<ul className="sub_list">
											<li>
												<NavLinkTag to="/today_clothes/dailylook">
													데일리룩
												</NavLinkTag>
											</li>
											<li>
												<NavLinkTag to="/today_clothes/free">
													자유글
												</NavLinkTag>
											</li>
										</ul>
									)}
								</div>
								<div>
									<NavLinkTag to="/today_sky">
										오늘의 하늘
									</NavLinkTag>
								</div>
								<div>
									<NavLinkTag to="/today_meeting">
										오늘의 모임
									</NavLinkTag>
								</div>
							</div>
						</div>

						{userProfile && (
							<div className="logout" onClick={logoutHandler}>
								<p>로그아웃</p>
								<span>
									<RiLogoutBoxRLine />
								</span>
							</div>
						)}
					</SidebarTag>
				</>
			)}
		</>
	);
};

export default Sidebar;

const SidebarButtonTag = styled.button`
	position: absolute;
	top: 1em;
	left: 1em;
	font-size: 1.5rem;
	color: white;
	background-color: transparent;
	border: none;
	cursor: pointer;
	display: none;
	@media screen and (max-width: 768px) {
		display: block;
	}
`;

const Backdrop = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	z-index: 20;
	background-color: rgba(0, 0, 0, 0.75);
	z-index: 1;
`;

const SidebarTag = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 230px;
	height: 100vh;
	background-color: white;
	z-index: 2;
	padding: 1em 0;
	display: flex;
	flex-direction: column;
	.title {
		color: skyblue;
		padding: 0 1rem 1rem 1rem;
		h1 {
			font-size: 1.8rem;
			font-weight: 800;
			margin-bottom: 0.2em;
			letter-spacing: 3px;
		}
		span {
			font-size: .95rem;
			font-weight: 600;
			text-transform: uppercase;
		}
		border-bottom: 1px solid lightgray;
	}
	.content {
		flex: 1;

		.auth {
			padding: 1rem;
			padding-bottom: 1rem;
			border-bottom: 1px solid lightgray;
		}

		.about {
			display: flex;
			flex-direction: column;
			row-gap: 1em;
			#nickname {
				font-size: 1.1rem;
				color: skyblue;
			}
		}

		.login {
			width: 100%;
			font-size: 1.5rem;
			a {
				display: flex;
				justify-content: center;
				padding: 0.5em;
				color: skyblue;
				border: 1px solid skyblue;
				border-radius: 5px;
			}
		}
		.category {
			padding: 1rem;
			display: flex;
			flex-direction: column;
			row-gap: 1.5em;
			border-bottom: 1px solid lightgray;
			font-size: 1.1rem;
			.sub_list {
				display: grid;
				row-gap: 1em;
				padding: 1em 1em 0 1em;
				font-size: .9rem;
			}
		}
	}
	.logout {
		padding: 0 1rem 1rem 1rem;
		position: absolute;
		display: flex;
		bottom: 0;
		right: 0;
		column-gap: 0.5em;
		font-size: 1rem;
		font-weight: 700;
		cursor: pointer;
		color: lightgray;
	}
`;

const NavLinkTag = styled(NavLink)`
	color: black;
	&.active {
		color: skyblue;
	}
`;
