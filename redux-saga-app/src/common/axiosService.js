import Axios from "axios";

class AxiosService {

    constructor(){
        const instance = Axios.create();
        instance.interceptors.response.use(this.handleSucess,this.handleError)
        this.instance = instance;
    }

    handleSucess(res){
        return res;
    }

    handleError(e){
        return Promise.reject(e);
    }

    get(url){
        return this.instance.get(url);
    }

    post(url,body){
        return this.instance.post(url,body)
    }

}

export default new AxiosService();