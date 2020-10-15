import * as ModalTypes from '../constaints/modal'

export const showModal = ()=>({
    type: ModalTypes.SHOW_MODAL,
})

export const hideModal = ()=>({
    type: ModalTypes.HIDE_MODAL,
})

export const changeModalTitle = (title)=>({
    type: ModalTypes.CHANGE_MODAL_TITLE,
    payload:{
        title
    }
})

export const changeModalContent = (component)=>({
    type: ModalTypes.CHANGE_MODAL_CONTENT,
    payload:{
        component
    }
})