import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { changeView, ContactsView, selectContactsView } from '../contactSlice';

const buttonActive = { backgroundColor: 'cornflowerblue' };
function ContactsAppBar() {

    return (
        <div>
            <ContactViewButton view={ContactsView.Grid} />
            <ContactViewButton view={ContactsView.List} />
        </div>
    );
}

export default ContactsAppBar;

function ContactViewButton(props: { view: ContactsView }) {
    const { view } = props;
    const contactsView = useAppSelector(selectContactsView);
    const dispatch = useAppDispatch();

    const applyButttonActive = () =>
        contactsView === view ? buttonActive : {};

    return <button
        style={applyButttonActive()}
        onClick={() => dispatch(changeView(view))}>{view}</button>
}