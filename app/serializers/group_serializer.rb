class GroupSerializer < ActiveModel::Serializer
  attributes :id, :groupname
  has_many :questions
end
