class User < ApplicationRecord
    has_secure_password

    has_many :restaurant_reviews
    has_many :favorites
    has_many :worker_reviews
    has_many :restaurants, through: :restaurant_reviews

    validates :first_name, presence: true
    validates :last_name, presence: true
    validates :username, presence: true, uniqueness: true, length: {minimum: 5}
    validates :password, presence: true, length: {minimum: 5}
end
