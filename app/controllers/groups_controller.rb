class GroupsController < ApplicationController
    #before_action: :authenticate_user! #, only: [:edit]
    
    def index
        groups = Group.all
        render json: groups
    end
    
    def new
        group = Group.new
        render json: group
    end
    
    def show
        group = Group.find_by_id(params[:id])
        render json: group
    end
    
end 