import axios from "axios"

export const tableApi = {
    getItems: () => {
        return axios.get('https://api.staging.inventory-platform.gq/items?limit=50').then(res => res.data.items)
    }
}