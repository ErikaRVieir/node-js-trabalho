const http = require('http');
const fs = require('fs');//biblioteca para leitura de arquivos

const server= http.createServer((req, res)=> {

res.setHeader('Tipo-Conteudo',"texto/html");//requisitando uma resposta 

let caminho ='./views/'; 

switch(req.url){
    case '/':
        caminho += 'index.html';
        res.statusCode = 200;
        break;

    case'/jogotela':
caminho +='jogotela.html'
res.statusCode = 200;
         break;

         case'/videotela':
caminho +='videotela.html'
res.statusCode = 200;
         break;

         case'/material':
caminho +='material.html'
res.statusCode = 200;
         break;

         case'/familia':
caminho +='familia.html'
res.statusCode = 200;
         break;

         case'/favoritos':
caminho +='favoritos.html'
res.statusCode = 200;
        break;

        case'/perfil':
caminho +='perfil.html'
res.statusCode = 200;
        break;
    
      default:
            caminho += '404.html';
            res.statusCode = 404;
        break;}
            

fs.readFile(caminho,(err,data)=>{
    if(err){
        console.log(err);
        res.end();
    }else{
      
        res.end(data);
    }

    });


});
server.listen(3000,'localhost',()=>{
    console.log("Ouvindo requisição na porta 3000")
});

