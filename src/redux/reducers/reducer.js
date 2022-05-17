let initialState={
    contactList: [],
    searchName: "",
};
const reducer = (state=initialState, action)=>{
    let {type, payload} = action
    console.log("reducer", state)
    switch (type){
        case "ADD_CONTACT":
            state.contactList.push({name:payload.name, phoneNumber:payload.phoneNumber});
            break;
        case "SEARCH_ITEM":
            return {...state, searchName: payload.searchName}
        default:
            return {...state};
    }
    return {...state};
}

export default reducer