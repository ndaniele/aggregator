class GroupSerializer < ActiveModel::Serializer
  attributes :id, :groupname
  has_many :questions
  has_many :users, serializer: UserSerializer
    
end
