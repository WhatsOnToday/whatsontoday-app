import {axios} from "./AxiosWrapper";

export const imageBasePath = "/images";

/**
 * @readonly
 * @enum {string}
 */
export const ENTITYTYPE = {
    EVENT: "Event",
    LOCATION: "Location",
    ORGANIZER: "Organizer",
};

/**
 * @param {File} file
 * @param {string} copyright
 */
export const uploadImage = (file, copyright) => {
    const data = new FormData();
    data.set("image", file);
    if(copyright)
        data.set("copyright", copyright);
    data.set("data",JSON.stringify({
        name: name,
    }));

    return axios.post(imageBasePath, data)
        .then( response => {
            return response.data;
        });
};

/**
 * 
 * @param {number} id 
 */
export const readImageData = id => {
    return axios.get(`${imageBasePath}/${id}`)
        .then( response => {
            return response.data;
        });
};

/**
 * @param {ENTITYTYPE} entityType
 * @param {number} entityId
 * @param {string} tag
 */
export const attachImage = (entityType, entityId, tag) => {
    // Query parameters for the AJAX request
    const queryParams = {
        entityType,
        entityId,
        tag
    };
    if(tag) // Appending a `tag` parameter according if is set
        queryParams.tag = tag;

    return axios.get(`${imageBasePath}/attach`, {
        params: queryParams,
    }).then(response => {
            return response.data;
    });
};
