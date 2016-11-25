class Question < ApplicationRecord
    belongs_to :user
    has_many :comments
    has_many :answers, dependent: :destroy
    
    has_many :group_questions
    has_many :groups, :through => :group_questions
  
    validates_presence_of :query
    
end
