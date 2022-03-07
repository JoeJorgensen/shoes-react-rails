Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

namespace :api do
  get 'shoes', to: 'shoes#index'
  get 'shoes/:id', to: 'shoes#show'
  post 'shoes', to: 'shoes#create'
  put 'shoes/:id', to: 'shoes#update'
  delete 'shoes/:id', to: 'shoes#destroy'

  end 
end
