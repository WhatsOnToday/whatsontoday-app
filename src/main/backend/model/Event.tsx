import ImageResource from "./ImageResource";

export default class Event {

    public id: string;
    public name: string;
    public from: Date;
    public to: Date;
    public description: string;
    public shortDescription: string;
    public location: EventLocation;
    public image: ImageResource;
    public categories: string[] = [];

    constructor(id: string, name: string, from: Date, to: Date, description: string, shortDescription: string, location: EventLocation,  image: ImageResource) {
        this.id = id;
        this.name = name;
        this.from = from;
        this.to = to;
        this.description = description;
        this.shortDescription = shortDescription;
        this.location = location;
        this.image = image;
    }
}