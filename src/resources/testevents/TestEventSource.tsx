import ImageResource from "../../main/backend/model/ImageResource";
import Event from "../../main/backend/model/Event";
import IWhatsOnAPI from "../../main/backend/IWhatsOnAPI";

export default class TestEventSource implements IWhatsOnAPI {

    public login(mail: string, password: string) {
    }

    public getImage(id: string): ImageResource {
        return undefined;
    }

    public getEventsBySearch(searchString, location, category, from, to): string[] {
        return undefined;
    }

    public getEventById(id): Event {
        return undefined;
    }

    public getEventLocation(locationID): EventLocation {
        return undefined;
    }
}
