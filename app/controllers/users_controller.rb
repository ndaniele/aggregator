class UsersController < ApplicationController
    
    def show
        user = User.find_by_id(params[:id])
        render json: user
    end
    
    def edit
    end
    
    def update_password
    end
    
end 