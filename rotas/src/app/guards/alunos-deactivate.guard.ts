import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { AlunoFormComponent } from './../alunos/aluno-form/aluno-form.component';

@Injectable()
export class AlunosDeactivateGuard implements CanDeactivate<AlunoFormComponent> {
  
  canDeactivate(
    component: AlunoFormComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean {    
    console.log('guarda de desativação');    
    return component.podeMudarRota();
  }

}