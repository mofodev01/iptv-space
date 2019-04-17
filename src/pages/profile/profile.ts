import { Component,ViewChild } from '@angular/core';
import { /*IonicPage,*/ NavController, NavParams } from 'ionic-angular';
import { LoadingController, App , AlertController,MenuController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { SettingPage } from '../setting/setting'
import { LoginPage } from '../login/login';

import { DownloadPage } from '../download/download';
import { AndroidAppPage } from '../android-app/android-app';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal';


@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  @ViewChild("username") username;
  @ViewChild("amount") amount;
  @ViewChild("duration") duration;
  @ViewChild("gateway") gateway;
data:any;
//username:any;
items:any;
data_storage:any;
item_pay_show:any;
index: string

  constructor(public http:  HttpClient,
    public navCtrl: NavController, public navParams: NavParams
    ,public loadingCtrl: LoadingController,public storage: Storage 
    , public appCtrl: App , public alertCtrl: AlertController
    ,public menuCtrl:MenuController
    ,private payPal: PayPal
   // ,public MyApp: MyApp
    
    
    ) {
      this.menuCtrl.enable(true);
      this.index = "home";
  }

  godownloadPage() {
    this.navCtrl.setRoot(DownloadPage);
  }
  gotutorialPage() {
    this.navCtrl.setRoot(AndroidAppPage);
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
/**----------------------------------------- */    
  
this.http.get('http://space.iptvmedia.me/api/setting.php')

   .subscribe(res => {
   
   
   this.item_pay_show=res;
   
   console.log(this.item_pay_show);
   });


///-----
})
///-----

    }
   
    setting(
      username :number,
      telephone:String,
      email :String,
      
    ){
     this.storage.get("session_storage").then((res)=>{
       this.data_storage=res;

      this.navCtrl.push(SettingPage,{
        username: username,telephone: telephone,email: email
 });

})
    }


    logout(){
   this.storage.clear();
   this.storage.remove("session_storage");
   this.appCtrl.getRootNav().setRoot(LoginPage);
  
   let alert = this.alertCtrl.create({
  
     title:"Bye",
     subTitle:"Logout Succesfull",
     buttons: ['OK']
     });
    
     alert.present();

    }

     
/*--------------------------------1-month---------------------------------*/
      payement_1_Month(){
        
        this.payPal.init({
          PayPalEnvironmentProduction: 'AXWsAUvf8mmS2KG1xQft-jISAKnT-B8Hw-RRAdOKKzIm0YzIJLfpTdL4Sq8c6elPPKhS7zozaMVMpYGB',
          PayPalEnvironmentSandbox: ''
        }).then(() => {
         
          this.payPal.prepareToRender('PayPalEnvironmentProduction', new PayPalConfiguration({
            
          })).then(() => {
            let payment = new PayPalPayment('15', 'USD', '1 Month', 'sale');
            this.payPal.renderSinglePaymentUI(payment).then(() => {
              // Successfully paid
              let httpHeaders = new HttpHeaders({
                'Content-Type' : 'application/json',
                'Cache-Control': 'no-cache'
                   });    
                   let options = {
                headers: httpHeaders
                   };
           
             let data = {
                  username: this.data_storage,
                  amount: this.amount=15,
                  duration: this.duration='1 Month',
                  gateway: this.gateway='paypal'   
                 };
           
           
            
           this.http.post('http://space.iptvmedia.me/api/paid.php',data, options)
           .map(res => res.toString())
           .subscribe(res => {
           
            
           if(res=="payment successfull"){
             let alert = this.alertCtrl.create({
               title:"CONGRATS",
               subTitle:(res),
               buttons: ['OK']
               });
              
               alert.present();
           
              
           }else
           {
            let alert = this.alertCtrl.create({
            title:"ERROR",
            subTitle:(res),
            buttons: ['OK']
            });
           
            alert.present();
             } 
           });
           
             
            }, () => {
              // Error or render dialog closed without being successful
              
              let alert = this.alertCtrl.create({
                title:"Error",
                subTitle:"Error or render dialog closed without being successful",
                buttons: ['OK']
                });
               
                alert.present();
            });
          }, () => {
            // Error in configuration
            
            let alert = this.alertCtrl.create({
              title:"Error",
              subTitle:"Error in configuration",
              buttons: ['OK']
              });
             
              alert.present();
          });
        }, () => {
          // Error in initialization, maybe PayPal isn't supported or something else
         
          let alert = this.alertCtrl.create({
            title:"Error",
            subTitle:"Error in initialization, maybe PayPal isn't supported or something else",
            buttons: ['OK']
            });
           
            alert.present();
        });
      }

      /*-------------------------------------------3-month------30-----EUR------3 Month------------------------------*/
      payement_3_Month(){

        this.payPal.init({
          PayPalEnvironmentProduction: 'AXWsAUvf8mmS2KG1xQft-jISAKnT-B8Hw-RRAdOKKzIm0YzIJLfpTdL4Sq8c6elPPKhS7zozaMVMpYGB',
          PayPalEnvironmentSandbox: ''
        }).then(() => {
         
          this.payPal.prepareToRender('PayPalEnvironmentProduction', new PayPalConfiguration({
            
          })).then(() => {
            let payment = new PayPalPayment('35', 'USD', '3 Month', 'sale');
            this.payPal.renderSinglePaymentUI(payment).then(() => {
              // Successfully paid
              let httpHeaders = new HttpHeaders({
                'Content-Type' : 'application/json',
                'Cache-Control': 'no-cache'
                   });    
                   let options = {
                headers: httpHeaders
                   };
           
             let data = {
                  username: this.data_storage,
                  amount: this.amount=35,
                  duration: this.duration='3 Month',
                  gateway: this.gateway='paypal'   
                 };
           
           
            
           this.http.post('http://space.iptvmedia.me/api/paid.php',data, options)
           .map(res => res.toString())
           .subscribe(res => {
           
            
           if(res=="payment successfull"){
             let alert = this.alertCtrl.create({
               title:"CONGRATS",
               subTitle:(res),
               buttons: ['OK']
               });
              
               alert.present();
           
               
           }else
           {
            let alert = this.alertCtrl.create({
            title:"ERROR",
            subTitle:(res),
            buttons: ['OK']
            });
           
            alert.present();
             } 
           });
           
             
            }, () => {
              // Error or render dialog closed without being successful
              
              let alert = this.alertCtrl.create({
                title:"Error",
                subTitle:"Error or render dialog closed without being successful",
                buttons: ['OK']
                });
               
                alert.present();
            });
          }, () => {
            // Error in configuration
            
            let alert = this.alertCtrl.create({
              title:"Error",
              subTitle:"Error in configuration",
              buttons: ['OK']
              });
             
              alert.present();
          });
        }, () => {
          // Error in initialization, maybe PayPal isn't supported or something else
         
          let alert = this.alertCtrl.create({
            title:"Error",
            subTitle:"Error in initialization, maybe PayPal isn't supported or something else",
            buttons: ['OK']
            });
           
            alert.present();
        });
      
      }
      /*---------------------------------------6-month----60---EUR----6 Month------sale--------------------------*/
      payement_6_Month(){

        this.payPal.init({
          PayPalEnvironmentProduction: 'AXWsAUvf8mmS2KG1xQft-jISAKnT-B8Hw-RRAdOKKzIm0YzIJLfpTdL4Sq8c6elPPKhS7zozaMVMpYGB',
          PayPalEnvironmentSandbox: ''
        }).then(() => {
         
          this.payPal.prepareToRender('PayPalEnvironmentProduction', new PayPalConfiguration({
            
          })).then(() => {
            let payment = new PayPalPayment('55', 'USD', '6 Month', 'sale');
            this.payPal.renderSinglePaymentUI(payment).then(() => {
              // Successfully paid
              let httpHeaders = new HttpHeaders({
                'Content-Type' : 'application/json',
                'Cache-Control': 'no-cache'
                   });    
                   let options = {
                headers: httpHeaders
                   };
           
             let data = {
                  username: this.data_storage,
                  amount: this.amount=55,
                  duration: this.duration='6 Month',
                  gateway: this.gateway='paypal'   
                 };
           
           
            
           this.http.post('http://space.iptvmedia.me/api/paid.php',data, options)
           .map(res => res.toString())
           .subscribe(res => {
           
            
           if(res=="payment successfull"){
             let alert = this.alertCtrl.create({
               title:"CONGRATS",
               subTitle:(res),
               buttons: ['OK']
               });
              
               alert.present();
           
               
           }else
           {
            let alert = this.alertCtrl.create({
            title:"ERROR",
            subTitle:(res),
            buttons: ['OK']
            });
           
            alert.present();
             } 
           });
           
             
            }, () => {
              // Error or render dialog closed without being successful
              
              let alert = this.alertCtrl.create({
                title:"Error",
                subTitle:"Error or render dialog closed without being successful",
                buttons: ['OK']
                });
               
                alert.present();
            });
          }, () => {
            // Error in configuration
            
            let alert = this.alertCtrl.create({
              title:"Error",
              subTitle:"Error in configuration",
              buttons: ['OK']
              });
             
              alert.present();
          });
        }, () => {
          // Error in initialization, maybe PayPal isn't supported or something else
         
          let alert = this.alertCtrl.create({
            title:"Error",
            subTitle:"Error in initialization, maybe PayPal isn't supported or something else",
            buttons: ['OK']
            });
           
            alert.present();
        });
        
      }
      /*---------------------------------1-years---90----EUR-----1 Year------sale---------------------- */
      payement_1_Years(){

        this.payPal.init({
          PayPalEnvironmentProduction: 'AXWsAUvf8mmS2KG1xQft-jISAKnT-B8Hw-RRAdOKKzIm0YzIJLfpTdL4Sq8c6elPPKhS7zozaMVMpYGB',
          PayPalEnvironmentSandbox: ''
        }).then(() => {
         
          this.payPal.prepareToRender('PayPalEnvironmentProduction', new PayPalConfiguration({
            
          })).then(() => {
            let payment = new PayPalPayment('75', 'USD', '1 Year', 'sale');
            this.payPal.renderSinglePaymentUI(payment).then(() => {
              // Successfully paid
              let httpHeaders = new HttpHeaders({
                'Content-Type' : 'application/json',
                'Cache-Control': 'no-cache'
                   });    
                   let options = {
                headers: httpHeaders
                   };
           
             let data = {
                  username: this.data_storage,
                  amount: this.amount=75,
                  duration: this.duration='1 Year',
                  gateway: this.gateway='paypal'   
                 };
           
           
            
           this.http.post('http://space.iptvmedia.me/api/paid.php',data, options)
           .map(res => res.toString())
           .subscribe(res => {
           
            
           if(res=="payment successfull"){
             let alert = this.alertCtrl.create({
               title:"CONGRATS",
               subTitle:(res),
               buttons: ['OK']
               });
              
               alert.present();
           
           }else
           {
            let alert = this.alertCtrl.create({
            title:"ERROR",
            subTitle:(res),
            buttons: ['OK']
            });
           
            alert.present();
             } 
           });
           
             
            }, () => {
              // Error or render dialog closed without being successful
              
              let alert = this.alertCtrl.create({
                title:"Error",
                subTitle:"Error or render dialog closed without being successful",
                buttons: ['OK']
                });
               
                alert.present();
            });
          }, () => {
            // Error in configuration
            
            let alert = this.alertCtrl.create({
              title:"Error",
              subTitle:"Error in configuration",
              buttons: ['OK']
              });
             
              alert.present();
          });
        }, () => {
          // Error in initialization, maybe PayPal isn't supported or something else
         
          let alert = this.alertCtrl.create({
            title:"Error",
            subTitle:"Error in initialization, maybe PayPal isn't supported or something else",
            buttons: ['OK']
            });
           
            alert.present();
        });

      }

}
