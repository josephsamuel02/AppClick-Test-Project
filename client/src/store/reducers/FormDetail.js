export const FormDetail = (state = [], action) => {
    switch (action.type) {
        case "FORM_DETAIL":
            return action.payload;

        default:
            return state;
    }
};
