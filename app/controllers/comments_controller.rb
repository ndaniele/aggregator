require 'pry'
class CommentsController < ApplicationController

  def create
      #binding.pry
      #raise params.inspect
    question =  Question.find_by(id: params[:question_id])
    comment = question.comments.new(comment: params["comment"], question_id: question.id)
    if
      comment.save
      render json: question
    end
  end


  private

  def comment_params
    params.require(:comment).permit(:comment, :question_id)
  end

end