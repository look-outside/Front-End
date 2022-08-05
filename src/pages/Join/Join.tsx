import React, { useRef, useState } from "react";
import styled from "styled-components";
import useInput from "../../hooks/use-input";
import {
	ButtonTag,
	ContainerTag,
	FormWrapperTag,
	InputWrapperTag,
	WrapperTag,
	ErrorTag,
	FormTag,
} from "../login/Login";
import {AiOutlineCheck} from "react-icons/ai"

const Join = () => {
	const {
		value: enteredName,
		isValid: enteredNameIsValid,
		hasError: nameInputHasError,
		valueChangeHandler: nameChangedHandler,
		inputBlurHandler: nameBlurHandler,
	} = useInput((value) => value.trim() !== "" && value.length >= 2);

	const {
		value: enteredNickName,
		isValid: enteredNickNameIsValid,
		hasError: nickNameInputHasError,
		valueChangeHandler: nickNameChangedHandler,
		inputBlurHandler: nickNameBlurHandler,
	} = useInput((value) => value.trim() !== "" && value.length >= 3);

	const {
		value: enteredId,
		isValid: enteredIdIsValid,
		hasError: idInputHasError,
		valueChangeHandler: idChangedHandler,
		inputBlurHandler: idBlurHandler,
	} = useInput((value) => value.trim() !== "" && value.length >= 5);

	const {
		value: enteredPassword,
		isValid: enteredPasswordIsValid,
		hasError: passwordInputHasError,
		valueChangeHandler: passwordChangedHandler,
		inputBlurHandler: passwordBlurHandler,
	} = useInput((value) => value.trim() !== "" && value.length >= 6);

	const {
		value: enteredPassword2,
		isValid: enteredPassword2IsValid,
		hasError: password2InputHasError,
		valueChangeHandler: password2ChangedHandler,
		inputBlurHandler: password2BlurHandler,
	} = useInput((value) => value.trim() !== "" && value.length >= 6);

	const {
		value: enteredEmail,
		isValid: enteredEmailIsValid,
		hasError: emailInputHasError,
		valueChangeHandler: emailChangedHandler,
		inputBlurHandler: emailBlurHandler,
	} = useInput(
		(value) =>
			value.trim() !== "" &&
			/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)
	);

	let formValid = false;
	if (
		enteredNameIsValid &&
		enteredNickNameIsValid &&
		enteredIdIsValid &&
		enteredPasswordIsValid &&
		enteredPassword2IsValid &&
		enteredEmailIsValid
	)
		formValid = true;

	const goToLogin = () => {};

	const joinHandler = () => {
		// 모두 입력했는지 확인 후 처리 => required 자동
	};
	const idRef = useRef<HTMLInputElement>(null);
	const vaildCheckHandler = (name:string) => {
		if(name === "nickname") setVaildCheckNickName((pre) => !pre);
		if(name === "id") setVaildCheckId((pre)=>!pre);
		
		
	};
	const [vaildCheckNickName, setVaildCheckNickName] =
		useState(false);
	const [vaildCheckId, setVaildCheckId] = useState(false);
	return (
		<ContainerTag>
			<WrapperTag>
				<h2>회원가입</h2>
				<FormWrapperTag>
					<FormTag>
						{/* 이름 */}
						<InputWrapperTag>
							<label htmlFor="name">이름</label>
							<input
								id="name"
								type="text"
								placeholder="이름을 입력해주세요."
								value={enteredName}
								onChange={nameChangedHandler}
								onBlur={nameBlurHandler}
								required
							/>
							{nameInputHasError && (
								<ErrorTag>
									이름을 2자리 이상 입력해주세요.
								</ErrorTag>
							)}
						</InputWrapperTag>
						{/* 닉네임 */}
						<InputWrapperTag>
							<label htmlFor="nickname">닉네임</label>
							<VaildCheckWrapperTag>
								<input
									id="nickname"
									type="text"
									placeholder="닉네임을 입력해주세요."
									value={enteredNickName}
									onChange={nickNameChangedHandler}
									onBlur={nickNameBlurHandler}
									required
								/>
								<ButtonTag
						
									bgColor={
										vaildCheckNickName ? "skyblue" : "gray"
									}
									color="white"
									border={vaildCheckNickName ? "skyblue" : "none"}
									onClick={() => vaildCheckHandler("nickname")}
								>
									<AiOutlineCheck/>
								</ButtonTag>
							</VaildCheckWrapperTag>
							{nickNameInputHasError && (
								<ErrorTag>
									닉네임을 3자리 이상 입력해주세요.
								</ErrorTag>
							)}
						</InputWrapperTag>
						{/* 아이디 */}
						<InputWrapperTag>
							<label htmlFor="id">아이디</label>
							<VaildCheckWrapperTag>
								<input
									ref={idRef}
									id="id"
									type="text"
									placeholder="아이디를 입력해주세요."
									value={enteredId}
									onChange={idChangedHandler}
									onBlur={idBlurHandler}
									required
								/>

								<ButtonTag
									type="button"
									bgColor={
										vaildCheckId ? "skyblue" : "gray"
									}
									color="white"
									border={vaildCheckId ? "skyblue" : "none"}
									onClick={() => vaildCheckHandler("id")}
								>
									<AiOutlineCheck/>
								</ButtonTag>
							</VaildCheckWrapperTag>
							{idInputHasError && (
								<ErrorTag>
									아이디를 5자리 이상 입력해주세요.
								</ErrorTag>
							)}
						</InputWrapperTag>
						{/* 비밀번호 */}
						<InputWrapperTag>
							<label htmlFor="password">비밀번호</label>
							<input
								id="password"
								type="password"
								placeholder="비밀번호를 입력해주세요."
								value={enteredPassword}
								onChange={passwordChangedHandler}
								onBlur={passwordBlurHandler}
								required
							/>
							{passwordInputHasError && (
								<ErrorTag>
									비밀번호를 6자리 이상 입력해주세요.
								</ErrorTag>
							)}
						</InputWrapperTag>
						{/* 비밀번호 확인 */}
						<InputWrapperTag>
							<label htmlFor="password2">비밀번호 확인</label>
							<input
								id="password2"
								type="password"
								placeholder="비밀번호를 한번더 입력해주세요."
								value={enteredPassword2}
								onChange={password2ChangedHandler}
								onBlur={password2BlurHandler}
								required
							/>
							{password2InputHasError && (
								<ErrorTag>비밀번호가 서로 다릅니다.</ErrorTag>
							)}
						</InputWrapperTag>
						{/* 이메일 */}
						<InputWrapperTag>
							<label htmlFor="email">이메일</label>
							<input
								id="email"
								type="email"
								placeholder="이메일을 입력해주세요."
								value={enteredEmail}
								onChange={emailChangedHandler}
								onBlur={emailBlurHandler}
								required
							/>
							{emailInputHasError && (
								<ErrorTag>
									이메일을 양식에 맞게 다시 입력해주세요.
								</ErrorTag>
							)}
						</InputWrapperTag>
						{/* 성별 여자, 남자, 선택안함 - 라디오 */}
						<GenderTag>
							<label htmlFor="gender">성별</label>
							<div>
								<input
									type="radio"
									id="man"
									name="gender"
									value="man"
								/>
								<label htmlFor="man">남자</label>
							</div>

							<div>
								<input
									type="radio"
									id="girl"
									name="gender"
									value="girl"
								/>
								<label htmlFor="girl">여자</label>
							</div>

							<div>
								<input
									type="radio"
									id="none"
									name="gender"
									value="none"
								/>
								<label htmlFor="none">선택안함</label>
							</div>
						</GenderTag>
						{/* 회원가입 버튼  */}
						<ButtonTag
							color="white"
							bgColor="skyblue"
							onClick={joinHandler}
							disabled={!formValid}
						>
							회원가입
						</ButtonTag>
					</FormTag>
				</FormWrapperTag>
			</WrapperTag>
		</ContainerTag>
	);
};

export default Join;



const VaildCheckWrapperTag = styled.div`
	display: flex;
	column-gap: 0.5em;
	input {
		flex-basis: 95%;
	}
	button {
		flex-basis: 20%;
		font-size: 0.8rem;
	}
`;

const GenderTag = styled.div`
	display: flex;
	align-items: center;
	column-gap: 1em;
	margin-bottom: 1.5em;
	div {
		display: flex;
		align-items: center;
		column-gap: 0.3em;
		label {
			font-size: 0.5rem;
			@media screen and (min-width: 372px) {
				font-size: 1rem;
			}
		}
		input {
			width: 16px;
			height: 16px;
			:checked {
				border: 6px solid black;
			}
		}
	}
`;
