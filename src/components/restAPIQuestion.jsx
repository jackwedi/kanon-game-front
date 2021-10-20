import { useState } from "react";
import { Container, Header, Input, Segment } from "semantic-ui-react";

function RestAPIQuestion(props) {
	const { questionId, service } = props;

	const onConfirm = async () => {
		const serviceResponse = await service(dataSearch);
		setRequestResponse(serviceResponse ?? "NOT FOUND");
	};
	const [requestResponse, setRequestResponse] = useState();
	const [dataSearch, setSearchData] = useState();

	return (
		<div>
			<Header inverted>Question {questionId}</Header>
			<Input
				placeholder="Search..."
				onChange={(e, data) => {
					setSearchData(data.value);
				}}
				action={{
					icon: "search",
					onClick: (e, data) => onConfirm(),
				}}
			/>
			<Segment>
				<Container text>
					{JSON.stringify(requestResponse, null, 2)}
				</Container>
			</Segment>
		</div>
	);
}

export default RestAPIQuestion;
