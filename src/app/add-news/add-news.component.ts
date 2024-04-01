import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SNewsService } from '../services/s-news.service';
import { Router } from '@angular/router';
import { FireNewsService } from '../services/fire-news.service';

@Component({
  standalone:true,
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrl: './add-news.component.scss',
  imports:[ReactiveFormsModule]
})
export class AddNewsComponent implements OnInit{

  form : FormGroup;
  valid: boolean = true;
  constructor(
    private fb: FormBuilder,
    private newsService: SNewsService,
    private fireNewsService: FireNewsService,
    private router: Router,
  ){

  }

  ngOnInit(): void {
    this.form = this.fb.group({
      titulo: ['', Validators.required],
      fecha: [new Date, Validators.required],
      descripcion: ['', Validators.required]
    }) 
  }

  addNew():void{
    if (!this.form.valid){
      this.valid = false;
      return;
    }
    else{
      const noticia =  this.form.value;
      this.newsService.addNew(noticia);
      this.fireNewsService.addNew(noticia);
      this.valid = true;
      this.form.reset();
      this.router.navigate(["news"])
    }

  }
    
}
