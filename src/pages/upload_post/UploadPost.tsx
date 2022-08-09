import React, { useRef, useState } from "react";
import styled from "styled-components";
import { ContainerTag, WrapperTag } from "../meeting/Meeting";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

interface State {
	category: string;
}

const UploadPost = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const formRef = useRef<HTMLFormElement>(null);
	const { category } = location.state as State;
	const [file, setFile] = useState();

	function handleChange(event: any) {
		event.preventDefault();
		const file = event.target.files[0];
	}
	const submitHandler = (event: React.ChangeEvent<HTMLFormElement>) => {
		console.log(formRef);
		event.preventDefault();
		Swal.fire({
			position: "center",
			icon: "question",
			title: "게시물을 작성 하시겟습니까?",
			// timer: 1500,
			confirmButtonText: "확인",
			confirmButtonColor: "skyblue",
			showCancelButton: true,
			cancelButtonText: "취소",
			cancelButtonColor: "red",
		}).then((result) => {
			if (result.isConfirmed) {
				console.log("HI");
			} else {
				Swal.close();
			}
		});
	};

	return (
		<ContainerTag>
			<WrapperTag>
				<PageHeaderTag>
					<h2>카테고리 - {category}</h2>
				</PageHeaderTag>
				<FormTag onSubmit={submitHandler} ref={formRef}>
					<InputWrapperTag>
						<div>
							<p>날씨</p>
						</div>
						<RadioWrapperTag>
							<label htmlFor="sun">
								<input
									type="radio"
									id="sun"
									name="weather"
									value="sun"
								/>
								<span>☀️</span>
							</label>

							<label htmlFor="sunBehindCloud">
								<input
									type="radio"
									id="sunBehindCloud"
									name="weather"
									value="sunBehindCloud"
								/>
								<span>⛅</span>
							</label>

							<label htmlFor="cloud">
								<input
									type="radio"
									id="cloud"
									name="weather"
									value="cloud"
								/>
								<span>☁️</span>
							</label>

							<label htmlFor="rain">
								<input
									type="radio"
									id="rain"
									name="weather"
									value="rain"
								/>
								<span>🌧️</span>
							</label>

							<label htmlFor="lightning">
								<input
									type="radio"
									id="lightning"
									name="weather"
									value="lightning"
								/>
								<span>🌩️</span>
							</label>

							<label htmlFor="none">
								<input
									type="radio"
									id="none"
									name="weather"
									value="none"
								/>
								<span>✖️</span>
							</label>
						</RadioWrapperTag>
					</InputWrapperTag>
					<InputWrapperTag>
						<label htmlFor="title">제목</label>
						<input
							type="text"
							id="title"
							placeholder="제목을 입력해주세요."
						/>
					</InputWrapperTag>
					<InputWrapperTag>
						<label htmlFor="content">내용</label>
						<textarea
							name="content"
							id="content"
							placeholder="내욜을 입력해주세요."
						></textarea>
					</InputWrapperTag>
					<InputWrapperTag>
						<label htmlFor="file">파일 선택</label>
						<input type="file" id="file" onChange={handleChange} />
					</InputWrapperTag>
					<ButtonWrapperTag>
						<button type="button" onClick={() => navigate(-1)}>
							취소
						</button>
						<button type="submit">저장</button>
					</ButtonWrapperTag>
				</FormTag>
			</WrapperTag>
		</ContainerTag>
	);
};

export default UploadPost;

const PageHeaderTag = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-start;
	h2 {
		font-size: 1.2rem;
		letter-spacing: 1.5px;
	}
`;

const FormTag = styled.form`
	display: flex;
	flex-direction: column;
	row-gap: 1.5em;
	p {
		font-size: 1.2rem;
	}
	label {
		font-size: 1.2rem;
	}
	input,
	textarea {
		width: 100%;
		flex: 2;
		padding: .5em;
		:focus{
			outline-color: skyblue;
		}
	}
	textarea {
		resize: none;
		height: 200px;
	}
`;

const InputWrapperTag = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 0.5em;

	@media screen and (min-width: 460px) {
		flex-direction: row;
	align-items: center;

		column-gap: 3.5em;
	}
`;

const ButtonWrapperTag = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	row-gap: 0.5em;

	button {
		padding: 0.5em 1em;
		color: white;
		border: none;
		border-radius: 5px;
		background-color: skyblue;
		width: 100%;
	}

	@media screen and (min-width: 420px) {
		flex-direction: row;
		column-gap: 1em;
		button{
			width: max-content;
		}
	}
`;

const RadioWrapperTag = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	flex: 2;
	height: 100%;
	justify-content: space-between;
	column-gap: 1em;
	label {
		position: relative;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		input {
			position: relative;
			z-index: 1;
			appearance: none;
			display:none
		}
		span {
			padding: 0.3em;
			top: 0;
			left: 0;
			background-color: white;
			border-radius: 5px;
			box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
			font-size: 1.1rem;
			width: 100%;
			height: 100%;
			@media screen and (min-width: 768px) {
				font-size: 1.25rem;
			}
			@media screen and (min-width: 1024px) {
				font-size: 1.5rem;
			}
		}
		input:checked ~ span {
			box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
		}
	}
`;

