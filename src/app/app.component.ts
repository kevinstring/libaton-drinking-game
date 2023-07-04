import { Component, OnInit } from '@angular/core';
import {ScreenOrientationOriginal,ScreenOrientation} from '@ionic-native/screen-orientation'
import { AndroidFullScreen } from '@awesome-cordova-plugins/android-full-screen';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Libaton';
  ngOnInit(): void {
    AndroidFullScreen.isImmersiveModeSupported().then(()=>AndroidFullScreen.immersiveMode()).catch(console.warn)

  
  }
  
}
