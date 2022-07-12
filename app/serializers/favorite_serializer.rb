class FavoriteSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :restaurant_id, :user_info, :restaurant_info

  belongs_to :restaurant
  belongs_to :user

  def user_info
    object.user
  end

  def restaurant_info
    object.restaurant
  end
end
