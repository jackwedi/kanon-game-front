import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Input, Segment } from "semantic-ui-react";
import { QuestionHeader } from ".";

function Question3(props) {
	const { questionId, description } = props;

	const [searchLabel, setSearchLabel] = useState();
	const [allCountries, setCountries] = useState([]);
	const [filteredCountries, setFilteredCountries] = useState(allCountries);
	useEffect(() => {
		async function getAllCountries() {
			const countriesResult = await axios.get(
				"https://restcountries.com/v3.1/all"
			);
			setCountries(countriesResult.data);
			setFilteredCountries(countriesResult.data);
		}
		getAllCountries();
	}, []);

	const confirm = () => {
		setFilteredCountries(
			allCountries.filter((country) =>
				country.name.common
					.toLowerCase()
					.includes(searchLabel.toLowerCase())
			)
		);
	};
	return (
		<div>
			<QuestionHeader
				questionId={questionId}
				description={description}
			></QuestionHeader>
			<Input
				placeholder="Search..."
				onChange={(e, data) => {
					setSearchLabel(data.value);
				}}
				action={{
					icon: "search",
					onClick: (e, data) => confirm(),
				}}
			/>
			<Segment>
				<Container text>
					{filteredCountries.reduce(
						(acc, country, index, target) =>
							`${acc} ${country.name.common} ${
								index === target.length - 1 ? "" : " |"
							}`,
						""
					)}
				</Container>
			</Segment>
		</div>
	);
}

export default Question3;
