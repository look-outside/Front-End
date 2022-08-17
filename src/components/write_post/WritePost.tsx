import React, { useRef } from "react";

import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";

// color
import "tui-color-picker/dist/tui-color-picker.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";

import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import styled from "styled-components";

const WritePost = () => {
	const editRef = useRef<Editor>(null);
	const onChangeHandler = () => {
		// console.log(editRef.current?.getInstance().getHTML());
	};

	const onUploadImage = async (blob: any, callback: any) => {
		console.log(blob);
		// 사진 업로드 후에 압푹된 url 를 받아온다.
		// const url = await
		// callback(url, 이미지 alt )
	};

	const plugins = [colorSyntax];
	// code , codeblock, table 제외 , link 는 wysiwyg에서 에러 보류
	const toolbarItems = [
		["heading", "bold", "italic", "strike"],
		["hr", "quote"],
		["ul", "ol", "task", "indent", "outdent"],
		["image"],
	];
	return (
		<EditorWrapperTag>
			<Editor
				ref={editRef}
				placeholder="내용을 입력해주세요."
				initialValue=" "
				previewStyle="vertical"
				height="400px"
				initialEditType="wysiwyg"
				useCommandShortcut={true}
				onChange={onChangeHandler}
				plugins={plugins}
				toolbarItems={toolbarItems}
				hooks={{
					addImageBlobHook: onUploadImage,
				}}
			/>
		</EditorWrapperTag>
	);
};

export default WritePost;

const EditorWrapperTag = styled.div`
	display: flex;
	flex-direction: column;
`;
