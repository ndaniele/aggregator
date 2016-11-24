class Question < ApplicationRecord
    belongs_to :user
    has_many :comments
    has_many :answers, dependent: :destroy
  
    validates_presence_of :query
    
end
