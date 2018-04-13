import Axios from "axios";

export const axios = Axios.create({
    baseURL: "http://www.whats-on.today/api/v1", // Defined by the webpack definition plugin
    timeout: 1000
});

/**
 * Adds the token to the the `x-auth-token` header of the axios config
 * @param {string} token
 */
export const setToken = token => {
    axios.defaults.headers.common["x-auth-token"] = token;
};

/**
 * Removes the token from the the `x-auth-token` header of the axios config
 */
export const removeToken = () => {
    delete axios.defaults.headers.common["x-auth-token"];
};

