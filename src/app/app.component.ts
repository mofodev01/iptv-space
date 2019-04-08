import { Component, ViewChild } from '@angular/core';
import { Nav, Platform ,ActionSheetController,AlertController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { ProfilePage } from '../pages/profile/profile';
import { Storage } from '@ionic/storage';

import { LivePage } from '../pages/live/live';
import { FavoratePage } from '../pages/favorate/favorate';
import { FilmsPage } from '../pages/films/films';

import { TvSeriesPage } from '../pages/tv-series/tv-series';
import { KidMoviesPage } from '../pages/kid-movies/kid-movies';


import { VodExYuPage } from '../pages/vod-ex-yu/vod-ex-yu';
import { VodGamingPage } from '../pages/vod-gaming/vod-gaming'

import { VipPage } from '../pages/vip/vip'

import { ContactPage } from '../pages/contact/contact'

import { Market } from '@ionic-native/market';
import { SocialSharing } from '@ionic-native/social-sharing';

//import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';

import { LocationAccuracy } from '@ionic-native/location-accuracy';



import { FreeLivePage } from '../pages/free-live/free-live'
import { FreeFilmsPage } from '../pages/free-films/free-films'

import { DownloadPage } from '../pages/download/download';
import { AndroidAppPage } from '../pages/android-app/android-app'

import { HttpClient,HttpHeaders  } from '@angular/common/http';




@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  

  data:any;
  items:any;
  data_storage:any;
  

  @ViewChild(Nav) nav: Nav;

  //rootPage: any = HomePage;
  rootPage: any = LoginPage;



  pages: Array<{title: string , icon: string , component: any}>;

  constructor(public http:  HttpClient , 
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,private market: Market,
    private socialSharing: SocialSharing,
    public actionsheetCtrl: ActionSheetController,
    public alertCtrl: AlertController ,
    ///private admobFree: AdMobFree,
    private storage: Storage,
    private locationAccuracy: LocationAccuracy) {
    this.initializeApp();
   /// this.showBanner();
    this.localisation();
    this.fetchuser();
    // used for an example of ngFor and navigation   SeriesPage
    

  }


  fetchuser(){
  
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
  
this.http.get('http://space.iptvmedia.me/api/fetch_status.php?username='+this.data_storage,options)

//.map(res => res.toString())
.subscribe(res => {

let  items = JSON.stringify(res);
//var  items = JSON.parse(res);
  
  console.log(items);
 
  //this.items=res;

  if(items =='[{"status":"Active"}]'){
   this.pages = [
    { title: 'Home', component: ProfilePage,icon : "home" }
    , { title: 'Live Tv', component: LivePage,icon : "desktop" }
    ,{ title: 'VOD Movies', component: FilmsPage,icon : "film" }

    ,{ title: 'Kid Movies', component: KidMoviesPage,icon : "recording" }
    ,{ title: 'Tv Series', component: TvSeriesPage,icon : "paper" }

    ,{ title: 'Ex Yu', component: VodExYuPage,icon : "aperture" }
    ,{ title: '3D Movies', component: VodGamingPage,icon : "game-controller-b" }
    ,{ title: 'Vip Channels', component: VipPage,icon : "ribbon" }
    ,{ title: 'Download', component: DownloadPage,icon : "download" }
    ,{ title: 'Tutorial',component: AndroidAppPage,icon : "book"}
    ,{ title: 'Support', component: ContactPage,icon : "mail" }
    ,{ title: 'Favourites', component: FavoratePage,icon : "bookmarks" }
    
    
  ]; 
  }else if(items =='[{"status":"Free"}]'){
 this.pages = [
    { title: 'Home', component: ProfilePage,icon : "home" }
    , { title: 'Free Live Tv', component: FreeLivePage,icon : "desktop" }
    ,{ title: 'Free VOD Movies', component: FreeFilmsPage,icon : "film" }
    //,{ title: 'Contact', component: ContactPage,icon : "mail" }
    ,{ title: 'favourites', component: FavoratePage,icon : "bookmarks" }
  
  ];

  
  }else if(items =='[{"status":"Inactif"}]'){
    this.pages = [
      { title: 'Home', component: ProfilePage,icon : "home" }
      //,{ title: 'Contact', component: ContactPage,icon : "mail" }
    ];
    let alert = this.alertCtrl.create({
  
      title:"Notification",
      subTitle:"Please pay to watch the content",
      buttons: ['OK']
      });
     
      alert.present();
  }else if(items =='[{"status":"Pending"}]'){
    this.pages = [
      { title: 'Home', component: ProfilePage,icon : "home" }
      ,{ title: 'Support', component: ContactPage,icon : "mail" }
    ];
    let alert = this.alertCtrl.create({
  
      title:"Notification",
      subTitle:"Your account will be activated as soon as possible",
      buttons: ['OK']
      });
     
      alert.present();
       
  }else if(items =='[{"status":"Expired"}]'){

    this.pages = [
      { title: 'Home', component: ProfilePage,icon : "home" }
      //,{ title: 'Contact', component: ContactPage,icon : "mail" }
      
    ];
    let alert = this.alertCtrl.create({
  
      title:"Notification",
      subTitle:"Your subscription has expired, Please pay to watch the content",
      buttons: ['OK']
      });
     
      alert.present();

  }
  

 

   
   
   });


///-----
})
///-----



    }

 






  localisation(){
    //------------------location-Accuracy-----------------------
    this.locationAccuracy.canRequest().then((canRequest: boolean) => {
  
      if(canRequest) {
        // the accuracy option will be ignored by iOS
        this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
          () => console.log('Request successful'),
          error => console.log('Error requesting location permissions', error)
        );
      }
    
    });
    //-----------------------------------------------------------
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
     
    });

    this.storage.get('session_storage').then((res)=> {
      if(res == null){
        this.rootPage=LoginPage;
      }else{
        this.rootPage=ProfilePage;
      }
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  rateApp(){
    this.market.open('com.iptvmedia.streaming');
    }

    shareApp() {
      /*  this.appodeal.hide(this.appodeal.AD_TYPES.BANNER);*/
        let actionSheet = this.actionsheetCtrl.create({
          title: 'Share',
          cssClass: 'action-sheets-basic-page',
          buttons: [
            {
              text: 'Facebook',
              role: 'destructive',
              icon: 'logo-facebook',
             // cssClass: 'action-red',
              handler: () => {
               
                  this.socialSharing.shareViaFacebook("", "", "https://play.google.com/store/apps/details?id=com.iptvmedia.streaming").then(() => {
                    console.log("shareViaFacebook: Success");
                  }).catch(() => {
                    console.error("shareViaFacebook: failed");
                  });
               
              }
            },
         
          
            {
              text: 'Whatsapp',
              role: 'destructive',
              icon: 'logo-whatsapp',
           
              handler: () => {
                this.socialSharing.shareViaWhatsApp("", "https://image.prntscr.com/image/QJOULXi5RYiCKu0RwpiupQ.png" ,"https://play.google.com/store/apps/details?id=com.iptvmedia.streaming").then(() => {
                  console.log("shareViaWhatsApp: Success");
                }).catch(() => {
                  console.error("shareViaWhatsApp: failed");
                });
              }
            },
            {
              text: 'Twitter',
              role: 'destructive',
              icon: 'logo-twitter',
           
              handler: () => {
                this.socialSharing.shareViaTwitter("", "https://image.prntscr.com/image/QJOULXi5RYiCKu0RwpiupQ.png" ,"https://play.google.com/store/apps/details?id=com.iptvmedia.streaming").then(() => {
                  console.log("shareViatwitter: Success");
                }).catch(() => {
                  console.error("shareViatwitter: failed");
                });
              }
            },
            {
              text: 'Other',
              role: 'destructive',
              icon: 'paper-plane',
            
              handler: () => {
                this.socialSharing.share("","", "https://image.prntscr.com/image/QJOULXi5RYiCKu0RwpiupQ.png" ,"https://play.google.com/store/apps/details?id=com.iptvmedia.streaming").then(() => {
                  console.log("shareViatwitter: Success");
                }).catch(() => {
                  console.error("shareViatwitter: failed");
                });
              }
            },
            {
              text: 'Cancel',
              role: 'cancel', // will always sort to be on the bottom
              icon: 'close' ,
              handler: () => {
                console.log('Cancel clicked');
              }
            }
          ]
        });
        actionSheet.present();
      }

     
     

}
