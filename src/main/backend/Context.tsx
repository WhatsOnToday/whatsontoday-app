import Gathering from "./Gathering";
import MultiLang from "./MultiLang";

export default class Context {


    private _userLoggedIn = false;

    private _gathering: Gathering = null;
    private _multilang: MultiLang = null;

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

    get userLoggedIn(): boolean {
        return this._userLoggedIn;
    }

    set userLoggedIn(value: boolean) {
        this._userLoggedIn = value;
    }

}




