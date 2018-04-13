export const createEvent = function(properties) : Event {
    return null;
};

export const toTimeStamp = function(date : Date) : string {
    return date.getTime() + "" ;
};

export const toDate = function(timestamp : string) : Date {
    return new Date(timestamp);
};

