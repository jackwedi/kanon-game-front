import { useState } from "react";
import { Container, Input, Segment } from "semantic-ui-react";
import { QuestionHeader } from ".";

function RestAPIQuestion(props) {
	const { questionId, description, service } = props;

	const onConfirm = async () => {
		const serviceResponse = await service(dataSearch);
		setRequestResponse(serviceResponse ?? "NOT FOUND");
	};
	const [requestResponse, setRequestResponse] = useState();
	const [dataSearch, setSearchData] = useState();

	return (
		<div>
			<QuestionHeader
				questionId={questionId}
				description={description}
			></QuestionHeader>

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
