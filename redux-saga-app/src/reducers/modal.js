import * as ModalTypes from '../constaints/modal'

const initialState = {
    showModal: false,
    component: null,
    title: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ModalTypes.SHOW_MODAL:
            state.showModal = true
            return { ...state }
        case ModalTypes.HIDE_MODAL:
            state.showModal = false
            state.title = '';
            state.component = null;
            return { ...state }
        case ModalTypes.CHANGE_MODAL_TITLE:
            state.title = action.payload.title;
            return { ...state }
        case ModalTypes.CHANGE_MODAL_CONTENT:
            state.component = action.payload.component;
            return { ...state }
        default:
            return { ...state }
    }

}

export default reducer;