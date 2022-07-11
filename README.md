# Back-end | API REST

## Exercícios

***1. Cadastro de alunos***

Neste exercício será necessário criar uma API REST para realização de cadastro de alunos, mas para satisfazer a demanda, será necessário contemplar alguns requisitos e regras obrigatórios.

**Regras da API:**

-   Deverá estar disponível no endereço http://localhost:3000
-   Deverá seguir o padrão REST, contemplando os métodos (verbos) **GET**, **POST** e **DELETE**.
-   Os códigos de status (status codes) a serem retornados deverão seguir a especificação de cada método (mais abaixo).
-   Deverá possuir apenas um recurso **alunos** que deverá ser acessado através do endereço http://localhost:3000/alunos
-   Deverá ser organizado em diferentes camadas (dados, controladores, roteador, intermediarios). A organização será detalhada mais abaixo.
-   Deverá ser protegida por uma autenticação simples através de senha passada por parâmetro do tipo query chamado **senha**. As regras da autenticação serão explicadas mais abaixo.
-   Todos os métodos do recurso único **alunos** deverão possuir as validações necessárias que serão detalhadas para cada método mais abaixo.
-   Na camada de dados deverá existir uma coleção (array) de alunos, onde cada item é um objeto representando um aluno. **A coleção deverá ser iniciada vazia**.
-   Cada objeto alunos deverá possuir 5 propriedades:
    -   **id** (número)
    -   **nome** (string)
    -   **sobrenome** (string)
    -   **idade** (número)
    -   **curso** (string)

```json
//Exemplo de aluno

{
    "id": 3,
    "nome": "Marcos",
    "sobrenome": "Silveira",
    "idade": 36,
    "curso": "Programação do Zero"
}
```

**Organização do código da API:**

Abaixo será definida como deverá ser feita a organização do código desta API (as tabulações indicarão o nível hierárquico dos diretórios):

-   nome-do-projeto (raiz do projeto node)
    -   controladores (diretório)
        -   recurso-a.js
        -   recurso-b.js
        -   .
        -   .
        -   recurso-z.js
    -   dados (diretório)
        -   colecao-a.js
        -   colecao-b.js
        -   .
        -   .
        -   colecao-z.js
    -   index.js (arquivo principal do servidor)
    -   intermediarios.js (middlewares - se houver)
    -   roteador.js (configuração de rotas)

**Formato (exemplo) de objeto de retorno em caso de erro de validação:**

```json
{
    "mensagem": "Esta é uma mensagem para explicar o erro e/ou código de status retornado."
}
```

**Autenticação simples - proteção por senha:**

Todas as requisições deverão verificar se a senha está correta através de intermediário (middleware) e a senha correta deverá ser: **cubos123**.
Caso a senha não seja informada ou seja informada incorretamente, deverá ser retornado código 401 (Unauthorized - não autorizado) com uma mensagem de erro conforme padrão de retorno acima dizendo que a senha está incorreta.

**Especificações e validações de cada método:**

**A) GET**

**A1) GET sem parâmetros**

Não deverá ter validações. Deverá retornar a coleção completa (array completo) mesmo que ele esteja vazio.

O código de status a ser retornado deverá ser sempre 200 (Ok).

**A2) GET /:id (com parâmetro id)**

Deverá retornar um objeto de aluno quando o mesmo existir para o ID informado com código de status 200 (Ok).

Caso o valor do parâmetro não seja um número válido deverá ser retornado 400 (Bad Request) com mensagem dizendo que o ID deve ser um número válido.

Caso o parâmetro seja válido, mas não existir aluno para aquele número de ID, deverá ser retornado 404 (Not Found) com mensagem dizendo que o aluno não foi encontrado.

**B) POST**

Não deverá receber nenhum parâmetro, apenas o body (conteúdo) da requisição, que deverá ser um objeto json de aluno completo com as 4 propriedades exceto o ID que deverá ser controlado (gerado) pelo servidor e portanto não deverá ser informado no request.

Deverá ser retornado 400 (Bad Request) com mensagem explicando o motivo do erro em qualquer um dos seguintes casos:

1. Qualquer uma das 4 propriedades (nome, sobrenome, idade ou curso) não estiver presente no objeto aluno a ser criado.
2. Qualquer uma das propriedades de texto (nome, sobrenome ou curso) possuir como valor string vazia ou string que possua apenas espaços.
3. Se a idade do aluno a ser adicionado for menor que 18 anos.

Caso o objeto aluno a ser adicionado passe em todas as validações acima, deverá ser retornado 201 (Created) sem qualquer conteúdo no body do response.

**C) DELETE**

Deverá receber apenas o parâmetro de rota **/:id** para indicar o id do aluno a ser excluído. Não deverá receber qualquer conteúdo no corpo (body) da requisição.

Caso o valor do parâmetro não seja um número válido deverá ser retornado 400 (Bad Request) com mensagem dizendo que o ID deve ser um número válido.

Caso não exista aluno para o id informado, deverá ser retornado 404 (Not Found) com mensagem apropriada informando que o aluno a ser excluído não foi encontrado.

Caso exista na coleção um objeto de aluno com o id informado pelo parâmetro, o objeto deverá ser removido do array e deverá ser retornado status 200 (Ok) com o objeto removido no corpo (body) da resposta (response).

**EXTRAS!!! (para ser feito caso sobre tempo da aula prática):**

1. Crie um novo arquivo na camada de dados (**cursos.js**) para guardar e exportar um array de strings dos cursos válidos e adicione às validações do POST uma verificação se o curso informado pelo request é um curso válido deste array de cursos.
2. Implemente os métodos PUT e PATCH com todas as validações que considerar necessárias de acordo com o que foi aprendido na aula e retornando os status codes corretos seguindo o REST. Pense em fazer de uma forma que as validações possam ser reutilizadas em todos os métodos que fizer sentido.

---

***2. Lista de convidados***

Neste exercício deveremos criar o back-end de um sistema para controle de convidados de evento. Este controle de convidados deverá ser executado em um servidor nodejs e deverá ser acessado através do endereço http://localhost:3000. O sistema deverá possuir uma lista de nomes dos convidados, e funcionalidades para poder: **consultar a lista** de convidados **inteira**, **consultar** se **um nome específico** existe na lista, **adicionar** um nome na lista e por fim, **remover** um nome da lista de convidados. Além de solicitar essas funcionalidades, foi exigido que este serviço back-end utilize o **padrão REST** o mais fielmente possível.

A seguir, detalharemos cada uma das funcionalidades necessárias, uma a uma, que deverão todas estar no mesmo script do servidor.

Todas as funcionalidades deverão estar disponíveis em um recurso chamado "convidados" que deverá ser acessado através do endereço http://localhost:3000/convidados.

**a) Consulta a lista inteira de convidados**

A primeira funcionalidade deverá ser aquela através da qual será possível consultar a lista completa de convidados.
Esta funcionalidade deverá utilizar o método (verbo) **GET**. Ao ser requisitada, esta funcionalidade deverá retornar no body do response um array de strings, onde cada item é um nome de convidado. Por enquanto esta funcionalidade não deverá receber parâmetros de qualquer tipo.

Caso considere necessário, crie um array inicial com quaisquer nomes para poder testar a funcionalidade.

**Exemplo:**
Caso seja criado um array inicial no servidor conforme abaixo

```javascript
const convidados = [
    "Carlos",
    "Amanda",
    "Fernanda",
    "Juliana",
    "Lucas",
    "Roberto",
]
```

Ao requisitar esta funcionalidade, deverá ser retornado:

```
[
  "Carlos",
  "Amanda",
  "Fernanda",
  "Juliana",
  "Lucas",
  "Roberto"
]
```

**b) Consulta se existe um nome específico na lista de convidados**

Agora vamos adicionar uma funcionalidade à anterior de consulta. Adicionaremos a possibilidade de especificar um nome através de um parâmetro query chamado **nome** e deverá ser retornado se o nome existe ou não na lista. Portanto neste passo apenas alteraremos à funcionalidade anterior que é acessada através do método (verbo) **GET**, através do endereço http://localhost:3000/convidados.

Portanto quando um valor for enviado na propriedade **nome** do tipo query, deverá ser retornado um objeto com apenas uma propriedade chamada **mensagem** que deverá receber uma string informando se o nome existe na lista ou não. Caso não seja fornecido valor à propriedade **nome** deverá ser retornado o array completo da lista de convidados, conforme funcionalidade anterior da letra **a)**.

**Exemplos:**

Caso seja criado um array inicial no servidor conforme abaixo

```javascript
const convidados = [
    "Carlos",
    "Amanda",
    "Fernanda",
    "Juliana",
    "Lucas",
    "Roberto",
]
```

Ao requisitar o recurso **convidados** com GET http://localhost:3000/convidados?nome=Renato, deverá ser retornado o seguinte objeto:

```
{
  "mensagem": "O convidado buscado não está presente na lista."
}
```

E ao requisitar o recurso **convidados** com GET http://localhost:3000/convidados?nome=Carlos, deverá ser retornado o seguinte objeto:

```
{
  "mensagem": "Convidado presente."
}
```

**c) Adicionar um nome na lista de convidados**

Deverá ser criada também uma funcionalidade para adicionar nomes à lista. Para isto, deverá ser utilizado o método (verbo) **POST** através do endereço http://localhost:3000/convidados.

O body da requisição (request) deverá ser um objeto JSON onde existirá apenas uma propriedade chamada **nome**, a qual deverá possuir como valor, uma string que será o nome do novo convidado a ser adicionado na lista.

Caso já exista na lista um nome idêntico ao fornecido pelo request, deverá ser retornada uma resposta com o body preenchido com um objeto com apenas uma propriedade **mensagem** que terá como valor uma string que é a mensagem informando que o convidado já existe na lista.

Caso o nome do convidado ainda não exista, após ser adicionado na lista deverá retornar uma resposta com um objeto JSON no body onde haverá apenas uma propriedade **mensagem** com uma mensagem dizendo que o convidado foi adicionado.

**Exemplos:**

Caso seja criado um array inicial no servidor conforme abaixo

```javascript
const convidados = [
    "Carlos",
    "Amanda",
    "Fernanda",
    "Juliana",
    "Lucas",
    "Roberto",
]
```

Ao enviar uma requisição POST http://localhost:3000/convidados com o objeto a seguir no conteúdo:

```
{
	"nome": "Amanda"
}
```

Deverá ser retornada uma mensagem com o seguinte objeto no conteúdo JSON no body:

```
{
    "mensagem": "O nome do convidado a ser adicionado já existe na lista. Caso queria adicionar outro convidado de mesmo nome, favor fornecer o sobrenome também."
}
```

Se for enviada uma requisição POST http://localhost:3000/convidados com um nome que ainda não exista na lista, conforme a seguir:

```
{
	"nome": "Gabriel"
}
```

Deverá ser retornada uma resposta com o seguinte objeto JSON no body do response:

```
{
    "mensagem": "Convidado adicionado."
}
```

**d) Remover um nome da lista de convidados**

Para finalizar, deve ser criada a funcionalidade para remover convidados da lista. Para isto, deverá ser utilizado o método (verbo) **DELETE** através do endereço http://localhost:3000/convidados.

O nome a ser removido deverá ser fornecido através de um parâmetro de URL do tipo path (params) chamado **nome**.

O body da requisição (request) não deverá possuir qualquer conteúdo e se possuir, deverá ser ignorado.

Caso não exista um convidado na lista com o nome enviado pela requisição, deverá ser retornada uma resposta com objeto json com a propriedade **mensagem** dizendo que não há convidado na lista com aquele nome e que portanto nenhum convidado foi removido.

Caso exista na lista um convidado com o exato nome enviado pela requisição, a string correspondente deverá ser removida do array, e em seguida o servidor deverá retornar uma mensagem com objeto json com a propriedade **mensagem** com uma string informando que o convidado foi removido.

**Exemplos:**

Caso seja criado um array inicial no servidor conforme abaixo

```javascript
const convidados = [
    "Carlos",
    "Amanda",
    "Fernanda",
    "Juliana",
    "Lucas",
    "Roberto",
]
```

Ao enviar uma requisição DELETE http://localhost:3000/convidados/Fernando

Deverá ser retornada uma mensagem com o seguinte objeto no conteúdo JSON no body:

```
{
    "mensagem": "O nome do convidado a ser removido não existe na lista. Nenhum convidado foi removido."
}
```

Se for enviada uma requisição DELETE http://localhost:3000/convidados/Juliana

Deverá ser retornada uma resposta com o seguinte objeto JSON no body do response:

```
{
    "mensagem": "Convidado removido."
}
```

Após criar todas as funcionalidades, teste todas elas em ordens variadas para verificar se todas estão funcionando como deveriam! =]

---

***3. Biblioteca Online***

Neste exercício, deverá ser criado o back-end de uma biblioteca online. Esta aplicação será uma API REST nodejs que deverá ser acessada através de http://localhost:3000.

Para atender a necessidade da biblioteca, será necessário no servidor da aplicação um array de objetos chamado **livros**, que será uma coleção onde cada objeto representa um livro. Cada livro possuirá as propriedades: **id** (que será o identificador do livro), **titulo**, **autor**, **ano** e **numPaginas**.

Portanto no servidor deverá existir um array como no exemplo abaixo:

```javascript
const livros = [
    {
        id: 1,
        titulo: "A Odisséia de Jonas",
        autor: "Thomas Crawling",
        ano: 2001,
        numPaginas: 197,
    },
    {
        id: 2,
        titulo: "Jonas e a sociedade escondida",
        autor: "Claire Crawling",
        ano: 2004,
        numPaginas: 158,
    },
]
```

O sistema da biblioteca deverá também possuir os principais métodos para **consultar a coleção**, e para **consultar**, **adicionar**, **alterar** e **remover livros**. Para construir as funcionalidades, deverão ser utilizados os verbos HTTP, seguindo o padrão REST. Todas as funcionalidades deverão ser acessadas através do recurso http://localhost:3000/livros.

Nos passos abaixo detalharemos como deverão funcionar cada um dos métodos:

**a) Consulta da coleção**

Através do método (verbo) HTTP GET deverá ser possível requisitar a completa coleção de livros.
Portanto, considerando o array de exemplo do início do exercício, ao requisitar o endereço http://localhost:3000/livros utilizando o GET, deverá ser retornado no body do response:

```javascript
;[
    {
        id: 1,
        titulo: "A Odisséia de Jonas",
        autor: "Thomas Crawling",
        ano: 2001,
        numPaginas: 197,
    },
    {
        id: 2,
        titulo: "Jonas e a sociedade escondida",
        autor: "Claire Crawling",
        ano: 2004,
        numPaginas: 158,
    },
]
```

**b) Consulta de um livro por ID**

Também utilizando o método HTTP GET, quando for realizada uma requisição ao recurso **livros** adicionando um parâmetro do tipo path (params), da seguinte forma: http://localhost:3000/2

Considerando o array de exemplo lá do início, deverá ser retornado o seguinte objeto JSON:

```javascript
{
  "id": 2,
  "titulo": "Jonas e a sociedade escondida",
  "autor": "Claire Crawling",
  "ano": 2004,
  "numPaginas": 158
}
```

Quando for enviado um valor que não seja um número válido para o parâmetro ID na URL, deverá ser retornado um objeto JSON com uma propriedade **mensagem** informando que o valor do parâmetro não é um número válido, conforme exemplo a seguir:

```javascript
{
  "mensagem": "O valor do parâmetro ID da URL não é um número válido."
}
```

Se o valor do parâmetro for um número válido, porém não existir um livro na coleção para aquele ID, deverá ser retornado um objeto JSON com a seguinte mensagem:

```javascript
{
  "mensagem": "Não existe livro para o ID informado."
}
```

**c) Adicionar um livro**

Para contemplar a funcionalidade de adicionar um livro à coleção, deverá ser utilizado o verbo HTTP POST no mesmo recurso http://localhost:3000/livros. As requisições para este método deverão possuir em seu conteúdo (body), um objeto JSON com as propriedades que o livro deve ter na coleção, exceto o ID que deverá ser controlado automaticamente pelo servidor.

Portanto, a cada requisição POST a este recurso, o servidor deve encontrar o próximo ID livre para poder utilizar no novo livro que será adicionado.

Considerando o array de exemplo do exercício, quando for enviada uma requisição POST ao recurso **livros** com o seguinte objeto JSON em seu conteúdo (body):

```javascript
{
	"titulo": "Jonas e a pedra sentimental",
	"autor": "Clarice Crawling",
	"ano": "2015",
	"numPaginas": 184
}
```

O livro deverá ser adicionado à coleção utilizando o ID 3 (já que o último ID utilizado foi 2), e o objeto criado deverá ser retornado no body do response conforme o seguinte JSON:

```javascript
{
  "id": 3,
  "titulo": "Jonas e a pedra sentimental",
  "autor": "Clarice Crawling",
  "ano": "2015",
  "numPaginas": 184
}
```

Após adicionar o livro, se tentarmos consultá-lo na mesma execução do servidor, ele deverá estar presente na coleção.

**d) Substituindo um livro**

Utilizando o verbo HTTP PUT no recurso http://localhost:3000/livros, deverá ser possível substituir um livro utilizando o mesmo ID existente.

Para isso, o ID deverá ser informado no path da URL e o novo livro deverá ser enviado no body da requisição no mesmo formato de quando um livro é adicionado.

Portanto, considerando o array de exemplo do exercício, se for enviada a seguinte requisição:

PUT http://localhost:3000/livros/2

```javascript
{
  "titulo": "Jonas e a pedra sentimental",
  "autor": "Clarice Crawling",
  "ano": "2015",
  "numPaginas": 184
}
```

O livro enviado deverá **substituir** na coleção, todos os valores das quatro propriedades do livro que existia com o ID 2 e retornar o seguinte objeto com uma mensagem informando da alteração:

```javascript
{
  "mensagem": "Livro substituído."
}
```

Caso não exista um livro na coleção com o ID fornecido pela requisição, deverá ser retornado um objeto com a mensagem:

```javascript
{
  "mensagem": "Não existe livro a ser substituído para o ID informado."
}
```

**e) Alterando um livro**

Além de poder substituir um livro, deverá ser possível também alterar as proriedades de um livro, uma a uma, separadamente. Para isso, deverá ser criado um método para atender requisições enviadas com o verbo HTTP PATCH para o recurso http://localhost:3000/livros.

Para esta requisição, deverá ser enviado o ID do livro a ser alterado como parâmetro path (params) e um objeto JSON no conteúdo (body), que conterá apenas as propriedades que devem ser alteradas no livro com seus respectivos novos valores. Não deverá ser permitido alterar o ID.

Portanto, considerando o array de exemplo do exercício, quando for enviada uma requisição PATCH http://localhost:3000/livros/1 com o seguinte conteúdo (body):

```javascript
{
	"titulo": "Jonas, o Guerreiro"
}
```

O valor da propriedade **titulo** do livro de ID 1 da coleção deve ser alterado e em seguida deve ser retornado:

```javascript
{
  "mensagem": "Livro alterado."
}
```

Caso não exista um livro na coleção com o ID informado pelo request, deve ser retornado:

```javascript
{
  "mensagem": "Não existe livro a ser alterado para o ID informado."
}
```

Este fluxo deve funcionar para qualquer uma das propriedades existentes nos objetos de **livro**, inclusive quando mais de uma propriedade for enviada no request. A única propriedade que não pode ser alterada é o ID.

Após testar uma alteração com o PATCH, execute uma requisição GET sem parâmetro no recurso para conferir se a alteração foi realizada corretamente.

**f) Remoção de um livro**

Para finalizar, deverá ser criado o método de remoção de livros da coleção utilizando o verbo HTTP DELETE em http://localhost:3000/livros.

A requisição para este método deverá conter um parâmetro no path (params) da URL que deverá ser o ID do livro a ser removido, e não deverá conter qualquer conteúdo body.

Portanto, para o array de exemplo do exercício, caso seja enviada uma requisição DELETE http://localhost:3000/livros/1, deverá ser removido o livro que utiliza o ID 1 e em seguida deverá ser retornado:

```javascript
{
  "mensagem": "Livro removido."
}
```

Caso não exista livro na coleção utilizando o ID enviado pela requisição, deverá ser retornado:

```javascript
{
  "mensagem": "Não existe livro a ser removido para o ID informado."
}
```

Após a criação de todos os métodos, teste todos eles em ordens variadas para verificar se funcionarão conforme esperado.

---

###### tags: `módulo 2` `exercícios` `lógica` `nodeJS`
