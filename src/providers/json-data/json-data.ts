import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';


@Injectable()
export class JsonDataProvider {

  constructor(public http:  HttpClient) {
    console.log('Hello JsonDataProvider Provider');
  }

  /*-------------------------------api-json-country-live--------------------------------*/
//apiUrl_live_Country = 'http://space.iptvmedia.me/liste_country_live.php';
apiUrl_live_Country = 'http://live.iptvmedia.me/api/liste_country_live.php';

getLiveCountry(): Observable<{}> {
return this.http.get(this.apiUrl_live_Country).pipe(
map(this.extractDataCountry),
catchError(this.handleErrorCountry)
);
}

private extractDataCountry(res: Response) {
let body = res;
return body || { };
}

private handleErrorCountry (error: Response | any) {
let errMsg: string;
if (error instanceof Response) {
const err = error || '';
errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
} else {
errMsg = error.message ? error.message : error.toString();
}
console.error(errMsg);
return Observable.throw(errMsg);
}
/*---------------------------------fin--------------------------------*/
/*-------------------------------api-detail-country-live--------------------------------*/

getLive(user: String ,country: String ): Observable<{}> {

  /** */
  let httpHeaders = new HttpHeaders({
    'Content-Type' : 'application/json',
    'Cache-Control': 'no-cache'
       });    
       let options = {
    headers: httpHeaders
       };
      //http://api-web.000webhostapp.com
      //http://space.iptvmedia.me
      
    return this.http.get('http://live.iptvmedia.me/api/filter_channel.php?users='+user+'&&country='+country+'',options/**/).pipe(
    map(this.extractData),
    catchError(this.handleError)
    );
    
     
    
    }
    
    private extractData(res: Response) {
    let body = res;
    return body || { };
    }
    
    private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
    const err = error || '';
    errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
    errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
    }
    /*---------------------------------fin--------------------------------*/
/*------------------------------------------------------------------------------------------------------------------*/
 /*-------------------------------api-json-country-Films--------------------------------*/
 apiUrl_Films_Country = 'http://live.iptvmedia.me/api/liste_country_films.php';

 getFilmsCountry(): Observable<{}> {
 return this.http.get(this.apiUrl_Films_Country).pipe(
 map(this.extractDataCountryFilms),
 catchError(this.handleErrorCountryFilms)
 );
 }
 
 private extractDataCountryFilms(res: Response) {
 let body = res;
 return body || { };
 }
 
 private handleErrorCountryFilms (error: Response | any) {
 let errMsg: string;
 if (error instanceof Response) {
 const err = error || '';
 errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
 } else {
 errMsg = error.message ? error.message : error.toString();
 }
 console.error(errMsg);
 return Observable.throw(errMsg);
 }
 /*-----------------------------------------------------------------*/

 /*-------------------------------api-detail-country-Films--------------------------------*/

getFilms(user: String ,country: String ): Observable<{}> {

  /** */
  let httpHeaders = new HttpHeaders({
    'Content-Type' : 'application/json',
    'Cache-Control': 'no-cache'
       });    
       let options = {
    headers: httpHeaders
       };
      //http://api-web.000webhostapp.com
      //http://space.iptvmedia.me
      
    return this.http.get('http://live.iptvmedia.me/api/filter_films.php?users='+user+'&&country='+country+'',options/**/).pipe(
    map(this.extractDataFilms),
    catchError(this.handleErrorFilms)
    );
    
     
    
    }
    
    private extractDataFilms(res: Response) {
    let body = res;
    return body || { };
    }
    
    private handleErrorFilms (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
    const err = error || '';
    errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
    errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
    }
    /*---------------------------------fin--------------------------------*/


/*-------------------------------api-Anime_films----------------------------------*/
apiUrl_Anime_films = 'http://live.iptvmedia.me/api/animation_films.php';///<=<=<=<=<== Anime_json.php
 
getAnime_films(): Observable<{}> {
 return this.http.get(this.apiUrl_Anime_films).pipe(
   map(this.extractDataAnime_films),
   catchError(this.handleErrorAnime_films)
 );
}

private extractDataAnime_films(res: Response) {
 let body = res;
 return body || { };
}

private handleErrorAnime_films (error: Response | any) {
 let errMsg: string;
 if (error instanceof Response) {
   const err = error || '';
   errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
 } else {
   errMsg = error.message ? error.message : error.toString();
 }
 console.error(errMsg);
 return Observable.throw(errMsg);
}
/*-----------------------------------------------------------------*/
/*------------------------------------------------------------------------------------------------------------------*/
 /*-------------------------------api-json-country-series--------------------------------*/
 apiUrl_Series_Country = 'http://live.iptvmedia.me/api/liste_country_series.php';

 getSeriesCountry(): Observable<{}> {
 return this.http.get(this.apiUrl_Series_Country).pipe(
 map(this.extractDataCountrySeries),
 catchError(this.handleErrorCountrySeries)
 );
 }
 
 private extractDataCountrySeries(res: Response) {
 let body = res;
 return body || { };
 }
 
 private handleErrorCountrySeries (error: Response | any) {
 let errMsg: string;
 if (error instanceof Response) {
 const err = error || '';
 errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
 } else {
 errMsg = error.message ? error.message : error.toString();
 }
 console.error(errMsg);
 return Observable.throw(errMsg);
 }
 /*-----------------------------------------------------------------*/
/*-------------------------------api-detail-country-Series--------------------------------*/

getSeries(user: String ,country: String ): Observable<{}> {

  /** */
  let httpHeaders = new HttpHeaders({
    'Content-Type' : 'application/json',
    'Cache-Control': 'no-cache'
       });    
       let options = {
    headers: httpHeaders
       };
      //http://api-web.000webhostapp.com
      //http://space.iptvmedia.me
      
    return this.http.get('http://live.iptvmedia.me/api/filter_series.php?users='+user+'&&country='+country+'',options/**/).pipe(
    map(this.extractDataSeries),
    catchError(this.handleErrorSeries)
    );
    
     
    
    }
    
    private extractDataSeries(res: Response) {
    let body = res;
    return body || { };
    }
    
    private handleErrorSeries (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
    const err = error || '';
    errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
    errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
    }
    /*---------------------------------fin--------------------------------*/
/*------------------------------------------------------------------------------------------------------------------*/


/*-------------------------------api-Anime-VOD-------------------------------*/

getAnimeVod(user: String ): Observable<{}> {

  /** */
  let httpHeaders = new HttpHeaders({
    'Content-Type' : 'application/json',
    'Cache-Control': 'no-cache'
       });    
       let options = {
    headers: httpHeaders
       };
      //http://api-web.000webhostapp.com
      //http://space.iptvmedia.me
      
      
    return this.http.get('http://live.iptvmedia.me/api/filter_anime_vod.php?users='+user+'',options).pipe(
    map(this.extractDataAnimeVod),
    catchError(this.handleErrorAnimeVod)
    );
    
     
    
    }
    
    private extractDataAnimeVod(res: Response) {
    let body = res;
    return body || { };
    }
    
    private handleErrorAnimeVod (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
    const err = error || '';
    errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
    errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
    }
    /*---------------------------------fin--------------------------------*/
/*------------------------------------------------------------------------------------------------------------------*/
 /*-------------------------------api-json-country-animation--series--------------------------------*/
 apiUrl_Animation_Series_Country = 'http://live.iptvmedia.me/api/liste_country_animation_series.php';

 getAnimationSeriesCountry(): Observable<{}> {
 return this.http.get(this.apiUrl_Animation_Series_Country).pipe(
 map(this.extractDataCountryAnimationSeries),
 catchError(this.handleErrorCountryAnimationSeries)
 );
 }
 
 private extractDataCountryAnimationSeries(res: Response) {
 let body = res;
 return body || { };
 }
 
 private handleErrorCountryAnimationSeries (error: Response | any) {
 let errMsg: string;
 if (error instanceof Response) {
 const err = error || '';
 errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
 } else {
 errMsg = error.message ? error.message : error.toString();
 }
 console.error(errMsg);
 return Observable.throw(errMsg);
 }
 /*-----------------------------------------------------------------*/
/*-------------------------------api-detail-country-animation--series--------------------------------*/

getAnimationSeries(user: String ,country: String ): Observable<{}> {

  /** */
  let httpHeaders = new HttpHeaders({
    'Content-Type' : 'application/json',
    'Cache-Control': 'no-cache'
       });    
       let options = {
    headers: httpHeaders
       };
      //http://api-web.000webhostapp.com
      //http://space.iptvmedia.me
      
    return this.http.get('http://live.iptvmedia.me/api/filter_animation_series.php?users='+user+'&&country='+country+'',options/**/).pipe(
    map(this.extractDataAnimationSeries),
    catchError(this.handleErrorAnimationSeries)
    );
    
     
    
    }
    
    private extractDataAnimationSeries(res: Response) {
    let body = res;
    return body || { };
    }
    
    private handleErrorAnimationSeries (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
    const err = error || '';
    errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
    errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
    }
    /*---------------------------------fin--------------------------------*/
/*------------------------------------------------------------------------------------------------------------------*/




/*-------------------------------api-Sorts-------------------------------*/

getSports(user: String ): Observable<{}> {

  /** */
  let httpHeaders = new HttpHeaders({
    'Content-Type' : 'application/json',
    'Cache-Control': 'no-cache'
       });    
       let options = {
    headers: httpHeaders
       };
      //http://api-web.000webhostapp.com
      //http://space.iptvmedia.me
      
      
    return this.http.get('http://live.iptvmedia.me/api/filter_sports.php?users='+user+'',options).pipe(
    map(this.extractDataSports),
    catchError(this.handleErrorSports)
    );
    
     
    
    }
    
    private extractDataSports(res: Response) {
    let body = res;
    return body || { };
    }
    
    private handleErrorSports (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
    const err = error || '';
    errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
    errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
    }
    /*---------------------------------fin--------------------------------*/
    /*-------------------------------api-vod-ex-yu-----------------------------*/

getVODExYu(user: String ): Observable<{}> {

  /** */
  let httpHeaders = new HttpHeaders({
    'Content-Type' : 'application/json',
    'Cache-Control': 'no-cache'
       });    
       let options = {
    headers: httpHeaders
       };
      //http://api-web.000webhostapp.com
      //http://space.iptvmedia.me
      
      
    return this.http.get('http://live.iptvmedia.me/api/filter_VOD_Ex-Yo.php?users='+user+'',options).pipe(
    map(this.extractDataVODExYu),
    catchError(this.handleErrorVODExYu)
    );
    
     
    
    }
    
    private extractDataVODExYu(res: Response) {
    let body = res;
    return body || { };
    }
    
    private handleErrorVODExYu (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
    const err = error || '';
    errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
    errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
    }
    /*---------------------------------fin--------------------------------*/

   /*-------------------------------api-vod-gaming-----------------------------*/

   getVodGaming(user: String ): Observable<{}> {

    /** */
    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Cache-Control': 'no-cache'
         });    
         let options = {
      headers: httpHeaders
         };
        //http://api-web.000webhostapp.com
        //http://space.iptvmedia.me
        
        
      return this.http.get('http://live.iptvmedia.me/api/filter_VOD_Gaming.php?users='+user+'',options).pipe(
      map(this.extractDataVodGaming),
      catchError(this.handleErrorVodGaming)
      );
      
       
      
      }
      
      private extractDataVodGaming(res: Response) {
      let body = res;
      return body || { };
      }
      
      private handleErrorVodGaming (error: Response | any) {
      let errMsg: string;
      if (error instanceof Response) {
      const err = error || '';
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
      } else {
      errMsg = error.message ? error.message : error.toString();
      }
      console.error(errMsg);
      return Observable.throw(errMsg);
      }
      /*---------------------------------fin--------------------------------*/

 /*-------------------------------api-vod-VODXMas-----------------------------*/

 getVODXMas(user: String ): Observable<{}> {

  /** */
  let httpHeaders = new HttpHeaders({
    'Content-Type' : 'application/json',
    'Cache-Control': 'no-cache'
       });    
       let options = {
    headers: httpHeaders
       };
      //http://api-web.000webhostapp.com
      //http://space.iptvmedia.me
      
      
    return this.http.get('http://live.iptvmedia.me/api/filter_VOD_XMas.php?users='+user+'',options).pipe(
    map(this.extractDataVODXMas),
    catchError(this.handleErrorVODXMas)
    );
    
     
    
    }
    
    private extractDataVODXMas(res: Response) {
    let body = res;
    return body || { };
    }
    
    private handleErrorVODXMas (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
    const err = error || '';
    errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
    errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
    }
    /*---------------------------------fin--------------------------------*/
/*-------------------------------api-vod-VIP-----------------------------*/

getVIP(user: String ): Observable<{}> {

  /** */
  let httpHeaders = new HttpHeaders({
    'Content-Type' : 'application/json',
    'Cache-Control': 'no-cache'
       });    
       let options = {
    headers: httpHeaders
       };
      //http://api-web.000webhostapp.com
      //http://space.iptvmedia.me
      
      
    return this.http.get('http://live.iptvmedia.me/api/filter_VIP.php?users='+user+'',options).pipe(
    map(this.extractDataVIP),
    catchError(this.handleErrorVIP)
    );
    
     
    
    }
    
    private extractDataVIP(res: Response) {
    let body = res;
    return body || { };
    }
    
    private handleErrorVIP (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
    const err = error || '';
    errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
    errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
    }
    /*---------------------------------fin--------------------------------*/
/*-------------------------------api-vod-VODBoxSets-----------------------------*/

getVODBoxSets(user: String ): Observable<{}> {

  /** */
  let httpHeaders = new HttpHeaders({
    'Content-Type' : 'application/json',
    'Cache-Control': 'no-cache'
       });    
       let options = {
    headers: httpHeaders
       };
      //http://api-web.000webhostapp.com
      //http://space.iptvmedia.me
      
      
    return this.http.get('http://live.iptvmedia.me/api/filter_VOD_Box_Sets.php?users='+user+'',options).pipe(
    map(this.extractDataVODBoxSets),
    catchError(this.handleErrorVODBoxSets)
    );
    
     
    
    }
    
    private extractDataVODBoxSets(res: Response) {
    let body = res;
    return body || { };
    }
    
    private handleErrorVODBoxSets (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
    const err = error || '';
    errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
    errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
    }
    /*---------------------------------fin--------------------------------*/
/*-------------------------------api-vod-VOD_Live_Concerts-----------------------------*/

getVODLiveConcerts(user: String ): Observable<{}> {

  /** */
  let httpHeaders = new HttpHeaders({
    'Content-Type' : 'application/json',
    'Cache-Control': 'no-cache'
       });    
       let options = {
    headers: httpHeaders
       };
      //http://api-web.000webhostapp.com
      //http://space.iptvmedia.me
      
      
    return this.http.get('http://live.iptvmedia.me/api/filter_VOD_Live_Concerts.php?users='+user+'',options).pipe(
    map(this.extractDataVODLiveConcerts),
    catchError(this.handleErrorVODLiveConcerts)
    );
    
     
    
    }
    
    private extractDataVODLiveConcerts(res: Response) {
    let body = res;
    return body || { };
    }
    
    private handleErrorVODLiveConcerts (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
    const err = error || '';
    errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
    errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
    }
    /*---------------------------------fin--------------------------------*/
/*-------------------------------api-vod-EX_YU_Animation_Series-----------------------------*/

getVODVOD_EX_YU_Animation_Series(user: String ): Observable<{}> {

  /** */
  let httpHeaders = new HttpHeaders({
    'Content-Type' : 'application/json',
    'Cache-Control': 'no-cache'
       });    
       let options = {
    headers: httpHeaders
       };
      //http://api-web.000webhostapp.com
      //http://space.iptvmedia.me
      
      
    return this.http.get('http://live.iptvmedia.me/api/filter_VOD_EX-YU_Animation_Series.php?users='+user+'',options).pipe(
    map(this.extractDataVODEX_YU_Animation_Series),
    catchError(this.handleErrorVODEX_YU_Animation_Series)
    );
    
     
    
    }
    
    private extractDataVODEX_YU_Animation_Series(res: Response) {
    let body = res;
    return body || { };
    }
    
    private handleErrorVODEX_YU_Animation_Series (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
    const err = error || '';
    errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
    errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
    }
    /*---------------------------------fin--------------------------------*/










/*-------------------------------api-sports----------------------------------*/
apiUrl_sports = 'http://live.iptvmedia.me/api/sport.php';///<=<=<=<=<== Anime_json.php
 
getsports(): Observable<{}> {
 return this.http.get(this.apiUrl_sports).pipe(
   map(this.extractData_sports),
   catchError(this.handleError_sports)
 );
}

private extractData_sports(res: Response) {
 let body = res;
 return body || { };
}

private handleError_sports (error: Response | any) {
 let errMsg: string;
 if (error instanceof Response) {
   const err = error || '';
   errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
 } else {
   errMsg = error.message ? error.message : error.toString();
 }
 console.error(errMsg);
 return Observable.throw(errMsg);
}
/*-----------------------------------------------------------------*/


/*-------------------------------api-Serie----------------------------------*/
apiUrl_Serie = 'http://live.iptvmedia.me/api/series.php';
 
getSerie(): Observable<{}> {
 return this.http.get(this.apiUrl_Serie).pipe(
   map(this.extractDataSerie),
   catchError(this.handleErrorSerie)
 );
}

private extractDataSerie(res: Response) {
 let body = res;
 return body || { };
}

private handleErrorSerie (error: Response | any) {
 let errMsg: string;
 if (error instanceof Response) {
   const err = error || '';
   errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
 } else {
   errMsg = error.message ? error.message : error.toString();
 }
 console.error(errMsg);
 return Observable.throw(errMsg);
}
/*-----------------------------------------------------------------*/
/*-------------------------------combobox filter----------------------------------*/
apiUrl_filter = 'http://live.iptvmedia.me/api/search.json';
 
getFliter(): Observable<{}> {
 return this.http.get(this.apiUrl_filter).pipe(
   map(this.extractDataFilter),
   catchError(this.handleErrorFliter)
 );
}

private extractDataFilter(res: Response) {
 let body = res;
 return body || { };
}

private handleErrorFliter (error: Response | any) {
 let errMsg: string;
 if (error instanceof Response) {
   const err = error || '';
   errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
 } else {
   errMsg = error.message ? error.message : error.toString();
 }
 console.error(errMsg);
 return Observable.throw(errMsg);
}
/*-----------------------------------------------------------------*/
/*-------------------------------filter categorie----------------------------------*/
apiUrl_filter_categorie = 'http://live.iptvmedia.me/api/search.php';
 
getCategorie(cat : String): Observable<{}> {
 return this.http.get(this.apiUrl_filter_categorie+"?country="+cat).pipe(
   map(this.extractDatafilter_categorie),
   catchError(this.handleErrorfilter_categorie)
 );
}

private extractDatafilter_categorie(res: Response) {
 let body = res;
 return body || { };
}

private handleErrorfilter_categorie (error: Response | any) {
 let errMsg: string;
 if (error instanceof Response) {
   const err = error || '';
   errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
 } else {
   errMsg = error.message ? error.message : error.toString();
 }
 console.error(errMsg);
 return Observable.throw(errMsg);
}
/*-----------------------------------------------------------------*/
/*-------------------------------filter channel----------------------------------*/
apiUrl_filter_channel = 'http://live.iptvmedia.me/api/search_channel.php';
 
getchannel(channel : String): Observable<{}> {
 return this.http.get(this.apiUrl_filter_channel+"?channel="+channel).pipe(
   map(this.extractDatafilter_channel),
   catchError(this.handleErrorfilter_channel)
 );
}

private extractDatafilter_channel(res: Response) {
 let body = res;
 return body || { };
}

private handleErrorfilter_channel (error: Response | any) {
 let errMsg: string;
 if (error instanceof Response) {
   const err = error || '';
   errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
 } else {
   errMsg = error.message ? error.message : error.toString();
 }
 console.error(errMsg);
 return Observable.throw(errMsg);
}
/*-----------------------------------------------------------------*/
  


}
