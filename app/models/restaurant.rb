class Restaurant < ApplicationRecord
    has_secure_password

    has_many :workers
    has_many :restaurant_reviews
    has_many :favorites
    has_many :users, through: :restaurant_reviews
end
