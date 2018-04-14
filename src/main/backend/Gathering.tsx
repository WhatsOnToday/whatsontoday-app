import WhatsOnApi from "./api/WhatsOnApi";
import InternalDatabase from "./InternalDatabase";

export default class Gathering {

    static executeAsync(func) {
        setTimeout(func, 0);
    }

    database : InternalDatabase;
    api : WhatsOnApi;

    constructor(database,api) {
        this.database = database;
        this.api = api;
    }


    async tryLoginFromDatabaseToken() {
        if (this.database.isLoggedIn()) {
            //send loginRequest with token
        }
        return false;
    }


    getImageById(id,callback) : void{
        let image =  null;
        callback(image);

    }

    getEventsBySearch(searchString, location,category, from, to, amount,callback) : void {
        let events = [];
        callback(events);
    }

    getLocationBySearch() {

    }
    getAnswerForSearch() {

    }

    getEventById(id, callback) : void {
        let event = null;
        callback(event);
    }

    getEventLocation(locationID,callback) : void {
        let location = null;
        callback(locationID);
    }




}