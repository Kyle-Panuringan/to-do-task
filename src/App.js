import { useSelector } from "react-redux";
import ModalDelete from "./components/modalDelete/ModalDelete";
import TaskList from "./components/taskList/TaskList";
import TaskNavbar from "./components/taskNavbar/TaskNavbar";
import "./css/App.css";
function App() {
	const modalOpen = useSelector((store) => store.modal.modalOpen);
	return (
		<div className="App">
			{modalOpen && <ModalDelete />}
			<header>
				<h1>Task List</h1>
			</header>
			<main>
				<TaskNavbar />
				<TaskList />
			</main>
		</div>
	);
}

export default App;
