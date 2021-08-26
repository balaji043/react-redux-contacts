import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import contactReducer from '../features/contacts/contactSlice';
import { addContactReducer } from '../features/add-contacts/addContactSlice';
export const store = configureStore({
	reducer: {
		counter: counterReducer,
		contact: contactReducer,
		addContact: addContactReducer
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
