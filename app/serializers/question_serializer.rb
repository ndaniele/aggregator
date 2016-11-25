class QuestionSerializer < ActiveModel::Serializer
  attributes :id, :query, :user_id
  has_many :answers, serializer: QuestionAnswerSerializer
  has_many :comments
end
