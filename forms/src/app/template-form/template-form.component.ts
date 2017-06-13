import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

<<<<<<< HEAD
  usuario: any = {
    nome: null,
    email: null
  };

=======
>>>>>>> a91f2f6529531920eec771c00028d881f7d86182
  constructor() { }

  ngOnInit() {
  }

<<<<<<< HEAD
  onSubmit(form) {
    console.log(form);
    // console.log(this.usuario);
  }
=======
>>>>>>> a91f2f6529531920eec771c00028d881f7d86182
}
