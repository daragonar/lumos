import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Flashlight } from "@ionic-native/flashlight";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 listenData: any = null;
  constructor(public navCtrl: NavController, private flashlight: Flashlight, private speechRecognition: SpeechRecognition) {

  }

  encender()
  {
    this.speechRecognition.requestPermission()
    .then(
    () => {
      this.speechRecognition.startListening()
      .subscribe(
      (matches: Array<string>) => {
      this.listenData = matches[0];
      
      if (this.listenData == "Lumos") {
        this.flashlight.switchOn();
      }else if (this.listenData == "NOx") {
        this.flashlight.switchOff();
      }}
      ,
      (onerror) => console.log('error:', onerror)
      )
    },
    () => console.log('Denied')
    )

   
  }
}
