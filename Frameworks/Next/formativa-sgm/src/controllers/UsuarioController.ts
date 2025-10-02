import Usuario, { IUsuario } from "@/models/Usuario";
import connectMongo from "@/services/mongodb"

//getAll
export const getAllUsuario = async() =>{
    await connectMongo();//estabelece conexão com o BD
    const usuarios = await Usuario.find([]);//lista de todos os usuarios
    return usuarios;
}
// getOne
export const getOneUsuario = async(id:string) => {
    await connectMongo()
    const usuario = await Usuario.findById(id); //lista o usuario
    return usuario;
}
// create
export const createUsuario = async (data: Partial<IUsuario>) => {
  await connectMongo();
  const novoUsuario = new Usuario(data); //cria o usuário
 // await novoUsuario.save(); //salva o usuário no BD
  const novoUsuarioId = novoUsuario.save(); //salva o usuário no BD
  return novoUsuarioId;
};

//update
export const updateUsuario = async (id: string, data: Partial<IUsuario>) => {
  await connectMongo();
  const usuarioAtualizado = await Usuario.findByIdAndUpdate(id, data, {
    new: true,
  });
  return usuarioAtualizado;
};

//delete
export const deleteUsuario = async (id: string) => {
  await connectMongo();
  await Usuario.findByIdAndDelete(id);
};

//metodo para utenticação do usuario
export const autenticaUsuario = async(email:string, senha:string) =>{
  await connectMongo();
  //buscar o usuario(email)
  const usuario = await Usuario.find({ email }).select("+senha");
  //se usuário não encontrado
  if (!usuario || usuario.length == 0) return null;
  //se caso usuário foi encotrado
  const senhaSecreta = await usuario[0].compareSenha(senha); //booleana
  if (!senhaSecreta) return null;
  //se deu certo
  return usuario[0];
}