Rails.application.routes.draw do
  root 'recipes#index'
  devise_for :users

  get '/recipes', to: 'recipes#index'
  get '/recipes/:id', to: 'recipes#index'
  get '/recipes/new', to: 'recipes#index'

  namespace :api do
    namespace :v1 do
      resources :users, only: [:index]
      resources :recipes, only: [:index, :show]
    end
  end
end
