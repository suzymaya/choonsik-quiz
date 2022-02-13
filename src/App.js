import "./App.css";
import Home from "./Home";
import Quiz from "./Quiz";
import Score from "./Score";
import { Routes, Route } from "react-router-dom";
import {Wrapper} from "./elements";

function App() {
	return (
		<div className='App'>
			<Wrapper>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/quiz' element={<Quiz />} />
					<Route path='/result' element={<Score />} />
				</Routes>
			</Wrapper>
		</div>
	);
}

export default App;
