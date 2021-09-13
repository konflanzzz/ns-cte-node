var fs = require('fs');
const path = require('path')
var crypto = require('crypto');

function dhEmiGet() {

    let dhEmi = new Date()
    dhEmi = dhEmi.toISOString().slice(0, 11) + dhEmi.toLocaleTimeString() + "-03:00"

    return dhEmi
}

function gravarLinhaLog(registro) {

    let logTime = new Date()
    logTime = logTime.toLocaleTimeString() + ":" + logTime.getMilliseconds()

    var caminhoLog = "CTe/logs"

    var fileName = new Date().toISOString().slice(0, 10).replace("-", "").replace("-", "")

    try {

        if (!fs.existsSync(caminhoLog)) {
            try {
                salvarArquivo(caminhoLog, fileName, ".log", logTime + " " + registro + "\r\n")
            }
            catch (error) {
                console.log(error)
            }
        }

        else {

            fs.appendFile(path.join(caminhoLog, fileName + ".log"), logTime + " " + registro + "\r\n", function (err) {

                if (err) {
                    // append failed
                }

                else {
                    // done
                }
            })
        }
    }

    catch (err) {
        console.log(err);
    }
}

async function salvarArquivo(caminho, nomeArquivo, extensao, conteudo) {

    var caminhoSalvar = path.join(caminho, nomeArquivo + extensao)

    try {
        if (!fs.existsSync(caminho)) {
            fs.mkdirSync(caminho);
        }
    }

    catch (err) {
        console.log(err);
    }

    fs.writeFile(caminhoSalvar, conteudo, function (err) {
        if (err) throw err;
    });

}



function gerarHashCompEntrega(chave, imagem){
        
    var base64Imagem = fs.readFileSync(imagem, { encoding: 'base64' });

    var hash = chave + base64Imagem

    var sha1 = crypto.createHash("sha1").update(hash).digest("hex")

    var base64 = new Buffer.from(sha1).toString('base64')

    console.log(base64)

}

gerarHashCompEntrega("43210907364617000135570000000023181000003300", "C:/Users/fernando.konflanz/GitHub/cte-node-js/src/cte_module/commons/entrega.jpg")


module.exports = { salvarArquivo, dhEmiGet, gravarLinhaLog }
