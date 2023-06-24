## banco-del-sol-challenge
## Description
This is a small piece of coding that resolve the problem proposed by the challenge. The same can be extended and improved.  

## Stack
- Webdriverio
- Cucumber
- Appium
- Javascript
- Android Studio

## How to run
- Clone the repository  
- Run **npm install**  
- Install Android Studio  
- Create a new device    
- Change the next capabilities on **wdio.conf.js** file:  
"appium:deviceName": "your_emulated_device",  
"appium:platformVersion": "your_emulated_device_android_version",  
Where **"your_emulated_device"** and **"your_emulated_device_android_version"**
should be the name and version of the device you created in Android studio.  
- Turn the device on.  
- Run **npm run wdio**


