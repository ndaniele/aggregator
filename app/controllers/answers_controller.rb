require 'pry'
class AnswersController < ApplicationController

  def create
    question =  Question.find_by(id: params[:question_id])
    answer = question.answers.build(answer_params)
    answer.user_id = current_user.id
    if
      answer.save
      render json: question
    end
  end


  private

  def answer_params
    params.require(:answer).permit(:input)
  end

end