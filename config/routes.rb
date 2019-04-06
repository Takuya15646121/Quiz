Rails.application.routes.draw do

  root to: "login#index"

  get '/home/index', to: "login#index"

  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :v1, defaults: { format: :json } do
    resource :login, only: [:create], controller: :sessions
    resource :users, only: [:create]
  end
end
