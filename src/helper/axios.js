import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: process.env.VUE_APP_API_BASE_URL, 
    timeout:  60 * 5 * 1000,
})

axiosInstance.interceptors.request.use(
	config => {
        let token = localStorage.sentToServer
		if (token) {
			config.headers.Authorization = `key=key=AAAAemfdiWc:APA91bG4TwPimvHV02mxI8-BLsphHohm-0bSOFiG03wSVnyO_bda5gg9Yl1NrLUVnWtXtJz_MKbv_BW6qvUt6zmS3WuaFoxwVZw0d4wAviqMNKtZSQpbyDV49VU8b_jxV9xl5q78zHnr`
        }
		return config
	},
	error => {
		return Promise.reject(error)
	}
)

export {axiosInstance}