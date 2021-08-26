import React from 'react';
import { useAppSelector } from '../../app/hooks';
import ContactsAppBar from './components/ContactsAppBar';
import ContatctsGridView from './components/ContatctsGridView';
import ContatctsListView from './components/ContatctsListView';
import './Contacts.css';
import { selectContactsView, ContactsView } from './contactSlice';


function Contatcts() {

    return (
        <div className="Contatcts">
            <div className="SideNav">
                <div>Side Nav 1</div>
                <div>Side Nav 1</div>
                <div>Side Nav 1</div>
            </div>
            <div className="Content">
                <div className="Top">
                    <ContactsAppBar />
                </div>
                <div className="Center">
                    <ContactsCenter />
                </div>
            </div>
        </div>
    )
}

export default Contatcts


function ContactsCenter() {
    const contactsView = useAppSelector(selectContactsView);
    return contactsView === ContactsView.Grid
        ? <ContatctsGridView />
        : <ContatctsListView />
}