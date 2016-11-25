class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email 
  has_many :answers 
  has_many :asked_questions, serializer: QuestionSerializer
  has_many :groups, serializer: GroupSerializer
  #has_many :memberships, serializer: UserMembershipsSerializer
end
