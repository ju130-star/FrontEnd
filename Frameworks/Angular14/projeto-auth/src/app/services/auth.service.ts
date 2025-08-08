import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, switchMap, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  //atributos
  private apiUrl = 'http://localhost:3013/usuarios';
  private readonly CHAVE_AUTH  = 'UsuarioLogado';

  constructor(private router: Router, private http: HttpClient) {}

registrar(usuario:any):Observable<any>{
  //primeiro verifica se o usuario já existe
   return this.http.get<any[]>(`${this.apiUrl}?email=${usuario.email}`).pipe(
     switchMap((usuarios) => {
       if (usuarios.length > 0) { //caso exista
        //cria uma mensagem de erro
         return throwError(() => new Error('Usuário Já Cadastrado'));
          }else{// caso não exista
          //cadastra o usuario no BD
          return this.http.post<any>(this.apiUrl, usuario);
       }
     })
   );
 }
 login(credenciais: any): Observable<boolean>{
  //pega as credenciais do usuario (email e senha)
    return this.http.get<any[]>(
      //verica no BD se email e senha foram encontrados
      `${this.apiUrl}?email=${credenciais.email}&senha=${credenciais.senha}`).pipe(
        map(usuarios => {
          if(usuarios.length>0){ //se encontrado
            // armazena as informações do usuário e a chave no localStorage
            localStorage.setItem(this.CHAVE_AUTH, JSON.stringify(usuarios[0]));//converte em texto
              //retorna que o acesso foi permitido
            return true;
          }else{ //caso encontrado
            //fazer um erro
            //retorno que meu usuario não esta permitido o acesso
            return false;
          }
        })
      )
    }
  logout(){
    localStorage.removeItem(this.CHAVE_AUTH); //remove a chave de autenticação do usuario
    this.router.navigate(['/home']);//redireciona para a a pagina inicial
  }

  //verifica se o usuario já está logado (CHAVE_AUTH)
  estaAutenticado(): boolean {
    //transforma uma variavel do tipo texto em boolean
    return !!localStorage.getItem(this.CHAVE_AUTH) //vai retornar true ou false
  }

  //pega as informações do usuario no localStorage
  getUsuarioAtual(): any{
    //retorna as informações do usário autenticado , que estão armazenadas no localStorage
    return JSON.parse(localStorage.getItem(this.CHAVE_AUTH) || '{}'); //pega o usuario logado
  }
}
