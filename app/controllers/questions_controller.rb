require 'pry'
class QuestionsController < ApplicationController
     
    def question_data
        question = Question.find(params[:id])
        render json: QuestionSerializer.serialize(question)
    end

    def index
        questions = Question.all
        render json: questions
    end
    
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
            user.asked_questions.each do |question|
                myAskedQuestions << question
            end
        render json: myAskedQuestions
    end
    
    
    def create
        user = current_user
        question = user.asked_questions.new(question_params)
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
    
    def update
        #binding.pry
        #raise params.inspect
        question = Question.find(params[:id])
        question.votes = params["votes"]
        question.save
    end
    

    def show
        question = Question.find(params[:id])
        render json: question
    end


    private 

        def question_params
            params.require(:question).permit(:query, {:answers_attributes => [:input, :user_id]})
        end

end