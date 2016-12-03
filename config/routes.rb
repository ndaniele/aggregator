Rails.application.routes.draw do
    
  root 'application#index'
    
  post '/groups/join' => 'groups#createMembership'
    
  get '/groups/my_groups' => 'groups#my_groups'
    
  get '/questions/my_questions' => 'questions#my_questions'
    
  get '/questions/my_asked_questions' => 'questions#my_asked_questions'
    
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
    
    resources :users, :only => [:show, :edit]

    resources :questions, :except => [:edit] do
        resources :answers, :only => [:show, :create, :new]
        resources :comments, :only => [:show, :create, :new]
    end

    resources :groups do
        resources :memberships
    end
    
end
