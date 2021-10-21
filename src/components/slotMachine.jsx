import { useEffect, useState } from "react";
import { Button, Table, Segment, Header } from "semantic-ui-react";
import { initSlotMachine, spin } from "../services/slotMachines";

const SlotMachine = () => {
	const [slotState, setSlotState] = useState({
		reels: [],
		winnings: [],
		purse: 0,
	});
	useEffect(async () => {
		const { reels, purse } = await initSlotMachine();
		setSlotState({ reels, purse });
	}, []);

	const getRows = (reels) => {
		return reels.reduce(
			(prev, next) =>
				next.map((item, i) => (prev[i] || []).concat(next[i])),
			[]
		);
	};

	const onSpin = async () => {
		const { reels, winnings, purse } = await spin();
		setSlotState({ reels, winnings, purse });
	};
	return (
		<div>
			<Table celled textAlign="center">
				<Table.Header>
					<Table.Row>
						{slotState.reels.map((reel, index) => (
							<Table.HeaderCell key={`head${index}`}>
								Reel {index}
							</Table.HeaderCell>
						))}
					</Table.Row>
				</Table.Header>

				<Table.Body>
					{getRows(slotState.reels).map((row, index) => {
						const winnings =
							slotState.winnings?.winningsDescription;

						const columns = row.map((cell, cellIndex) => {
							const winning = winnings?.find((winning) => {
								return (
									winning.rowIndex === index &&
									winning.symbol === cell
								);
							});

							return winning ? (
								<Table.Cell
									key={`cell${(index + 1) * cellIndex}`}
									active
								>
									{cell}
								</Table.Cell>
							) : (
								<Table.Cell
									key={`cell${(index + 1) * cellIndex}`}
								>
									{cell}
								</Table.Cell>
							);
						});

						return <Table.Row key={index}>{columns}</Table.Row>;
					})}
				</Table.Body>
			</Table>
			<Segment>
				<Header>
					Won Amount: ${slotState.winnings?.wonAmount ?? 0}
				</Header>
				<Header>Purse: ${slotState?.purse ?? 0}</Header>
			</Segment>
			<Button onClick={onSpin} disabled={slotState.purse === 0}>
				SPIN
			</Button>
		</div>
	);
};

export default SlotMachine;
