import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
//import { PdfViewerPage } from '../pages/pdf-viewer/pdf-viewer';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//import { DocumentViewer } from '@ionic-native/document-viewer';


import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorage } from 'angularfire2/storage';
import { AngularFireStorageModule } from 'angularfire2/storage';

import { firebaseConfig } from '../components/eviornment/eviornment';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';

import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';


import { AngularFireAuth } from 'angularfire2/auth';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
//import { StorageServiceProvider } from '../providers/storage-service/storage-service';
import { File } from '@ionic-native/file';

import { IonicStorageModule } from '@ionic/storage';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage//,
    //PdfViewerPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig.fire),
    AngularFirestoreModule,
    HttpModule,
    AngularFireDatabaseModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    AngularFireStorageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage//,
    //PdfViewerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    //DocumentViewer,
    AngularFirestore,
    AngularFireAuth,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    File
   // StorageServiceProvider
  ]
})
export class AppModule {}