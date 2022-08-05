import React from "react";
import styled from "styled-components";
import useInput from "../../hooks/use-input";
import {
	ButtonTag,
	ContainerTag,
	ErrorTag,
	FormTag,
	FormWrapperTag,
	InputWrapperTag,
	WrapperTag,
} from "../login/Login";

const FindId = () => {
	const {
		value: enteredName,
		isValid: enteredNameIsValid,
		hasError: nameInputHasError,
		valueChangeHandler: nameChangedHandler,
		inputBlurHandler: nameBlurHandler,
	} = useInput((value) => value.trim() !== "" && value.length >= 2);

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

	const findIdHandler = () => {};
	let formValid = false;

	if (enteredNameIsValid && enteredEmailIsValid) formValid = true;
	return (
		<ContainerTag>
			<WrapperTag>
				<h2>아이디 찾기</h2>
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
						{/* 아이디 찾기 버튼 */}
						<ButtonTag
							color="white"
							bgColor="skyblue"
							onClick={findIdHandler}
							disabled={!formValid}
						>
							아이디 찾기
						</ButtonTag>
					</FormTag>
				</FormWrapperTag>
			</WrapperTag>
		</ContainerTag>
	);
};

export default FindId;
