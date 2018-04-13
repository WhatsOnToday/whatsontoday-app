class Address {
    private lat: number;
    private long: number;
    private country: string;
    private city: string;
    private street: string;

    constructor(lat, long, country, city, street) {
        this.lat = lat;
        this.long = long;
        this.country = country;
        this.city = city;
        this.street = street;
    }
}