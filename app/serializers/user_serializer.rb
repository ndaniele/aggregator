class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email 
  has_many :answers 
  has_many :questions
    has_many :memberships, serializer: UserMembershipsSerializer
end
