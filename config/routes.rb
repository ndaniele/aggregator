Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
    
    resources :users, :only => [:show, :create, :new]

    resources :questions, :except => [:edit] do
        resources :answers, :only => [:show, :create, :new]
    end

    resources :groups do
        resources :memberships
    end
    
end
