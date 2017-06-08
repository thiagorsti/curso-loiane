import { AuthGuard } from './guards/auth-guard';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { NgModule } from '@angular/core';

import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './login/auth.service';
//import { CursosComponent } from './cursos/cursos.component';
//import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
//import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';

const appRoutes: Routes = [
    { 
        path: 'cursos', 
        loadChildren: 'app/cursos/cursos.module.ts#CursosModule',
        canActivate: [AuthGuard]
    },
    { 
        path: 'alunos', 
        loadChildren: 'app/alunos/alunos.module.ts#AlunosModule',
        canActivate: [AuthGuard]
    },
    //{ path: 'cursos', component: CursosComponent},
    //{ path: 'curso/:id', component: CursoDetalheComponent},
    { 
        path: 'login', 
        component: LoginComponent 
    },
    //{ path: 'naoEncontrado', component: CursoNaoEncontradoComponent },
    { 
        path: '', 
        component: HomeComponent,
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}