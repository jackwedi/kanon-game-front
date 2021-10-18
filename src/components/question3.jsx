import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Header, Input, Segment } from "semantic-ui-react";

function Question3() {
	const [searchLabel, setSearchLabel] = useState();
	const [allCountries, setCountries] = useState([]);
	const [filteredCountries, setFilteredCountries] = useState(allCountries);
	useEffect(async () => {
		const countriesResult = await axios.get(
			"https://restcountries.com/v3.1/all"
		);
		setCountries(countriesResult.data);
		setFilteredCountries(countriesResult.data);
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
			<Header inverted>Question 3</Header>
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
