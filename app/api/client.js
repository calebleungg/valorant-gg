import axios from 'axios'
import settings from "../config/settings";

const apiClient = axios.create({
	baseURL: settings.apiUrl,
});

export default apiClient;
