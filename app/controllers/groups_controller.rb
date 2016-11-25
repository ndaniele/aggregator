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
    
    def create    
        group = Group.create(group_params)
        #group.memberships.build(:user_id => params[:group][:user_id], :group_id => @group.id).save
        render json: group #, status: 201
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
    
    def destroy
    end
    
     private 

  def group_params
    params.require(:group).permit(:id, :groupname)
  end
    
end 