import "./App.css";
import { Divider, Menu } from "semantic-ui-react";
import { SlotMachine, RestAPIQuestion } from "./components";
import { getCountry, getCountries } from "./services/countries";
import Question3 from "./components/question3";
import { useState } from "react";

function App() {
	const [activeItem, setActiveItem] = useState("question1");
	const handleItemClick = (e, { name }) => setActiveItem(name);

	return (
		<div className="App">
			<div>
				<Menu>
					{[1, 2, 3, 4].map((index) => (
						<Menu.Item
							name={`question${index}`}
							active={activeItem === `question${index}`}
							onClick={handleItemClick}
						/>
					))}
				</Menu>
				<Divider />
				{activeItem === "question1" && (
					<RestAPIQuestion service={getCountry} questionId={1} />
				)}
				{activeItem === "question2" && (
					<RestAPIQuestion service={getCountries} questionId={2} />
				)}
				{activeItem === "question3" && <Question3 />}
				{activeItem === "question4" && <SlotMachine></SlotMachine>}
				<Divider />
			</div>
		</div>
	);
}

export default App;
