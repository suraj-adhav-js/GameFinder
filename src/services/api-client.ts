import axios from "axios";

const apiClient = axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key: 'c49ce0c53bdd42cd96bd1b1c427f9f19'
    }
})

export default apiClient;