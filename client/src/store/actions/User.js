export const userId = "Guest";

const login = (userin) => {
    try {
        return userin;
    } catch (err) {
        throw err;
    }
};

export const LogIn = (userin) => ({
    type: "GET_USER",
    payload: login(userin),
});

const register = (user) => {
    try {
        return user;
    } catch (err) {
        throw err;
    }
};

export const RegisterUser = (user) => ({
    type: "REGISTER_USER",
    payload: register(user),
});
