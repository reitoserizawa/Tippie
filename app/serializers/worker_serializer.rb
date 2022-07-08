class WorkerSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :image, :bio

  belongs_to :restaurant
  has_many :worker_reviews
  has_many :users
end
