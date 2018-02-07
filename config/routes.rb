Rails.application.routes.draw do
  root 'recipes#index'
  devise_for :users

  namespace :api do
    namespace :v1 do
      resources :users, only: [:index]
      resources :recipes, only: [:index]
    end
  end
end
