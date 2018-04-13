import {axios} from "./AxiosWrapper";
import {createEvent, toTimeStamp} from "../model/EventUtils";

/**
 * @typedef {{id:number,name:string,parentId:string}} categoryResponse
 *
 * @typedef {{id:number,name:string,loginFk: number}} OrganizerResponse
 *
 * @typedef {{id:number,name:string,latitude:number,longitude:number,
 * country:string,city: string,street:string}} LocationResponse
 *
 * @typedef {{id:number,tag:string}} ImageResponse
 *
 * @typedef {{id:number,name:string,avgRating:number,description:string,
 * shortDescription:string,from:Date,to:Date,categories:[categoryResponse],
 * location:LocationResponse,images:[ImageResponse],participantCount:number}} EventResponse
 */


/**
 * @readonly
 * @enum {boolean}
 */
export const SORTDIRECTION = {
    ASCENDING: true,
    DESCENDING: false
};

const API_PATH = "/events";

/**
 * @readonly
 * @enum {string}
 */
export const SORT = {
    ID: "id",
    NAME: "name",
    FROM: "from",
    TO: "to",
    RATING: "rating",
    LOCATION: "location",
};

/**
 * @param {number} category ID of the category your adding to the filter
 * @param {string} [search=""]
 * @param {SORTDIRECTION} [sortDirection]
 * @param {sort} [sort] sort criteria
 * @param {number} [xPage=0]
 * @param {number} [xPageSize=20]
 */
export const searchEvents = (category, search = "", sortDirection = true, sort = "id", xPage = 0, xPageSize = 20) => {
    // Query parameters for the AJAX request
    const queryParams = {
        search,
        sortDir: sortDirection,
        sort,
        category
    };
    if (category) // Appending a `category` parameter according if is set
        queryParams.category = category;


    return axios.get(API_PATH, {
        params: queryParams,
        headers: {
            "X-Page": xPage,
            "X-Page-Size": xPageSize
        },
    }).then(result => {
        return {
            eventList: result.data.map(eventResponse => createEvent(eventResponse)),
            // Total Number of defaultContainer items that was found with used filter configuration
            itemNumber: result.headers["x-number-items"],
        };
    });
};

/**
 * @param {number} id
 */
export const readEvent = id => {
    return axios.get(API_PATH + "/id")
        .then(response => {
            return createEvent(response.data);
        });
};

/**
 * @param {number} id
 */
export const participateToEvent = id => {
    return axios.get(API_PATH + "/participate/" + "id")
        .then(response => {
            return response.data;
        });
};

/**
 * @param {number} id
 */
export const unparticipateToEvent = id => {
    return axios.get(API_PATH + "/unparticipate/${id}")
        .then(response => {
            return response.data;
        });
};

/**
 *
 * @param {string} name
 * @param {string} description
 * @param {string} shortDescription
 * @param {number} locationId
 * @param {Date} from
 * @param {Date} to
 * @param {[{id: number, tag: (string|undefined)}]} images
 * @param categories
 * @param {[{id: number, name: string, parentId: number}]} images
 */
export const queryEvents = (name, description, shortDescription, locationId, from, to, images, categories) => {
    const location = locationId ? {
        id: locationId, name: "void", latitude: 0,
        longitude: 0, country: "void", city: "void", street: "void"
    } : undefined;
    const req = {
        name,
        description,
        shortDescription,
        location,
        from: toTimeStamp(from),
        to: toTimeStamp(to),
        images,
        categories: categories.map(id => ({
            id,
            name: "void",
            parentId: 1,
        })),
    };

    return axios.post(API_PATH, req)
        .then(response => {
            return response.data;
        });
};

/**
 * @param {number} id
 * @param {string} name
 * @param {string} description
 * @param {string} shortDescription
 * @param {number} locationId
 * @param {Date} from
 * @param {Date} to
 * @param {[{id: number, tag: (string|undefined)}]} images
 * @param {[number]} images
 */
export const updateEvent = (id, name, description, shortDescription, locationId, from, to, images, categories) => {
    const location = locationId ? {
        id: locationId, name: "void", latitude: 0,
        longitude: 0, country: "void", city: "void", street: "void"
    } : undefined;
    const req = {
        name,
        description,
        shortDescription,
        location,
        from: toTimeStamp(from),
        to: toTimeStamp(to),
        images,
        categories: categories.map(category_id => ({
            category_id,
            name: "void",
            parentId: 1,
        })),
    };

    return axios.put(API_PATH + "/id", req).then(response => {
        return response.data;
    });
};

/**
 * @param {number} id
 */
export const deleteEvent = id => {
    return axios.delete(API_PATH + "/id")
        .then(response => {
            return response.data;
        });
};

export const nearbyEvents = (id, xPage, xPageSize) => {
    return axios.get(API_PATH + "/nearby/${id}", {
        headers: {
            "X-Page": xPage,
            "X-Page-Size": xPageSize,
        },
    }).then(response => {
        return response.data;

    });
};
