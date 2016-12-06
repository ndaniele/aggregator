class User < ApplicationRecord
  # Include default devise modules.
  devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :trackable, :validatable,
          :confirmable, :omniauthable
  include DeviseTokenAuth::Concerns::User
  has_many :answers
  has_many :questions, through: :answers #=> user.questions = all questions a user has answered
  has_many :asked_questions, class_name: 'Question' #=> user.asked_questions = all questions a user has asked
    has_many :memberships
    has_many :groups, :through => :memberships

 
    
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
end
