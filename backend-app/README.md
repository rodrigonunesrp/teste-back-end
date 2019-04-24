# README

Aplicação Teste iCasei
Front e Backend

* Deployment instructions
# For backend-app
1. instalar ruby 2.6.2 & rails 5.2.3
2. instalar dependências do projeto
#> bundle install
3. instalar postgresql
4. incluir acesso ao db no database.yml se necessário, para development e test
5. criar e migrar DB
#> rake db:create && rake db:migrate
6. install redis
7. rodar servidor
#> redis-server
8. update the .env file with the redis url
9. rodar sidekiq
#> bundle exec sidekiq
10. rodar servidor web
#> rails s
11. abrir página: localhost:3000
12. abrir página sidekiq: localhost:3000/sidekiq

# For client-app
1. instalar nodejs
2. instalar dependências
#> npm install
3. rodar servidor com auto reload
#> npm run watch
4. abrir página: localhost:4000

* How to run the test suite
#> rake spec

# Espero que gostem, qualquer dúvida, entrem em contato: (16) 99287-9696