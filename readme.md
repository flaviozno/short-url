# URL Shortener - Backend Brasil

## Descrição

Este projeto implementa um serviço de encurtador de URLs que permite transformar URLs longas em versões mais curtas e fáceis de compartilhar. O serviço é construído usando Node.js e TypeScript.

## Exemplo de Uso

![Use Case](./demo.gif)

### Encurtar uma URL

Endpoint: `[POST] /shorten-url`

Request:

```json
{
    "url": "https://backendbrasil.com.br"
}
```

Response:

```json
{
    "url": "https://xxx.com/DXB6V"
}
```

