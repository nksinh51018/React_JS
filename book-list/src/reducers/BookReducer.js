export const bookReducer = (state, action) => {
    switch (action.type) {

        case 'ADD_BOOK':
            state.push(action.book);
            return [...state]

        case 'REMOVE_BOOK':
            state = state.filter(book => book.id === action.id ? false : true)
            return [...state]

        default:
            return [...state]
    }
}