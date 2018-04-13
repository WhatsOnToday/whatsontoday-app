class EventLocation {

    public address: Address;
    public name: string;
    public id: string;

    constructor(id: string, name: string, address: Address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
}