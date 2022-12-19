
# CEAPP- API 

O CEAPP nasceu como um projeto acadêmico visando desenvolver um aplicativo para a gestão do dia a dia de um estacionamento. No aplicativo é possível registrar um carro que esteja entrando no estacionamento, registrando sua data de entrada e saída realizando o cálculo de preço sobre o período de estadia no estabelecimento.



## Tecnologias Utilizadas:

A api foi desenvolvida utilizando NodeJS com o postgres de banco de dados, virtualizando o aplicativo em containers docker. Configuramos um docker-compose para facilitar a inicialização do projeto em ambiente local.
Para rodar o projeto você vai precisar do NodeJS e docker instalados na sua máquina.

## Rodando o projeto:
Clone o projeto na pasta desejada. 
```
git clone git@github.com:antoniovuono/ceapp-api.git
```
Instale as dependências do projeto rodando yarn dentro da pasta principal.
```
yarn
```
Rode o comando do docker-compose para rodar o servidor e o banco de dados.
```
docker-compose up
```
Caso queira pausar os containers docker você pode dar o comando stp.
```
docker-compose stop
```
Se quiser destruir e apagar os containers você pode utilizar o down.
```
docker-compose down
```
<h3>📲 Versão Mobile</h3>
<p> Segue a versão mobile do aplicativo desenvolvida com react-native para rodar em paralelo com o back-end. </p>
<link>https://github.com/antoniovuono/ceapp-mobile</link>

