import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    nome: null,
    email: null
  };
  constructor(private http: Http) { }

  ngOnInit() {
  }

  onSubmit(formulario) {
    console.log(formulario);
    // console.log(this.usuario);
    //utilizando o resttesttest.com para testar submissão do formulário
    this.http.post('https://httpbin.org/post', JSON.stringify(formulario.value))      
      .subscribe(dados => {
        console.log(dados);
        formulario.form.reset();
      });
  }

  verificaValidTouched(campo) {
    return !campo.valid && campo.touched;
  }

  aplicaCssErro(campo) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    }
  }

  consultaCEP(cep, form) {
    cep = cep.replace(/\D/g, '');
    if (cep != null) {
      let validaCep = /^[0-9]{8}$/;
      if (validaCep.test(cep)) {
        this.resetaDadosForm(form);
        this.http.get(`//viacep.com.br/ws/${cep}/json`)          
          .map(dados => dados.json())
          .subscribe(dados => this.populaDadosForm(dados, form));
      }
    }
  }

  populaDadosForm(dados, formulario) {    
    // formulario.setValue({
    //   nome: formulario.value.nome,
    //   email: formulario.value.email,
    //   endereco: {
    //     cep: dados.cep,
    //     rua: dados.logradouro,        
    //     numero: '',
    //     complemento: dados.complemento,
    //     bairro: dados.bairro,
    //     cidade: dados.localidade,
    //     estado: dados.uf
    //   }
    // });
    formulario.form.patchValue({
       endereco: {
        cep: dados.cep,
        rua: dados.logradouro,        
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });    
  }

  resetaDadosForm(formulario) {
    formulario.form.patchValue({
       endereco: {        
        rua: null,        
        complemento: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    });    
  }
}
