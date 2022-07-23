import TaskList from "./components/taskList/TaskList";
import TaskNavbar from "./components/taskNavbar/TaskNavbar";
import "./css/App.css";

function App() {
	return (
		<div className="App">
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
