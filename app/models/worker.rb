class Worker < ApplicationRecord
  belongs_to :restaurant
  has_many :worker_reviews
  has_many :users, through: :worker_reviews
end
