import "./App.css";
import { Header } from "semantic-ui-react";
import { SlotMachine, RestAPIQuestion } from "./components";
import { getCountry, getCountries } from "./services/countries";
import Question3 from "./components/question3";

function App() {
	return (
		<div className="App">
			<div>
				<RestAPIQuestion service={getCountry} questionId={1} />
				<RestAPIQuestion service={getCountries} questionId={2} />
				<Question3 />

				<Header inverted>Question 4</Header>
				<SlotMachine></SlotMachine>
			</div>
		</div>
	);
}

export default App;
