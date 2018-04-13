

/**
 * @typedef {{id:number,
 * name:string,
 * latitude:number,
 * longitude:number,
 * country:string,
 * city: string,
 * street:string,
 * website:string,
 * comment:string}}
 * LocationResult
 */


import {axios} from "./AxiosWrapper";

/**
 * 
 * @param {string} search 
 * @param {number} [xPage=0]
 * @param {number} [xPageSize=20]
 * @returns {Promise<[LocationResult]>}
 */
export const getLocations = (search, xPage = 0, xPageSize = 20) => {
    return axios.get("/location",{
        params: {
            search,
        },
        headers: {
            "X-Page": xPage,
            "X-Page-Size": xPageSize,
        },
    }).then( response => {
            return response.data;
    });
};

/**
 * 
 * @param {number} id 
 */
export const readLocation = id => {
    return axios.get(`/location/${id}`)
        .then( response => {
            return response.data;
        });
};

/**
 * 
 * @param {number} id 
 * @param {number} xPage 
 * @param {number} xPageSize 
 */
export const getNearbyLocations = (id, xPage = 0, xPageSize = 20) => {
    return axios.get(`location/nearby/${id}`, {
        headers: {
            "X-Page": xPage,
            "X-Page-Size": xPageSize,
        },
    })
        .then( response => {
            return response.data;
        });
};

/**
 * 
 * @param {string} name 
 * @param {string} country
 * @param {string} city 
 * @param {string} street 
 * @returns {Promise<LocationResult>}
 */
export const createLocation = (name, country, city, street, website, comment) => {
    return axios.post("/location", {
        name,
        latitude: 0,
        longitude: 0,
        country,
        city,
        street,
        website,
        comment,
      }).then( response => {
            return response.data;
      });
};