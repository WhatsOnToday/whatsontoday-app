import {axios} from "./AxiosWrapper";
import AccessDeniedError from "../ex/AccessDeniedError";
import {handleError} from "./WhatsOnApi";

const API_PATH = "/login";

/**
 * @param {string} email
 * @param {string} password
 * @param {boolean} rememberMe
 */
export const signIn = (email, password, rememberMe) => {
    return axios.post("/login/signIn", {
        email,
        password,
        rememberMe,
    }).then(response => {
        console.log("response",response);
        return response.data;
    }).catch(error => {
        handleError(error);
    });

};




export const signOut = () => {
    return axios.get(API_PATH + "/signOut")
        .then( response => {
            return response.data;
        });
};


export const getLoggedInUser = () => {
    return axios.get(API_PATH)
        .then( response => {
            return response.data;
        });
};

/**
 * 
 * @param {string} newPassword 
 */
export const updatePassword = newPassword => {
    return axios.put(API_PATH, {
        password: newPassword,
    }).then( response => {
            return response.data;
    });
};

/**
 * 
 * @param {string} email 
 */
export const resetPassword = email => {
    return axios.put(API_PATH + "/resetPassword", {
        email,
    }).then( response => {
            return response.data;
    });
};


export const deleteUser = () => {
    return axios.delete(API_PATH)
        .then( response => {
            return response.data;
        });
};
