import React from "react";
import { useNavigate } from "react-router-dom";
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

const FindPassword = () => {
    const navigate = useNavigate()

	const {
		value: enteredName,
		isValid: enteredNameIsValid,
		hasError: nameInputHasError,
		valueChangeHandler: nameChangedHandler,
		inputBlurHandler: nameBlurHandler,
	} = useInput((value) => value.trim() !== "" && value.length >= 2);

	const {
		value: enteredId,
		isValid: enteredIdIsValid,
		hasError: idInputHasError,
		valueChangeHandler: idChangedHandler,
		inputBlurHandler: idBlurHandler,
	} = useInput((value) => value.trim() !== "" && value.length >= 5);

	const findPasswordHandler = () => {

        //  아이디가 있을경우 새로운 비밀번호 설정하는 페이지로 이동
        navigate('/edit_password',{})

    };
	let formValid = false;

	if (enteredNameIsValid && enteredIdIsValid) formValid = true;
	return (
		<ContainerTag>
			<WrapperTag>
				<h2>비밀번호 찾기</h2>
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
						{/* 아이디 */}
						<InputWrapperTag>
							<label htmlFor="id">아이디</label>
							<input
								id="id"
								type="text"
								placeholder="아이디를 입력해주세요."
								value={enteredId}
								onChange={idChangedHandler}
								onBlur={idBlurHandler}
								required
							/>
							{idInputHasError && (
								<ErrorTag>
									아이디를 5자리 이상 입력해주세요.
								</ErrorTag>
							)}
						</InputWrapperTag>
						{/* 비밀번호 찾기 버튼 */}
						<ButtonTag
							color="white"
							bgColor="skyblue"
							onClick={findPasswordHandler}
							disabled={!formValid}
						>
							비밀번호 찾기
						</ButtonTag>
					</FormTag>
				</FormWrapperTag>
			</WrapperTag>
		</ContainerTag>
	);
};

export default FindPassword;
