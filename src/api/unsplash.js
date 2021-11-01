import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers:{
        Authorization: 'Client-ID WZtVIY_4_UxDEHNH9WHRhboYg_AKt8MihPSmVIyr2TU'
    }
});