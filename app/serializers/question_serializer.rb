class QuestionSerializer < ActiveModel::Serializer
  attributes :id, :query, :user_id, :votes
  has_many :answers, serializer: QuestionAnswerSerializer
  has_many :comments
  has_many :groups, serializer: GroupSerializer
end
