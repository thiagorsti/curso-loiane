import { Component, Input } from '@angular/core';

@Component({
    selector: 'meu-primeiro-component',
    template: `
        <p>Nome: {{ nome }}</p>
    `
})
export class MeuPrimeiroComponent {
    @Input()
    nome: string;
}