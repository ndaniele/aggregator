class Answer < ApplicationRecord
    belongs_to :question #=> added .question method to answers class (i.e. new_answer.question )
    belongs_to :user
  
    validates_presence_of :input
    validates_uniqueness_of :user_id, scope: :question_id
    
end
