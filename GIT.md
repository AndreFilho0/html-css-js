Para logar :
 -git config --global user.name ''
 -git config --global user.email ''

Para criar uma pasta do seus repositorios e já dar init nela automatico:
 - git clone htpps://......
 Para adicionar as coisas:
  -git add .    (para adicionar tudo)
  -git commit -m ''
  - git push -u origin main (mandar direto para a main/master)

Para adicionar um aquivo/pasta já existente no repositorio já existente:
 - git init
 - git add .
 - git commit -m ''
 - git remote add origin htpps://...    (aqui vc vai estar passando o repositorio)
 - git push -u origin master

 Para criar uma ramificação do codigo:
  - git checkout -b andre/addalgumacoisa  (cria uma nova brende)
  - git add . 
  - git commit -m ''
  - git push origin andre/addalgumacoisa  (já está no github, mas está )
  Agora dentro do github temos que fazer algumas coisas para aceitar essa nova brend:
   -
  
Para poder pegar o codigo da nuven e trazer para nossa maquina fazemos :
 - git pull (obs: Temos que estar dentro da nossa master/main)
 