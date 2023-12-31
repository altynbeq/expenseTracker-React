export default(state, action) => {
    switch(action.type){
        case "DELETE_TRANSACTION":
            return(
                {
                    ...state,
                    transactions: state.transactions.filter(el => el.id != action.payload)
                }
            )
        case "NEW_TRANSACTION":
            return(
                {
                    ...state,
                    transactions: [ action.payload, ...state.transactions]
                }
            )
        default:
            return(state);
    }
}