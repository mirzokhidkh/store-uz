import axios from "../axios/axios-store";

export default class StoreService {

    getResource = async (url) => {
        return await axios.get(`/products/${url}`)
            .catch((err) => {
                console.log(err.toJSON())
            });
    }

    getAllSmartphonesAndTablets = async () => {
            const response = await this.getResource('/Smartphones and Tablets.json')
            return this.getData(response);
    }


    getAllComputers = async () => {
        const response = await this.getResource('/Computers.json')
        return this.getData(response)
    }


    getAllBooks = async () => {
        const response = await this.getResource('/Books.json')
        return this.getData(response)
    }

    getData = (response) => {
        const data = [];
        Object.keys(response.data).forEach((key, index) => {
            data.push({
                id: key,
                ...response.data[key]
            })
        })
        return data;
    }
}

