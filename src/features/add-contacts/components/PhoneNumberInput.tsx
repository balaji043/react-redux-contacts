import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import {
	deletePhoneNumber,
	selectPhoneNumbers,
	updatePhoneNumberChange,
} from '../addContactSlice';

interface EmalInputProps {
	id: string;
	index: number;
}
const PhoneNumberInput: FC<EmalInputProps> = (props) => {
	const { id } = props;

	const phoneNumbers = useAppSelector(selectPhoneNumbers);
	const dispatch = useAppDispatch();

	return (
		<li>
			<input
				type='text'
				placeholder='title..'
				required={true}
				value={phoneNumbers[props.id]}
				onChange={(e) => {
					dispatch(updatePhoneNumberChange({ key: id, value: e.target.value }));
				}}
			/>
			{Object.keys(phoneNumbers).length > 1 && (
				<button
					onClick={(e) => {
						dispatch(deletePhoneNumber(id));
					}}
				>
					Delete
				</button>
			)}
		</li>
	);
};
export { PhoneNumberInput };
