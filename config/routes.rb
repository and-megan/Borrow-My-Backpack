Rails.application.routes.draw do

  namespace :api do
  get 'users/show'
  end

  namespace :api do
  get 'users/index'
  end

  namespace :api do
  get 'users/get_current_user'
  end

  root to: 'static_pages#root.html'

  resources :users, only: [:new, :create, :update]
  resource :session, only: [:new, :create, :destroy]
  namespace :api, defaults: {format: :json} do
    resources :sporting_goods, only: [:new, :create, :index, :show, :update, :destroy]

  end


end
