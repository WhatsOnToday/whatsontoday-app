/**
 * @readonly
 * @enum {string}
 */
import {axios} from "./AxiosWrapper";


export const ENTITYTYPE = {
    EVENT: "Event",
    LOCATION: "Location",
    ORGANIZER: "Organizer",
};

/**
 * 
 * @param {number} id 
 * @param {ENTITYTYPE} entityType
 * @param {number} rate 
 */
export const rateEntity = (id, entityType, rate) => {
    return axios.get(`/rating/${id}/${entityType}/${rate}`)
        .then( response => {
        return response.data;
        });
};