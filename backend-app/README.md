# README

Backend Test iCasei

* Deployment instructions
# For backend-app
1. install ruby 2.6.2 & rails 5.2.3
2. install project deps
#> bundle install
3. install postgresql
4. add db access to database.yml if necessary, only for development and test
5. create and migrate DB
#> rake db:create && rake db:migrate
6. install redis
7. rodar servidor locally
#> redis-server 
8. update the .env file with the redis url
9. rodar sidekiq locally
#> bundle exec sidekiq
10. run webserver locally
#> rails s
11. open webpage: localhost:3000
12. open sidekiq webpage: localhost:3000/sidekiq

* How to run the test suite
#> rake spec

# Hope you enjoy, any doubts, pls contact me: (16) 99287-9696