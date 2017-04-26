Rails.application.routes.draw do
  root 'static_pages#root'
  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create]
    resources :groups, except: [:new, :edit] do
      resources :events, only: [:index]
    end

    resources :events, except: [:new, :edit, :index]

    post '/groups/:id/adduser', to: 'groups#adduser'
    delete '/groups/:id/removeuser', to: 'groups#removeuser'
    post '/groups/search', to: 'groups#search'

    post '/events/:id/adduser', to: 'events#adduser'
    delete '/events/:id/removeuser', to: 'events#removeuser'
  end
end
