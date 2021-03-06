Rails.application.routes.draw do
  root 'static_pages#root'
  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :update, :show] do
    end
    resources :groups, except: [:new, :edit] do
      resources :events, only: [:index]
    end

    resources :events, except: [:new, :edit, :index]

    post '/groups/:id/adduser', to: 'groups#adduser'
    delete '/groups/:id/removeuser', to: 'groups#removeuser'
    post '/groups/search', to: 'groups#search'

    post '/events/:id/adduser', to: 'events#adduser'
    delete '/events/:id/removeuser', to: 'events#removeuser'

    get '/events/users/:id', to: 'events#userevents'
  end
end
