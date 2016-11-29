require 'pry'
class QuestionsController < ApplicationController
    #before_action: :authenticate_user! #, only: [:create, :update, :destroy]
    
    
    def question_data
        question = Question.find(params[:id])
        render json: QuestionSerializer.serialize(question)
        #render question.to_json
    end

    def index
        questions = Question.all
        render json: questions
    end

    def new
        #raise params.inspect
        @group = Group.find(params[:group])
        @question = Question.new 
        @question.answers.build
    end
    
    
    #def create 
        #raise params.inspect
        #question = Question.create(question_params)
        #render json: question
    #end

    
    def create
       #raise params.inspect
        user = User.find_by_id(params[:user_id])
       question = user.asked_questions.build(question_params)
       #group = Group.find_by(:id => params[:group_id])
        if 
            question.save
                groupArray = params["groups"]
                groupArray.each { |id| 
                    
                #binding.pry
                    groupid = id 
                    #group = Group.find_by(id: groupid)
                    GroupQuestion.create(group_id: groupid, question_id: question.id )
                }
            
            
            #group_question = GroupQuestion.create(:group_id => group.id, :question_id => question.id)
            render json: question
  #          #redirect_to questions_path 
  #          render json: @question, status: 201
  #      else
  #          flash[:error] = "#{@question.errors.full_messages.join(" & ")}"
  #          redirect_to new_question_path(:group => @group.id)
        end
    end

    def update
        @question = Question.find(params[:id])
        @question.update(question_params)
        redirect_to question_answer_path(@question)
    end

    def show
        question = Question.find(params[:id])
        render json: question
    end

    def destroy
        @question = Question.find_by(id: params[:id])
        @answers = Answer.where(question_id: @question.id)
        @question.destroy

        @answers.each do |answer|
            answer.destroy
        end
        redirect_to user_path(current_user)
        #redirect_to questions_path
    end

    def most_popular
    end


    private 

        def question_params
            params.require(:question).permit(:query, {:answers_attributes => [:input, :user_id]})
        end



  

end