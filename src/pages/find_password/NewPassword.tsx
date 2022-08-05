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

const NewPassword = () => {
    const navigate = useNavigate()

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
	} = useInput((value) => value.trim() !== "" && value.length >= 6 && enteredPassword === value );

	const editPasswordHandler = () => {

        //  변경된 유저 정보를 보내준뒤?
        navigate('/',{})

    };
	let formValid = false;

	if (enteredPasswordIsValid && enteredPassword2IsValid) formValid = true;
	return (
		<ContainerTag>
			<WrapperTag>
				<h2>새 비밀번호 변경</h2>
				<FormWrapperTag>
					<FormTag>
						{/* 이름 */}
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
							{   password2InputHasError && (
								<ErrorTag>비밀번호가 서로 다릅니다.</ErrorTag>
							)}
						</InputWrapperTag>
						{/* 비밀번호 찾기 버튼 */}
						<ButtonTag
							color="white"
							bgColor="skyblue"
							onClick={editPasswordHandler}
							disabled={!formValid}
                            type="button"
						>
							변경
						</ButtonTag>
					</FormTag>
				</FormWrapperTag>
			</WrapperTag>
		</ContainerTag>
	);
};

export default NewPassword;
