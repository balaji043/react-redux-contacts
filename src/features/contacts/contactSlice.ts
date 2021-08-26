import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export enum ContactsView {
	List = 'List',
	Grid = 'Grid',
}

interface IContactState {
	contactsView: ContactsView;
}
const initialState: IContactState = {
	contactsView: ContactsView.List,
};
export const contactSlice = createSlice({
	name: 'contactView',
	initialState,
	reducers: {
		changeView: (state, action: PayloadAction<ContactsView>) => {
			state.contactsView = action.payload;
		},
	},
});

export const { changeView } = contactSlice.actions;

export const selectContactsView = (state: RootState) =>
	state.contact.contactsView;

export default contactSlice.reducer;
