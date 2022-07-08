class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :category, :price, :image

  has_many :workers
  has_many :restaurant_reviews
  has_many :users

end
