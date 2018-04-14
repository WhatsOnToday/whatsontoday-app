import Gathering from "./Gathering";
import MultiLang from "./MultiLang";
import InternalDatabase from "./InternalDatabase";

export default class Context {


    private _gathering: Gathering = null;
    private _multilang: MultiLang = null;
    private _databse: InternalDatabase;

    constructor(gathering: Gathering, multilang: MultiLang) {
        this._gathering = gathering;
        this._multilang = multilang;
    }

    get gathering(): Gathering {
        return this._gathering;
    }

    public getString(id): string {
        return this._multilang.getStringById(id);
    }

    userIsOnline() : boolean {
        return null;
    }

}




