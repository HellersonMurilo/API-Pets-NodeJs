/**
 * DESCRIÇÃO
 * 
 * 1 - criar um servido HTTP
 * 2 - Ler um arquivo do disco Local e servir na WEB
 * 3 - Gerenciamento de Pacotes NPM
 */


// Passo 1 - chamar o http

const http = require('http')

//Para Leitura de arquivos
const fs = require('fs')

//Criar uma função que pega dois Params: response e o file
function lerArquivo(response, file){
    //Ler o Arquivo
    fs.readFile(file, function(err, data){
        console.log(err)
        //responde para o usuario com os dados do arquivo
        response.end(data)
    })
}

// Passo 2 - Criar o Servidor
const server = http.createServer((request, response) =>{
    //vamos criar os endpoint da API (aqui fazemos as chamadas request - requisição e response - resposta)
    //Dependendo da regra de negócio, criaremos os nossos endpoint 
    if (request.url === '/dogs') {
        lerArquivo(response, 'petsDogs.json')
    }else if(request.url === '/cats'){
        lerArquivo(response,'petsCats.json')
    }else if(request.url === '/fish'){
        lerArquivo(response,'petsFish.json')
    }else if(request.url === '/monkeys'){ 
        lerArquivo(response,'petsMonkeys.json')
    }else{
        response.end(`
        <html>
        <h1>
        API Pets
        
        </h1><br/>
        <p>Se direcione para algum dos icones:</p>
        <ul>
        <li><a href="/cats">Gatos</a></li>
        <li><a href="/dogs">Cachorros</a></li>
        <li><a href="/fish">Peixes</a></li>
        <li><a href="/monkeys">Macacos</a></li>
        </ul>
        <img src="https://media.tenor.com/1LbcXXMVA1YAAAAd/cachorro-meme.gif" alt="">   
        </html>
        `)
    }
})

// Passo3
server.listen(3007, ()=>{
    console.log("Servidor Rodando")
})