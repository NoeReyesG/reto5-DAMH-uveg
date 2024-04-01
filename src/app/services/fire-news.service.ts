import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, deleteDoc, doc } from '@angular/fire/firestore';
import NewI from '../models/newsI';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FireNewsService {

  constructor(
    private firestore: Firestore
  ) { }

  addNew(nextNew: NewI){
    const newsRef = collection(this.firestore, 'news');
    addDoc(newsRef,nextNew); 
  }

  getNews(): Observable<NewI[]>{
    const newsRef = collection(this.firestore, 'news');
    return collectionData(newsRef, {idField:'id'}) as Observable<NewI[]>
  }

  deleteNews(idNew: string){
    const id:string = 'news/' + idNew;   
    const newsRef = doc(this.firestore, id);
    deleteDoc(newsRef);
  }
}
