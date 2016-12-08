require 'pry'
class QuestionsController < ApplicationController
    #before_action: :authenticate_user! #, only: [:create, :update, :destroy]
    
    
    def question_data
        question = Question.find(params[:id])
        render json: QuestionSerializer.serialize(question)
    end

    def index
        questions = Question.all
        render json: questions
    end

 #   def new
 #       #raise params.inspect
 #       @group = Group.find(params[:group])
 #       @question = Question.new 
 #       @question.answers.build
 #   end
    
    
    def my_questions
        user = current_user
        myQuestions = []
        userQuestions = user.groups.each do |group|
            group.group_questions.each do |groupQuestion|
                myQuestions << groupQuestion.question
            end
        end       
        render json: myQuestions
    end
    
    
    def my_asked_questions
        user = current_user
        myAskedQuestions = []
        userAskedQuestions = 
            user.questions.each do |question|
                myAskedQuestions << question
            end
        render json: myAskedQuestions
    end
    
    
    def create
        user = current_user
        question = user.asked_questions.build(question_params)
            if 
            question.save
                groupArray = params["groups"]
                groupArray.each { |id| 
                    groupid = id 
                    GroupQuestion.create(group_id: groupid, question_id: question.id )
                }
 
            render json: question
        end
    end

 #   def update
 #       @question = Question.find(params[:id])
 #       @question.update(question_params)
 #       redirect_to question_answer_path(@question)
 #   end

    def show
        question = Question.find(params[:id])
        render json: question
    end

 #   def destroy
 #       @question = Question.find_by(id: params[:id])
 #       @answers = Answer.where(question_id: @question.id)
 #       @question.destroy
#
 #       @answers.each do |answer|
 #           answer.destroy
 #       end
 #       redirect_to user_path(current_user)
 #   end


    private 

        def question_params
            params.require(:question).permit(:query, {:answers_attributes => [:input, :user_id]})
        end



  

end