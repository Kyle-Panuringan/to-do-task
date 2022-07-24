import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../css/modalDelete.css";
import { modalOpen } from "../../features/modal/modalSlice";
import { deleteTask } from "../../features/task/taskSlice";

const ModalDelete = () => {
	const dispatch = useDispatch();
	const id = useSelector((store) => store.modal.id);

	const handleCloseModal = () => {
		dispatch(modalOpen());
	};

	const handleDelete = () => {
		dispatch(deleteTask(id));
		dispatch(modalOpen());
	};

	return (
		<aside>
			<div className="modal">
				<div className="modal-overlay" onClick={handleCloseModal}></div>
				<div className="modal-container">
					<button
						className="modal-container-close"
						onClick={handleCloseModal}
					>
						X
					</button>
					<h2>Delete Task</h2>
					<p>Are you sure you want to delete?</p>
					<div className="modal-container-buttons">
						<button onClick={handleDelete}>Delete</button>
						<button onClick={handleCloseModal}>Cancel</button>
					</div>
				</div>
			</div>
		</aside>
	);
};

export default ModalDelete;
