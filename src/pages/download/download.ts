import { Component } from '@angular/core';
import {  NavController, NavParams ,Platform } from 'ionic-angular';
import { LoadingController, App , AlertController,MenuController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Market } from '@ionic-native/market';
import * as dl from 'cordova-plugin-android-downloadmanager';
import {  
  File  
} from '@ionic-native/file';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
@Component({
  selector: 'page-download',
  templateUrl: 'download.html',
})
export class DownloadPage {

data:any;
//username:any;
items:any;
data_storage:any;

  por: string = "Portal";
  isAndroid: boolean = false;

  constructor(platform: Platform,
    public http:  HttpClient,
    public navCtrl: NavController, public navParams: NavParams
    ,public loadingCtrl: LoadingController,public storage: Storage 
    , public appCtrl: App , public alertCtrl: AlertController
    ,public menuCtrl:MenuController
    ,private market: Market
    , private file: File
    ,private youtube: YoutubeVideoPlayer
    ) {
    this.menuCtrl.enable(true);
    this.isAndroid = platform.is('android');
    }
    protected adjustTextarea(event: any): void {
      let textarea: any		= event.target;
      textarea.style.overflow = 'hidden';
      textarea.style.height 	= 'auto';
      textarea.style.height 	= textarea.scrollHeight + 'px';
      return;
    }


    ionViewWillEnter(){
  
      this.storage.get("session_storage").then((res)=>{
       this.data_storage=res;
       
       console.log(this.data_storage);
  /**----------------------------------------- */
  let httpHeaders = new HttpHeaders({
    'Content-Type' : 'application/json',
    'Cache-Control': 'no-cache'
       });    
       let options = {
    headers: httpHeaders
       };
  /**----------------------------------------- */    
    
  this.http.get('http://space.iptvmedia.me/api/fetch_user.php?username='+this.data_storage,options)
  
     .subscribe(res => {
     
     
     this.items=res;
     
     console.log(this.items);
     });
  
  
  ///-----
  })
  ///-----
  
      }

      openApp(){
        this.market.open('com.premiumiptv.premiumiptviptv');
        }

        download_apk(){
          //https://github.com/emilbayes/cordova-plugin-android-downloadmanager
          //https://forum.ionicframework.com/t/how-to-download-file-natively/114329/14
              //----------------------------------------------------------
              let req = {
                uri: 'http://iptvreseller.xyz:1234/Premium_IptvTVBox.apk',
                title: 'androidbox',
                description: 'android box apk',
                mimeType: 'application/vnd.android.package-archive',
              
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
            download_plugin_kodi(){
             
                  //----------------------------------------------------------
                  let req = {
                   uri: 'http://iptvreseller.xyz:1234/kodi.zip',
                  //  uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
                    title: 'PluginforKodi',
                    description: 'Plugin for Kodi',
                    mimeType: 'application/zip',
                  //mimeType: 'video/mp4',
                  
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
                //key api youtube
                //AIzaSyCSllJn0jW7kf9zIpWyPbORJ1WQ3yBGzXM

open_youtube_video(){
  this.youtube.openVideo('AH_4sr4jYlA');
  
}

}
