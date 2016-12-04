require 'pry'
class CommentsController < ApplicationController

# def new
#   @question =  Question.find_by(id: params[:question_id])
#   if @question == nil
#       redirect_to root_path
#   else
#     #flash[:error] = "please select a question to answer"
#     redirect_to question_path(@question)
#   end
# end

# def show
#   @question = Question.find_by(id: params[:question_id])
#   @answers = @question.answers.build

#   @question_answer = Question.find_by(:id => @question.id).answers.first
#   respond_to do |f|
#     f.html { render :show }
#     f.json { render json: @question_answer }
#   end
# end

  def create
      #binding.pry
    question =  Question.find_by(id: params[:question_id])
    comment = question.comments.build(comment: params["comment"], question_id: question.id)
    #comment.user_id = params["user_id"] #session[:user_id]
    if
      comment.save
      render json: question
    #else
    #  flash[:error] = "!!You can only answer a question once!!"
    #  redirect_to question_path(@question)
    end
  end


  private

  def comment_params
    params.require(:comment).permit(:comment, :question_id)
  end

end