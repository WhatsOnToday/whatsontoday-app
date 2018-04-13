import {axios} from "./AxiosWrapper";

/**
 * @param {string} email
 * @param {string} password
 */
export const userSignUp =  (email, password, repeatedPassword, acceptedTerms) => {
    return axios.post("/user/signUp", {
        email,
        password,
        repeatedPassword,
        acceptedTerms,
    }).then(response => {
        return response.data;
    });
};