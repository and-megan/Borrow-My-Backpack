Rails.application.routes.draw do

  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :sporting_goods, only: [:new, :create, :index, :show, :update, :destroy]
    resource :user, only: [:create, :show, :update]
    resource :session, only: [:show, :create, :destroy]

  end

end
