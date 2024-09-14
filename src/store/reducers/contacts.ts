import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contact from '../../models/Contact'

type ContactsState = {
  items: Contact[]
}

const initialState: ContactsState = {
  items: [
    {
      id: 1,
      name: 'Bruno Campos',
      email: 'T9n9e@example.com',
      phone: '555-555-5555'
    },
    {
      id: 2,
      name: 'John Doe',
      email: 'T9n9e@example.com',
      phone: '555-555-5555'
    },
    {
      id: 3,
      name: 'Jane Doe',
      email: 'T9n9e@example.com',
      phone: '555-555-5555'
    },
    {
      id: 4,
      name: 'Jane Doe',
      email: 'T9n9e@example.com',
      phone: '555-555-5555'
    },
    {
      id: 5,
      name: 'Jane Doe',
      email: 'T9n9e@example.com',
      phone: '555-555-5555'
    }
  ]
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.items = [
        ...state.items.filter((contact) => contact.id !== action.payload)
      ]
    },
    edit: (state, action: PayloadAction<Contact>) => {
      const contactIndex = state.items.findIndex(
        (contact) => contact.id === action.payload.id
      )

      if (contactIndex >= 0) {
        state.items[contactIndex] = action.payload
      }
    }
  }
})

export const { remove, edit } = contactsSlice.actions
export default contactsSlice.reducer