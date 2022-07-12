class FavoritesController < ApplicationController
    def index
        favorites = Favorite.all
        render json: favorites, status: :ok
    end

    def show
        favorite = find_favorite
        render json: favorite, status: :ok
    end

    def create
        favorite = Favorite.create!(favorite_params)
        render json: favorite, status: :created
    end

    def destroy
        favorite = find_favorite
        favorite.destroy
        head :no_content    
    end

    private

    def favorite_params
        params.permit(:user_id, :restaurant_id)
    end

    def find_favorite
        Favorite.find(params[:id])
    end
end
