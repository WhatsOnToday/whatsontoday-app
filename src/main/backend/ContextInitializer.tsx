import InternalDatabase from "./InternalDatabase";
import MultiLang from "./MultiLang";
import Context from "./Context";
import WhatsOnApi from "./api/WhatsOnApi";
import Gathering from "./Gathering";

export default class ContextInit {
    public static async initialize() {
        const multilang = new MultiLang();
        const database = new InternalDatabase();
        const api = new WhatsOnApi();
        const gathering = new Gathering(database, api);

        database.initialize();

        return new Context(gathering, multilang);
    }
}

export let CONTEXT : Context = null;

export const setContext = function(ctx : Context) {
    CONTEXT = ctx;
};
