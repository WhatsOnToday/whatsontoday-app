import ImageResource from "./model/ImageResource";

export default class InternalDatabase {


    isLoggedIn() : boolean {
        return this.getXAuthToken()===null;
    }

    public getXAuthToken() : string{
        return null;
    }

    public getImageById(id) : ImageResource {
        let image = null;
        return image;
    }

    public getEventsBySearch(searchstring, location,category, from, to) : number[] {
        let events = [];
        return events;
    }

    public getEventById(id) : Event {
        let event = null;
        return event;
    }

    public getEventLocation(locationID) : EventLocation {
        let location = null;
        return location;
    }

}
