Rails.application.routes.draw do
  root 'static_pages#root'
  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create]
    resources :groups, except: [:new, :edit]
    resources :events, except: [:new, :edit]

    post '/groups/:id/adduser', to: 'groups#adduser'
    delete '/groups/:id/removeuser', to: 'groups#removeuser'

    post '/groups/:groupId/events/:id/adduser', to: 'events#adduser'
    delete `/groups/:groupId/events/:id/removeuser`, to: 'events#removeuser'
  end
end
