const http = require('http')

/**
 * VERBOS HTTP
 * GET -> Pegando recursos/dados do servidor
 * POST -> Utilizamos para GRAVAR recursos
 * 
 */

const server = http.createServer((req, res) => {

    if (req.url === '/login' && req.method == 'POST') {
        console.log("caiu em data...")
        res.end("tudo certo por aki")
    }else if (req.url === '/signup' && req.method == 'POST'){
        var body = '';
        //forma como o NodeJs "Escuta os dados vindo de fora (POST)"
        req.on('data', function(data){
            body += data
        })
        //verifica se ja finalizou
        req.on('end', function (){
            var received = JSON.parse(body)
            console.log(received)
            if (received.userName === "Calabianqui") {
                res.end("Email OK")
            }else{
                res.end("Verifique o seu Email")
            }

        })
        return
    }else{
        res.statusCode = 401
        res.end("Sem autorização...")
    }

})

server.listen(3009, () => {
    console.log("Servidor on, porta 3008")
}) 