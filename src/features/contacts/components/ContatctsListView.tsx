import React from 'react'
import { AddContact } from '../../add-contacts/AddContact'
import { Counter } from '../../counter/Counter'

function ContatctsListView() {
    return (
        <div>
            <Counter />
            <AddContact />
        </div>
    )
}

export default ContatctsListView
