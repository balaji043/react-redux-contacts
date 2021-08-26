import { FC } from 'react';
import { useAppSelector } from '../../app/hooks';
import { selectPhoneNumbers } from './addContactSlice';
import { PhoneNumberInput } from './components/PhoneNumberInput';

const AddContact: FC = () => {
	const phoneNumbers = useAppSelector(selectPhoneNumbers);

	return (
		<ul>
			{Object.keys(phoneNumbers).map((value, index) => {
				return <PhoneNumberInput key={value} id={value} index={index} />;
			})}
		</ul>
	);
};

export { AddContact };
