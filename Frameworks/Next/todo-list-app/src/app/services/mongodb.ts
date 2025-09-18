//escrevendo o mongodb de forma segura e reutilizavel

//converter String para URL (URI)
const MongoUri = process.env.DATABASE_URL;
//verificar se existe um endereço url
//verificando a nulidade da variavel verdadeiraa ou falsa
if(!MongoUri){
    throw new Error("Defina o DATABASE_URL no env.local");
}