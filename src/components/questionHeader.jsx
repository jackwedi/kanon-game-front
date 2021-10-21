import { Divider, Header, Message } from "semantic-ui-react";

function QuestionHeader(props) {
	const { description, questionId } = props;
	let content = description;
	if (description.description) {
		content = (
			<div>
				{description.description}
				<Message.List>
					{description.rules.map((rule) => (
						<Message.Item>{rule}</Message.Item>
					))}
				</Message.List>
			</div>
		);
	}

	return (
		<div>
			<Divider section />

			<Message color="blue" inverted>
				<Header inverted>Question {questionId}</Header>
				{content}
			</Message>
			<Divider section />
		</div>
	);
}

export default QuestionHeader;
