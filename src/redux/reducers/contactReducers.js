const initialState = [
    {
        "id" : 0,
        "name" : "Apel Mahmud",
        "email": "apel@gmail.com",
        "number" : 354534545345
    },

    {
        "id" : 1,
        "name" : "Asha Mahmud",
        "email": "asha@gmail.com", 
        "number" : 34535454654
    }
]


const contactReducers = (state = initialState, action) => {
     switch (action.type) {
         
        case "ADD_CONTACT":
           state = [...state, action.payload];
           return state;
        case "UPDATE_CONTACT": 
           const updateState = state.map((contact) => contact.id === action.payload.id ? action.payload : contact);
           state = updateState;
           return state;
        
        case "DELETE_CONTACT":
            const filteredContact = state.filter((contact) => contact.id !== action.payload && contact);
            state = filteredContact;
            return state;
        default: 
        return state;
     }
};

export default contactReducers;