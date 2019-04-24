require 'sidekiq/web'
Rails.application.routes.draw do

  namespace :v1, defaults: { format: :json } do
    resources :users, only: [:create]
  end
  
  resources :users, only: [:index]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'users#index'

  Rails.application.routes.draw do
    mount Sidekiq::Web => '/sidekiq'
  end
end
