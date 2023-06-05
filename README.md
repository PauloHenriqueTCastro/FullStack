# FullStack
BACKEND

CRUD COMPLETO DA NAS ROTAS 


POST /users
{
	"name": "xxxx",
	"email": "xxxxx@mail.com",
	"phone": "321312312",
	"password": "xxxxxxxx"
}

rota responsável pela criação de novos usuários (ignora chaves adicionais)


GET /users
no body

Rota responsável pela obtenção de usuários


PATCH /users/:id

{
	"name": "xxxxx",
	"email": "xxxxx@mail.com",
	"phone": “xxxxxxxxx”,
	"chave":"adicional"
}

Rota responsável pela atualização de novos usuários (ignora chaves adicionais)


DELETE /users/:id
no body

rota responsável pela deleção de usuários 


POST /contacts

{
	"name": "xxxxxxx",
	"email": "xxxxxxt@mail.com",
	"phone": "xxxxxxxx"
}
Rota responsável pela criação de contatos para um usuário, é necessário passar um Bearer token para que seja possível a obtenção do id do usuário 


GET /contacts
no body

Rota responsável pela obtenção de todos os contatos de um usuário, é necessário passar um Bearer token para que seja possível a obtenção do id do usuário,


PATCH /contacts/:id

{
	"name": "Não é mais Paulo",
	"email": "mail1@mail.com",
	"phone": 321312312
}

Rota responsável pela atualização dos contatos, é necessário passar um Bearer token para que seja possível a obtenção do id do usuário, também é necessário passa o id do contato para a atualização ser feita


DELETE /contacts/:id
no body

Rota responsável pela deleção dos contatos de um usuário, é necessário passar um Bearer token para que seja possível a obtenção do id do usuário, também é necessário passa o id do contato para a atualização ser feita



POST /login

Rota responsável pela criação do token de login de um usuário 


FRONT END

FrontEnd simples mas elaborado com as seguinte 3 paginas:
" ": responsável pelo login do usuario na dashboard
"/register": responsável pelo registro do usuário no site
"/dashboard": Área responsável pela criação de novos contatos e também a exibição dos mesmos 



