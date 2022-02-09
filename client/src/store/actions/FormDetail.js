const formDetail = (detail) => {
    try {
        return detail;
    } catch (err) {
        throw err;
    }
};

export const FormDetail = (detail) => ({
    type: "FORM_DETAIL",
    payload: formDetail(detail),
});
