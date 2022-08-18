import React, { useRef } from "react";
import styled from "styled-components";
import { ContainerTag, WrapperTag } from "../meeting/Meeting";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import WritePost from "../../components/write_post/WritePost";
import SelectRezion from "../../components/select_region/SelectRegion";

interface State {
	category: string;
}

const UploadPost = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const formRef = useRef<HTMLFormElement>(null);
	const { category } = location.state as State;

	const getRegionNumber = (region:string) => {
		console.log(region)
	}

	const submitHandler = (event: React.ChangeEvent<HTMLFormElement>) => {
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
				navigate(-1);
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
				<SelectRezion onGetRegionNumber={getRegionNumber}/>
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
								<div>
									<abbr title="맑음">☀️</abbr>
									<span>맑음</span>
								</div>
							</label>

							<label htmlFor="sunBehindCloud">
								<input
									type="radio"
									id="sunBehindCloud"
									name="weather"
									value="sunBehindCloud"
								/>
								<div>
									<abbr title="구름 많음">⛅</abbr>
									<span>구름 많음</span>
								</div>
							</label>

							<label htmlFor="cloud">
								<input
									type="radio"
									id="cloud"
									name="weather"
									value="cloud"
								/>
								<div>
									<abbr title="흐림">☁️</abbr>
									<span>흐림</span>
								</div>
							</label>

							<label htmlFor="rain">
								<input
									type="radio"
									id="rain"
									name="weather"
									value="rain"
								/>
								<div>
									<abbr title="비">🌧️</abbr>
									<span>비</span>
								</div>
							</label>

							<label htmlFor="lightning">
								<input
									type="radio"
									id="lightning"
									name="weather"
									value="lightning"
								/>
								<div>
									<abbr title="번개">🌩️</abbr>
									<span>번개</span>
								</div>
							</label>

							<label htmlFor="none">
								<input
									type="radio"
									id="none"
									name="weather"
									value="none"
								/>
								<div>
									<abbr title="선택 안함">✖️</abbr>
									<span>선택 안함</span>
								</div>
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
					<WritePost />
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
	width: 100%;
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
		padding: 0.5em;
		:focus {
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

		column-gap: 2em;
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
		cursor: pointer;
	}

	@media screen and (min-width: 420px) {
		flex-direction: row;
		column-gap: 1em;
		button {
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
	column-gap: 0.5em;
	min-width: min-content;
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
			display: none;
		}
		div {
			display: flex;
			align-items: center;
			justify-content: center;
			column-gap: 0.5em;
			padding: 0.3em;
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
			abbr {
				text-decoration: none;
			}
			span {
				font-size: 0.5rem;
				@media screen and (max-width: 600px) {
					display: none;
				}
				@media screen and (min-width: 820px) {
					font-size: 0.75rem;
				}
				@media screen and (min-width: 1024px) {
					font-size: 1rem;
				}
			}
		}
		input:checked ~ div {
			transition: all 0.5s;
			box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
			background-color: skyblue;
			color: white;
		}
	}
`;
