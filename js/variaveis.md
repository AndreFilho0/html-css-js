<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>variaveis</title>
    

</head>
<body>
    <h1>Variaveis Em javaScript</h1>
    <h2>var, let, e const</h2>
    <p>
        var (escopo global) - escopo fora do bloco. <br>
        let (escopo local) - escopo restrito ao bloco. <br>
        const (não permitindo reatribuição e nem redeclaração) - constante. 

    </p>
    <h2>Formatação de strings:</h2>
    <p>
        variavel.length : ler tamanho da variavel <br>
        variavel.toUpperCase(): colocar tudo maiusculo <br>
        variavel.toLowaerCase(): colocar tudo em minusculo <br>
    </p>

    <h2>Formatação de numeros:</h2>
    <p>
         variaveis.toFixed(2):  para colocar duas casas decimais <br>
         variaveis.toFixed(2).replace('.',',') : coloca duas casas decimais e troca o ponto pela virgula <br>
         variaveis.toLocaleString('pt-BR', {style:'currrency', currency:'BRL'}) : Isso faz com que um quantidade em dinheiro ir para real 

    </p>
    <script>
        var n1= Number.parseFloat(prompt("informe um valor"))  // o prompt sempre retora uma string , por isso temos que passar o number.parse.float para transformar em float
        let n2= Number(window.prompt("informe outro valor"))   // o Number analisa a entrada do dado e escolhe se é int , float  e toma uma decisão 
        var s=n1+n2
        window.alert("soma: "+s)
        window.alert("soma: "+String(s))  //  transformando um num para string 
        // forma mais simples de passar valores salvos em variaveis , usamos :(`${}`)
        document.write(` A soma é ${s}`)  // aqui escrevemos no documneto a mensagem

        /*
        Formatação de strings:
        variavel.length : ler tamanho da variavel
        variavel.toUpperCase(): colocar tudo maiusculo
        variavel.toLowaerCase(): colocar tudo em minusculo

        formatação de numeros:
        */


         


    </script>

    
</body>
</html>