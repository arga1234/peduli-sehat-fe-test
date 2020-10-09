# peduli-sehat-web-app

## Project setup
1. First thing first you need to prepare node js stable version 
2. Go to the root directory
3. Write this command
```
npm install
```

### Compiles and hot-reloads for development (run in development mode)
Simpply just write this command on the root folder :
```
npm run serve
```
open your browser and go to localhost:8080

### Compiles and minifies for production (run in production mode )
To run this project in production mode, which is mean that the project will bundled to the dist folder. First, you must gonna do this in root folder :
```
npm run build
```
After that, serve the dist folder using this command : 
```
npm install -g serve
serve -s dist
```
open your browser and go to localhost:8080

## foreground notification & background notification 
Foreground means that notification will appear on the app when the app is opened or active on the browser 
Background means that notification will appear as a web browser notification when the app is closed on the browser 

To make this happend you need to do this : 
1. Run the web app on dev mode or production mode 
2. Go to your browser and go to the localhost:8080
3, Allow notification if there is a pop up request 
4. For foreground notification you just need to wait it until the pray time comes or send a message via postman request 
5. for background notification you can copy close the web app, but you need to copy the fcm token in the console of this web app 
6. To open the console in windows you can do by CTRL + Shift + i or just right click and choose inspect element
7. make a request using postman based on this curl : 

```
POST /fcm/send HTTP/1.1
Host: fcm.googleapis.com
Content-Type: application/json
Authorization: key=AAAAemfdiWc:APA91bG4TwPimvHV02mxI8-BLsphHohm-0bSOFiG03wSVnyO_bda5gg9Yl1NrLUVnWtXtJz_MKbv_BW6qvUt6zmS3WuaFoxwVZw0d4wAviqMNKtZSQpbyDV49VU8b_jxV9xl5q78zHnr

{
  "notification": {
    "title": "Sudah masuk waktu Shalat",
    "body": "Solat dulu yuk",
    "click_action": "http://localhost:8080"
  },
  "registration_ids": ["Your FCM Token"]
}
```
8. Notice that in registration_ids field you need to paste your fcm token that you get from the console of the web app before
9. You can customize your message on notification object
10. hit the request button in postman 
11. If the web app still opening in web browser the notification will appear within it but if you close the web app from web browser the notification will appear as web browser notification 
