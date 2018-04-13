import AccessDeniedError from "../ex/AccessDeniedError";
import UnknownServerError from "../ex/UnknownServerError";

export default class WhatsOnApi {




}

export const handleError = function(error) {
    if (error.response) {
        switch (error.response.statusCode) {
            case 401:
                throw new AccessDeniedError("unauthorized");
        }
    }
    throw new UnknownServerError();
};

