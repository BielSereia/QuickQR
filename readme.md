# QuickQR - API de geração de QR Codes

QuickQR é uma API REST que permite a geração de QR Codes a partir de uma URL informada. A API utiliza o método HTTP GET na rota "/qr" e permite que a URL seja passada como parâmetro na querystring.

## Como usar

Para usar a API, é necessário fazer uma requisição GET para a rota "/qr" com a URL desejada passada como parâmetro na querystring.

Exemplo:

`GET http://localhost:3000/qr?url=https://google.com`

A resposta será um arquivo SVG com o QR Code gerado. O arquivo pode ser baixado pelo navegador com o nome "qrcode.svg"

## Erros

- Caso a URL passada na querystring seja inválida, a API retornará um erro HTTP 400 com a mensagem "Invalid URL"

## Exemplo de uso

`GET http://localhost:3000/qr?url=https://github.com/BielSereia/QuickQR`
![a](https://i.imgur.com/qr-example.png)

## Tecnologias utilizadas

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [qr-image](https://github.com/alexeyten/qr-image)

## Contribuindo

Contribuições são sempre bem-vindas! Se você encontrar algum bug ou quiser sugerir uma nova funcionalidade, por favor abra uma issue ou faça um pull request.
