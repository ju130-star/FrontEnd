//criar a solicitação de login de usuario 

//jwt -> Vai Gerar o token de atutenticação 

import { autenticaUsuario } from "@/controllers/UsuarioController";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

//verificar se o JWT esta inserido no enciroment (variaveis de ambiente do projeto
const JWT_SECRET = process.env.JWT_KEY;
//verificar se a chave esta no .env.local
if(!JWT_SECRET){
    throw new Error("JWT_KEY não está definida nas Variáveis de ambiente");
}
//começa com método de Autenticação
export async function POST(req: NextRequest) { //pega as informações
    try {
        const {email,senha} = await req.json();
        //validar os dados obtidos do client-side
        if(!email || !senha){
            return NextResponse.json({
                sucess: false, error:"Email e Senha são obrigatorios"
            });
        }
        //continuar validação
        const usuario = await autenticaUsuario(email, senha);
        //se não encontrou o usuario
        if(!usuario){
            return NextResponse.json({
                success: false, error:"Email ou Senha inválido"
            })
        }
        //continuo para gerar o token (JWT)
        // gerar o token permite acessar as páginas adiante
        const token = jwt.sign(
            {id: usuario._id, nome: usuario.nome, funcao: usuario.funcao},
            JWT_SECRET as string,
            {expiresIn: "2m"}
        );
        return NextResponse.json({
            success: true,
            token,
            usuario:{
                id: usuario.id,
                nome: usuario.nome,
                funcao: usuario.funcao
            }
        });
    } catch (error) {
        return NextResponse.json({success:false, error:error})
    }
    
}