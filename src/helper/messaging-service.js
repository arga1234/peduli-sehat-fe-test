export default class messagingService {

    constructor() {

        this.messaging = window.firebaseMessaging;
        this.messaging.usePublicVapidKey(
            process.env.VUE_APP_PUBLIC_VAPID_KEY
        );
    }

    async requestPermissionAsync() {
        try {
            await this.messaging.requestPermission();
            console.log('Notification permission granted.');
        } catch (e) {
            console.log('Unable to get permission to notify.', e);
        }
    }

    async getTokenAsync() {
            try {
                let currentToken = await this.messaging.getToken();
                console.log(currentToken)
                if (currentToken) {
                    console.log("Token generated successfully")
                    return currentToken;
                }
                else {
                    console.log('No Instance ID token available. Request permission to generate one.');
                    this.setTokenSentToServerFlg(false);
                    return false;
                }
            } catch (err) {
                console.log('An error occurred while retrieving token. ', err);
                this.setTokenSentToServerFlg(false);
                return false;
            }
    }

    isTokenSentToServer() {
            return window.localStorage.getItem('sentToServer') === '1';
    }

    setTokenSentToServerFlg(sent) {
            window.localStorage.setItem('sentToServer', sent ? '1' : '0');
    }

    async deleteTokenAsync() {
        try {
            let currentToken = await this.messaging.getToken();
            await this.messaging.deleteToken(currentToken);
            this.setTokenSentToServerFlg(false);
            console.log('Token deleted.');
        } catch (err) {
            console.log('Unable to delete token. ', err);
        }
    }

}