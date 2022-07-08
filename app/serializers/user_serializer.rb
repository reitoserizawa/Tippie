class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :image, :bio

  has_many :restaurant_reviews
  has_many :worker_reviews
end
