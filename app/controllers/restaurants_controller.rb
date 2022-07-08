class RestaurantsController < ApplicationController
    def index
        restaurants = Restaurant.all
        render json: restaurants, status: :ok
    end

    def show
        restaurant = find_restaurant
        render json: restaurant, status: :ok
    end

    private

    def find_restaurant
        Restaurant.find(params[:id])
    end
end
