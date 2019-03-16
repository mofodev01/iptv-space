import { Component , ViewChild} from '@angular/core';
import { NavController, AlertController,LoadingController} from 'ionic-angular';
import { HttpClient,HttpHeaders  } from '@angular/common/http';


import { Geolocation } from '@ionic-native/geolocation';

import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder';
import { Device } from '@ionic-native/device';

import {  
  FileTransfer,  
  FileTransferObject  
} from '@ionic-native/file-transfer';  
import {  
  File  
} from '@ionic-native/file';
import * as dl from 'cordova-plugin-android-downloadmanager';
//const fileTransfer: FileTransferObject = this.transfer.create();
//--------------------------------------
interface deviceInterface {
  id?: string,
  model?: string,
  cordova?: string,
  platform?: string,
  version?: string,
  manufacturer?: string,
  serial?: string,
  isVirtual?: boolean,
 
};
//--------------------------------------

@Component({
  selector: 'page-filter',
  templateUrl: 'filter.html'
})

export class FilterPage {
  
  responseObj:any;
  watchLocationUpdates:any; 
  loading:any;
  isWatching:boolean;
  @ViewChild("downloadx") downloadx;
  //Geocoder configuration
  geoencoderOptions: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
  };

  
  
  public deviceInfo: deviceInterface = {};

  private fileTransfer: FileTransferObject;
 
  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder,
    private device: Device,
    private transfer: FileTransfer, private file: File
    , public alertCtrl: AlertController
    ,  private http: HttpClient
    ) {

 
      //Custome object to save information returned
      this.responseObj = {
        latitude:0,
        longitude:0,
        accuracy:0,
        address:""
      };
  }
  download_mang(){
//https://github.com/emilbayes/cordova-plugin-android-downloadmanager
//https://forum.ionicframework.com/t/how-to-download-file-natively/114329/14
    //----------------------------------------------------------
    let req = {
      uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      title: 'testvideo',
      description: 'a test file',
      mimeType: 'video/mp4',
    
      visibleInDownloadsUi: true,
      notificationVisibility: 0,
    
      // Either of the next three properties
      destinationInExternalFilesDir: {
        dirType: this.file.externalRootDirectory + '/Download/',
        subPath: ''
      }
    };
      console.log(dl);
      let dl2= dl.__proto__;
      console.log(dl2);
        dl2.enqueue(req, console.info);
//----------------------------------------------------------

  }

  download(){
   //https://stackoverflow.com/questions/49444991/ionic-3-download-a-file-to-directory
    const fileTransfer: FileTransferObject = this.transfer.create();
    const url = "http://cdna.allaboutvision.com/i/conditions-2016/heterochromia-kate-bosworth-660x660-with-credit.jpg";
    
    fileTransfer.download(url, this.file.dataDirectory + '/Download/' + 'laska.jpg', true).then((entry) => {
    
      const alertSuccess = this.alertCtrl.create({
        title: `Download Succeeded!`,
        subTitle: `was successfully downloaded to: ${entry.toURL()}`,
        buttons: ['Ok']
      });
      alertSuccess.present();
    
    }, (error) => {
    
      const alertFailure = this.alertCtrl.create({
        title: `Download Failed!`,
        subTitle: `was not successfully downloaded. Error code: ${error.code}`,
        buttons: ['Ok']
      });
      alertFailure.present();
    });
    }
/*
  download() {
  
const fileTransfer: FileTransferObject = this.transfer.create();

  const url = 'http://live.iptvmedia.me/image/icon.png';
  fileTransfer.download(url, this.file.dataDirectory + 'icon.png').then((entry) => {
    console.log('download complete: ' + entry.toURL());
    alert("success"+ entry.toURL());
  }, (err) => {
    alert("error"+JSON.stringify(err));
  });

  }
  
  
  download() {  
    //here encoding path as encodeURI() format. 
    let fileName = "icon.png"; 
    let filePath = "http://live.iptvmedia.me/image/icon.png" 
    let url = encodeURI(filePath); 
    this.fileTransfer = this.transfer.create();
    //here initializing object.  
    
    // here iam mentioned this line this.file.externalRootDirectory is a native pre-defined file path storage. You can change a file path whatever pre-defined method.  
    this.fileTransfer.download(url, this.file.externalRootDirectory + "Downloads/"  + fileName, true).then((entry) => {  
        //here logging our success downloaded file path in mobile.  
        console.log('download completed: ' + entry.toURL());  
        let alert = this.alertCtrl.create({
  
          title:"Action",
          subTitle:'download completed: ' + entry.toURL(),
          buttons: ['OK']
          });
         
          alert.present();
    }, (error) => {  
        //here logging our error its easier to find out what type of error occured.  
        console.log('download failed: ' + error); 
        let alert = this.alertCtrl.create({
  
          title:"Warnnig",
          subTitle:'download failed: ' + error,
          buttons: ['OK']
          });
         
          alert.present(); 
    });  
} 




  download_youtube() {
    const fileTransfer: FileTransferObject = this.transfer.create();
    const url = 'https://youtu.be/p1fHT0PT9X8';
    fileTransfer.download(url,this.file.externalRootDirectory +'file1.mp4').then((entry) => {
      console.log('download complete: ' + entry.toURL());
    }, (error) => {
      // handle error
      console.log('Error',error);
    });
  }

  download_youtube_2() {
    const fileTransfer: FileTransferObject = this.transfer.create();
    const url = 'https://www.youtube.com/watch?v=p1fHT0PT9X8';
    fileTransfer.download(url,this.file.externalRootDirectory +'file2.mp4').then((entry) => {
      console.log('download complete: ' + entry.toURL());
    }, (error) => {
      // handle error
      console.log('Error',error);
    });
  }

  download_lien() {
    const fileTransfer: FileTransferObject = this.transfer.create();
    const url = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
    fileTransfer.download(url,this.file.externalRootDirectory +'file3.mp4').then((entry) => {
      console.log('download complete: ' + entry.toURL());
    }, (error) => {
      // handle error
      console.log('Error',error);
    });
  }

  download_image() {
    const fileTransfer: FileTransferObject = this.transfer.create();
    const url = 'http://live.iptvmedia.me/image/icon.png';
    fileTransfer.download(url,this.file.externalRootDirectory +'file3.png').then((entry) => {
      console.log('download complete: ' + entry.toURL());
    }, (error) => {
      // handle error
      console.log('Error',error);
    });
  }
 
*/

  getInfo() {
    this.deviceInfo.id = this.device.uuid;
    this.deviceInfo.model = this.device.model;
    this.deviceInfo.cordova = this.device.cordova;
    this.deviceInfo.platform = this.device.platform;
    this.deviceInfo.version = this.device.version;
    this.deviceInfo.manufacturer = this.device.manufacturer;
    this.deviceInfo.serial = this.device.serial;
    this.deviceInfo.isVirtual = this.device.isVirtual;
  }
 
  //Show UI loader of ionic
  showLoader(){
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loading.present();
  }
  
  //Hide UI loader of ionic
  hideLoader(){
    this.loading.dismiss();
  }
 
  //Get current coordinates of device
  getGeolocation(){
    this.showLoader();
    this.geolocation.getCurrentPosition().then((resp) => {
      this.responseObj = resp.coords; 
      this.hideLoader();
      this.getGeoencoder(this.responseObj.latitude,this.responseObj.longitude);
     }).catch((error) => {
       alert('Error getting location'+ JSON.stringify(error));
       this.hideLoader();
     });
  }
 
  //geocoder method to fetch address from coordinates passed as arguments
  getGeoencoder(latitude,longitude){
    //this.showLoader();
    this.nativeGeocoder.reverseGeocode(latitude, longitude, this.geoencoderOptions)
    .then((result: NativeGeocoderReverseResult[]) => {
      this.responseObj.address = this.generateAddress(result[0]);
      //----------------------------------------------------
      
      //----------------------------------------------------
     // this.hideLoader();
    })
    .catch((error: any) => {
      alert('Error getting location'+ JSON.stringify(error));
      this.hideLoader();
    });
  }
 
  //Return Comma saperated address
  generateAddress(addressObj){
      let obj = [];
      let address = "";
      for (let key in addressObj) {
        obj.push(addressObj[key]);
      }
      obj.reverse();
      for (let val in obj) {
        if(obj[val].length)
        address += obj[val]+', ';
      }
    return address.slice(0, -2);
  }
 
 
  //Start location update watch
  watchLocation(){
    this.showLoader();
    this.isWatching = true;
    this.watchLocationUpdates = this.geolocation.watchPosition();
    this.watchLocationUpdates.subscribe((resp) => {
      //alert(JSON.stringify(resp));
      this.hideLoader();
      this.responseObj = resp.coords;
      this.getGeoencoder(this.responseObj.latitude,this.responseObj.longitude);
      // resp can be a set of coordinates, or an error (if an error occurred).
      // resp.coords.latitude
      // resp.coords.longitude
    });
  }
 
  //Stop location update watch
  stopLocationWatch(){
    this.isWatching = false;
    this.watchLocationUpdates.unsubscribe();
  }
  /** download youtube video*/
  download_youtube()
  {
   
   
    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Cache-Control': 'no-cache'
         });    
         let options = {
      headers: httpHeaders
         };
 
   let data = {
    downloadx: this.downloadx.value  
       };
 
 /**/
  let loader = this.loadingCtrl.create({
     content: 'Processing please wait...',
   });
 
  loader.present().then(() => {

 this.http.post('http://localhost/instagram/instafetch/fetch.php',data, options)
 .map(res => res.toString())
 .subscribe(res => {
 
  loader.dismiss()
 if(res=="saved"){
   let alert = this.alertCtrl.create({
     title:"Congratulation",
     subTitle:(res),
     buttons: ['OK']
     });
    
     alert.present();
  
 
 }else
 {
  let alert = this.alertCtrl.create({
  title:"Error",
  subTitle:(res),
  buttons: ['OK']
  });
 
  alert.present();
   } 
 });
 });
  }
}
