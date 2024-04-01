import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewsComponent } from './news/news.component';
import { AddNewsComponent } from './add-news/add-news.component';
import { ReactiveFormsModule, UntypedFormGroup } from '@angular/forms';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp({"projectId":"reto5-f576d","appId":"1:77085661612:web:cbfe477cbe64d94ddc8209","databaseURL":"https://reto5-f576d-default-rtdb.firebaseio.com","storageBucket":"reto5-f576d.appspot.com","apiKey":"AIzaSyDl8MBZFBF4qwnwnFO63hj0JBeRMpz1mjQ","authDomain":"reto5-f576d.firebaseapp.com","messagingSenderId":"77085661612"})),
    provideFirestore(() => getFirestore()),
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
