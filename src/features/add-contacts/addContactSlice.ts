import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface PhoneNumber {
	[x: string]: string;
}
interface IAddContactState {
	name: string;
	phoneNumbers: PhoneNumber;
	lastPhoneNumberId: string;
}
const id = uuidv4();
const phoneNumber: PhoneNumber = {};
phoneNumber[id] = '';

const initialState: IAddContactState = {
	name: '',
	phoneNumbers: phoneNumber,
	lastPhoneNumberId: id,
};

interface UpdatePhoneNumberPayload {
	value: string;
	key: string;
}
export const addContactSlice = createSlice({
	name: 'addContactView',
	initialState,
	reducers: {
		updatePhoneNumberChange: (
			state,
			action: PayloadAction<UpdatePhoneNumberPayload>
		) => {
			const { key, value } = action.payload;
			state.phoneNumbers[key] = value;
			const keys = Object.keys(state.phoneNumbers);
			const s = keys[keys.length - 1];
			console.log({ s, key, keys });
			if (
				s === key &&
				value !== '' &&
				Object.keys(state.phoneNumbers).length !== 7
			) {
				const id = uuidv4();
				state.phoneNumbers[id] = '';
				state.lastPhoneNumberId = id;
			}
		},
		deletePhoneNumber: (state, action: PayloadAction<string>) => {
			delete state.phoneNumbers[action.payload];
		},
	},
});
const addContactReducer = addContactSlice.reducer;
export const selectPhoneNumbers = (state: RootState) =>
	state.addContact.phoneNumbers;

export { addContactReducer };
export type { IAddContactState };
export const { deletePhoneNumber, updatePhoneNumberChange } =
	addContactSlice.actions;

function uuidv4() {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
		var r = (Math.random() * 16) | 0,
			v = c === 'x' ? r : (r & 0x3) | 0x8;
		return v.toString(16);
	});
}
