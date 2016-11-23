class Group < ApplicationRecord
    has_many :memberships
    has_many :users, :through => :memberships
  
    has_many :group_questions
    has_many :questions, :through => :group_questions
    has_many :answers, :through => :questions
end
