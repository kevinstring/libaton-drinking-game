// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyCnRGZxa1jsp1W7fJ2rPZSxBbFzCD6xsq0",
    authDomain: "picolo2-ac489.firebaseapp.com",
    databaseURL: "https://picolo2-ac489-default-rtdb.firebaseio.com/",
    projectId: "picolo2-ac489",
    storageBucket: "picolo2-ac489.appspot.com",
    messagingSenderId: "491838298535",
    appId: "1:491838298535:web:a064cf8de460a02c023e82",
    measurementId: "G-YQH0WBVEP6"
  }
};
const app = initializeApp(environment.firebaseConfig);
const analytics = getAnalytics(app);

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
