import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: Http
  ) { }

  ngOnInit() {
    // this.formulario = new FormGroup({
    //   nome: new FormControl(null),
    //   email: new FormControl(null),
    //   endereco: new FormGroup({
    //     cep: new FormControl(null)
    //   })
    // });
    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.min(3), Validators.maxLength(20)]],
      email: [null, [Validators.required, Validators.email]],
      endereco: this.formBuilder.group({
        cep: [null, Validators.required],
        numero: [null, Validators.required],
        complemento: [null],
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required]
      })
    });
  }

  onSubmit() {
    console.log(this.formulario);
     this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value))      
      .subscribe(dados => {
        console.log(dados);
        //reseta o form
        //this.resetar();
      },
      (error:any) => alert('Erro'));
  }

  resetar() {
    this.formulario.reset();
  }

  verificaValidTouched(campo: string) {
    return !this.formulario.get(campo).valid && this.formulario.get(campo).touched;
  }

  verificaEmailInvalido() {
    let campoEmail = this.formulario.get('email');        
    if (campoEmail.errors) {
      return campoEmail.errors['email'] && campoEmail.touched;
    }
  }

  aplicaCssErro(campo: string) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    }
  }

  consultaCEP() {
    let cep = this.formulario.get('endereco.cep').value;
    cep = cep.replace(/\D/g, '');
    if (cep != null) {
      let validaCep = /^[0-9]{8}$/;
      if (validaCep.test(cep)) {
        this.resetaDadosForm();
        this.http.get(`//viacep.com.br/ws/${cep}/json`)          
          .map(dados => dados.json())
          .subscribe(dados => this.populaDadosForm(dados));
      }
    }
  }

  resetaDadosForm() {
    this.formulario.patchValue({
       endereco: {        
        rua: null,        
        complemento: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    });
  }

  populaDadosForm(dados) {     
    this.formulario.patchValue({
       endereco: {
        cep: dados.cep,
        rua: dados.logradouro,        
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    }); 
    this.formulario.get('nome').setValue('Thiago');
  }

}
