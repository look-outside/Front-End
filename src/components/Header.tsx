import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const Header = () => {
	// 임시 유저 로그인 x
	let isLogined = true;
    let isAdmin = true
	return (
		<HeaderTag>
			<div>
				<div>
                    <h1>밖에봐봐</h1>
                    <p>Look Outside</p>
                </div>
				<div>
					<ul>
						{!isLogined ? (
							<>
								<li>로그인</li>
								<li>회원가입</li>
							</>
						) : (
							<>
                                {isAdmin ? <li>관리자 페이지</li> :<><li>닉네임</li> <li>마이페이지</li></>}
                                <li>로그 아웃</li>
							</>
						)}
					</ul>
				</div>
			</div>
			<nav>
				<ul>
					<li>
						<NavLink to="/today_clothes">오늘의 옷</NavLink>
					</li>
					<li>
						<NavLink to="/today_sky">오늘의 하늘</NavLink>
					</li>
					<li>
						<NavLink to="/today_meeting">오늘의 모임</NavLink>
					</li>
				</ul>
			</nav>
		</HeaderTag>
	);
};

export default Header;

const HeaderTag = styled.header`
    background : skyblue
`