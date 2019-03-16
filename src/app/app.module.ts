import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
////import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MyApp } from './app.component';
///import { HomePage } from '../pages/home/home';
import { LivePage } from '../pages/live/live';
////import { AnimePage } from '../pages/anime/anime';
import { FavoratePage } from '../pages/favorate/favorate';
import { FilmsPage } from '../pages/films/films';
import { SeriesPage } from '../pages/series/series';
import { FilterPage } from '../pages/filter/filter';


import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ProfilePage } from '../pages/profile/profile';
import { SettingPage } from '../pages/setting/setting';
import { DetailPage } from '../pages/detail/detail'
import { DetailfilmsPage } from '../pages/detailfilms/detailfilms'
import { DetailseriesPage } from '../pages/detailseries/detailseries'
import { DetailanimeseriesPage } from '../pages/detailanimeseries/detailanimeseries'
import { VodExYuPage } from '../pages/vod-ex-yu/vod-ex-yu'
import { VodGamingPage } from '../pages/vod-gaming/vod-gaming'
import { VodXMasPage } from '../pages/vod-x-mas/vod-x-mas'
import { VipPage } from '../pages/vip/vip'
import { VodBoxSetsPage } from '../pages/vod-box-sets/vod-box-sets'
import { VodLiveConcertsPage } from '../pages/vod-live-concerts/vod-live-concerts'
import { AnimefilmsPage } from '../pages/animefilms/animefilms';
import { AnimeseriesPage } from '../pages/animeseries/animeseries';
import { SportsPage } from '../pages/sports/sports';
import { ContactPage } from '../pages/contact/contact';
import { VodExYuAnimationSeriesPage } from '../pages/vod-ex-yu-animation-series/vod-ex-yu-animation-series'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { StreamingMedia } from '@ionic-native/streaming-media';
import { JsonDataProvider } from '../providers/json-data/json-data';
import { SearchPipe } from '../pipes/search/search';
import { SortPipe } from '../pipes/sort/sort';
import { Toast } from '@ionic-native/toast';

import { HttpClientModule } from '@angular/common/http';
import { DatabaseProvider } from '../providers/database/database';
import { IonicStorageModule } from '@ionic/storage';
import { SQLitePorter } from '@ionic-native/sqlite-porter';
import { SQLite } from '@ionic-native/sqlite';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Market } from '@ionic-native/market';
//import { AdMobFree } from '@ionic-native/admob-free';

import { PayPal } from '@ionic-native/paypal';
import { Geolocation } from  '@ionic-native/geolocation';
import { NativeGeocoder } from '@ionic-native/native-geocoder';
import { LocationAccuracy } from '@ionic-native/location-accuracy';
import { Device } from '@ionic-native/device';

import {  
  FileTransfer,  
  FileTransferObject  
} from '@ionic-native/file-transfer';  
import {  
  File  
} from '@ionic-native/file';





/**/
@NgModule({
  declarations: [
    MyApp,
    ///HomePage,
    LivePage,
    SearchPipe,
  SortPipe,
 /// AnimePage,
  FilmsPage,
  SeriesPage,
  FavoratePage,
  FilterPage,
  AnimefilmsPage,
  AnimeseriesPage,
  SportsPage,
  LoginPage,
  RegisterPage,
  ProfilePage,
  SettingPage,
  DetailPage,
  DetailfilmsPage,
  DetailseriesPage,
  DetailanimeseriesPage,
  VodExYuPage,
  VodGamingPage,
  VodXMasPage,
  VipPage,
  VodBoxSetsPage,
  VodLiveConcertsPage,
  ContactPage,
  VodExYuAnimationSeriesPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ///HomePage,
    LivePage,
    ///AnimePage,
    FilmsPage,
    SeriesPage,
    FavoratePage,
    FilterPage,
    AnimefilmsPage,
    AnimeseriesPage,
    SportsPage,
    LoginPage,
    RegisterPage,
    ProfilePage,
    SettingPage,
    DetailPage,
    DetailfilmsPage,
    DetailseriesPage,
    DetailanimeseriesPage,
    VodExYuPage,
    VodGamingPage,
    VodXMasPage,
    VipPage,
    VodBoxSetsPage,
    VodLiveConcertsPage,
    ContactPage,
    VodExYuAnimationSeriesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    StreamingMedia,
    
    SQLitePorter,
    SQLite,
    Toast,
    SocialSharing,
    Market,
    PayPal,
   /**/ 
    HttpClientModule,
    /*IonicStorageModule,
   */
    Geolocation,
    NativeGeocoder,
    LocationAccuracy,
    Device,
    
    FileTransfer,  
    FileTransferObject,  
    File ,
   
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    JsonDataProvider,
    DatabaseProvider
   //, AdMobFree
  ]
})
export class AppModule {}
