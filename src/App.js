import "./App.css";
import { Menu } from "semantic-ui-react";
import { SlotMachine, RestAPIQuestion, Question3 } from "./components";
import { getCountry, getCountries } from "./services/countries";
import { useState } from "react";
import * as texts from "./texts.json";

function App() {
	const [activeItem, setActiveItem] = useState("question1");
	const handleItemClick = (e, { name }) => setActiveItem(name);

	return (
		<div>
			<Menu attached="top" fluid tabular>
				{[1, 2, 3, 4].map((index) => (
					<Menu.Item
						name={`question${index}`}
						active={activeItem === `question${index}`}
						onClick={handleItemClick}
						key={index}
					/>
				))}
			</Menu>
			<div className="App">
				<div>
					{activeItem === "question1" && (
						<RestAPIQuestion
							service={getCountry}
							questionId={1}
							description={texts.question1}
						/>
					)}
					{activeItem === "question2" && (
						<RestAPIQuestion
							service={getCountries}
							questionId={2}
							description={texts.question2}
						/>
					)}
					{activeItem === "question3" && (
						<Question3
							description={texts.question3}
							questionId={3}
						/>
					)}
					{activeItem === "question4" && (
						<SlotMachine
							description={texts.question4}
							questionId={4}
						></SlotMachine>
					)}
				</div>
			</div>
		</div>
	);
}

export default App;
