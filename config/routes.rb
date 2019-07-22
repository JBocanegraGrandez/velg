Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :show, :update] do
      resources :reviews, only: [:index]
    end
    resources :reviews, only: [:create, :update, :delete]

    resources :businesses, only: [:show, :index] do
      resources :reviews, only:[:create, :index]
    end
  end
end
