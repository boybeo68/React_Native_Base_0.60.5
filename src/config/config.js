import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
export const Server = 'http://5b8febb1eb676700148a4dc6.mockapi.io/api/';
const ajax = axios.create({
  baseURL: Server,
});
// ajax.CancelToken = axios.CancelToken
// ajax.isCancel = axios.isCancel
// ajax.interceptors.request.use(
// 	async (config) => {
// 		let accessToken = await AsyncStorage.getItem('authtoken');
// 		let lang = await  AsyncStorage.getItem('lang');
// 		if (accessToken != null || lang != null) {
// 			config.headers.Authorization = `Bearer ${ accessToken }`;
// 			config.headers['Content-Language'] = lang;
// 		}
// 		return config;
// 	},
//
// 	(error) => {
// 		if (error.response.status === 400) {
// 			alert('Error 400');
// 		}
// 		if (error.response.status === 500) {
// 			alert('Server Error');
// 		}
// 		return Promise.reject(error.response);
// 	}
// );

export default ajax;
