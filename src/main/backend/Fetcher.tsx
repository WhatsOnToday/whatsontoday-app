export default class Fetcher {
    _defaultPath: string;
    _headerMap: { [key: string]: string; } = {
        "Content-Type": "application/json",
        "Accept": "application/json",
    };

    constructor(defaultPath: string) {
        this._defaultPath = defaultPath;
    }

    setHeaderValue(key, value) {
        this._headerMap[key] = value;
    }

    removeHeaderValue(key) {
        this._headerMap[key] = undefined;
    }

    public async post(relativePath, body): Promise<any> {
        return await this.doFetch(relativePath, "POST", body);
    }

    public async delete(relativePath, body): Promise<any> {
        return await this.doFetch(relativePath, "DELETE", body);
    }

    public async put(relativePath, body): Promise<any> {
        return await this.doFetch(relativePath, "PUT", body);
    }

    public async get(relativePath): Promise<any> {
        return await this.doFetch(relativePath, "GET", null);
    }


    public async doFetch(relativePath, method, body): Promise<any> {

        let requestPath = this._defaultPath + relativePath;
        console.log("Request-Path=" + requestPath);
        console.log("Method=" + method);
        console.log("Header=");
        console.log(this._headerMap);

        if (body) {
            console.log("Body=");
            console.log(body);
        }

        let requestData = {
            method: method,
            headers: this._headerMap,
            body: JSON.stringify(body),
        };

        return await fetch(requestPath, requestData)
            .then((response) => {
                console.log("Good-Answer=");
                console.log(response);
                return response.json();
            })
            .catch((error) => {
                console.log("Bad-Answer=");
                console.log(error);
                return undefined;
            });


    }
}
