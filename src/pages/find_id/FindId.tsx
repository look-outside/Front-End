import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useInput from "../../hooks/use-input";
import { findId } from "../../services/user";
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
	const navigate = useNavigate()
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

	const findIdHandler = async(event:React.ChangeEvent<HTMLFormElement>) => {
		event.preventDefault()
		const res = await findId(enteredEmail)
		if(res.data.status === 200){
			Swal.fire(
				{
					position: 'center',
					title:'유저 정보',
					html: 
					`<p>아이디 : ${res.data.data}</p>`,
					confirmButtonText: "확인",
					confirmButtonColor: "skyblue"
				}
			).then(()=>navigate('/login'))
		}else{
			Swal.fire(
				{
					position: 'center',
					title:'유저 정보',
					html: 
					`${res.data.data}`,
					confirmButtonText: "확인",
					confirmButtonColor: "skyblue"
				}
			)
		}
	};

	let formValid = false;

	if (enteredNameIsValid && enteredEmailIsValid) formValid = true;
	return (
		<ContainerTag>
			<WrapperTag>
				<h2>아이디 찾기</h2>
				<FormWrapperTag>
					<FormTag onSubmit={findIdHandler}>
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
							type="submit"
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
