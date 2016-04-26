Rails.application.routes.draw do

  root to: 'static_pages#root.html'

  resources :users, only: [:new, :create, :update]
  resource :session, only: [:new, :create, :destroy]
  namespace :api, defaults: {format: :json} do
    resources :sporting_goods, only: [:new, :create, :index, :show, :update, :destroy]

  end


end
