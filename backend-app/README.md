# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Deployment instructions
# For backend-app
1. instalar ruby 2.6.2 & rails 5.2.3
2. bundle install
3. instalar postgresql
4. incluir acesso ao db no database.yml se necessário, para development e test
5. rake db:create && rake db:migrate
6. install redis
7. redis-server
8. update the .env file with the redis url
9. bundle exec sidekiq
10. rails s
11. abrir página: localhost:3000

# For client-app
1. instalar nodejs
2. npm install
3. npm run watch
4. abrir página: localhost:4000