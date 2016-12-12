class GroupsController < ApplicationController
    
    def index
        groups = Group.all
        render json: groups
    end
    
    def new
        group = Group.new
        render json: group
    end
    
    def create    
        group = Group.create(group_params)
        render json: group
    end
        
    def createMembership
        user = current_user
        group = Group.find_by_id(params[:group_id])
        group.memberships.build(:user_id => user.id, :group_id => params["group_id"]).save
        render json: group
    end
    
    def update
        group = Group.find_by_id(params[:id])
        group.update(group_params)
        render json: group
        
    end
    
    def show
        group = Group.find_by_id(params[:id])
        render json: group
    end
    
    def my_groups
        user = current_user
        userGroups = user.groups
        render json: userGroups
    end
    
    def destroy
    end
    
     private 

  def group_params
    params.require(:group).permit(:id, :groupname)
  end
    
end 