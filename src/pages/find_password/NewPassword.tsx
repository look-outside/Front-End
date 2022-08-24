import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useInput from "../../hooks/use-input";
import { updatePassword } from "../../services/user";
import {
	ButtonTag,
	ContainerTag,
	ErrorTag,
	FormTag,
	FormWrapperTag,
	InputWrapperTag,
	WrapperTag,
} from "../login/Login";

interface CustomizedState {
	useId: string;
}

const NewPassword = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const { useId } = location.state as CustomizedState;

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
	} = useInput(
		(value) =>
			value.trim() !== "" &&
			value.length >= 6 &&
			enteredPassword === value
	);

	const updatePasswordHandler = async (
		event: React.ChangeEvent<HTMLFormElement>
	) => {
		event.preventDefault();
		await updatePassword(useId, enteredPassword);
		Swal.fire({
			position: "center",
			icon: "success",
			title: "비밀번호가 변경 되었습니다.",
			confirmButtonText: "확인",
			confirmButtonColor: "skyblue",
		}).then(()=>navigate("/login"))
		
	};
	let formValid = false;

	if (enteredPasswordIsValid && enteredPassword2IsValid) formValid = true;
	return (
		<ContainerTag>
			<WrapperTag>
				<h2>비밀번호 재설정</h2>
				<FormWrapperTag>
					<FormTag onSubmit={updatePasswordHandler}>
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
							{password2InputHasError && (
								<ErrorTag>비밀번호가 서로 다릅니다.</ErrorTag>
							)}
						</InputWrapperTag>
						{/* 비밀번호 찾기 버튼 */}
						<ButtonTag
							color="white"
							bgColor="skyblue"
							disabled={!formValid}
							type="submit"
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
