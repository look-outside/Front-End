import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useInput from "../../hooks/use-input";
import { checkId } from "../../services/user";
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
	const navigate = useNavigate();

	const {
		value: enteredName,
		isValid: enteredNameIsValid,
		hasError: nameInputHasError,
		valueChangeHandler: nameChangedHandler,
		inputBlurHandler: nameBlurHandler,
		reset: resetNameInput,
	} = useInput((value) => value.trim() !== "" && value.length >= 2);

	const {
		value: enteredId,
		isValid: enteredIdIsValid,
		hasError: idInputHasError,
		valueChangeHandler: idChangedHandler,
		inputBlurHandler: idBlurHandler,
		reset: resetIdinput,
	} = useInput((value) => value.trim() !== "" && value.length >= 5);

	const findPasswordHandler = async (event:React.ChangeEvent<HTMLFormElement>) => {
		event.preventDefault()
		const res = await checkId(enteredId);
		if (res.data === true) {
			Swal.fire({
				position: "center",
				icon: "question",
				title: "비밀번호를 재설정 하시겠습니까?",
				confirmButtonText: "확인",
				confirmButtonColor: "skyblue",
				showCloseButton: true,
				cancelButtonText: "취소",
				cancelButtonColor: "red",
			}).then((result) => {
				if (result.isConfirmed) {
					navigate("/edit_password", { state: { useId: enteredId } });
				} else {
					navigate("/login");
				}
			});
		} else {
			Swal.fire({
				position: "center",
				icon: "error",
				title: "존재하지 않는 아이디 입니다.",
				confirmButtonText: "확인",
				confirmButtonColor: "skyblue",
			});
			resetNameInput();
			resetIdinput();
		}
	};
	let formValid = false;

	if (enteredNameIsValid && enteredIdIsValid) formValid = true;
	return (
		<ContainerTag>
			<WrapperTag>
				<h2>비밀번호 찾기</h2>
				<FormWrapperTag>
					<FormTag onSubmit={findPasswordHandler}>
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
							type="submit"
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
