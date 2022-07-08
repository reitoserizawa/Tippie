Rails.application.routes.draw do
  resources :restaurants, only: [:index, :show]
  # resources :favorites
  resources :restaurant_reviews
  resources :worker_reviews
  resources :workers, only: [:index, :show]
  resources :users, only: [:index]

  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
end
