Rails.application.routes.draw do
  root 'static_pages#root'
  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create]
    resources :groups, except: [:new, :edit]


    post '/groups/:id/adduser', to: 'groups#adduser'
    post '/groups/:id/removeuser', to: 'groups#removeuser'
  end
end
