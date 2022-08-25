import React, { useEffect, useRef, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import styled from "styled-components";

interface Props {
    onDelete : ()=>void
    onEdit?: ()=>void
}

const EditModal = ({onDelete, onEdit}:Props) => {
	const [openEdit, setOpenEdit] = useState<boolean>(false);
    const editRef = useRef<any>(null);

    // ref 설정 외부 클릭 감지 , 공통부분 
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				editRef.current &&
				!editRef.current.contains(event.target as Node)
			) {
				setOpenEdit(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () =>
			document.removeEventListener("mousedown", handleClickOutside);
	});

	return (
		<EditTag ref={editRef}>
			<BsThreeDotsVertical onClick={() => setOpenEdit((pre) => !pre)} />
			{openEdit && (
				<div className="edit_modal">
					<ul>
						<li id="delete" onClick={onDelete}>
							삭제
						</li>
						<li
							id="edit"
							onClick={() => {
								setOpenEdit(false);
								onEdit();
							}}
						>
							수정
						</li>
					</ul>
				</div>
			)}
		</EditTag>
	);
};

export default EditModal;

const EditTag = styled.div`
	position: relative;
	svg {
		cursor: pointer;
	}

	.edit_modal {
		position: absolute;
		top: 30px;
		left: -30px;
		width: max-content;
		display: flex;
		box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
			rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
		padding: 1em 0;
		background-color: white;
		border-radius: 5px;
		font-size: 1rem;
		ul {
			li {
				padding: 0.5em 1.5em;
				cursor: pointer;
				:hover {
					background-color: skyblue;
				}
			}
		}
		#delete {
			color: red;
		}
		#edit {
			:hover {
				color: white;
			}
		}
	}
`;