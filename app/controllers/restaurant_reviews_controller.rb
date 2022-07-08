class RestaurantReviewsController < ApplicationController
    def index
        reviews = RestaurantReview.all
        render json: reviews, status: :ok
    end

    def show
        review = find_review
        render json: review, status: :ok
    end

    def create
        review = RestaurantReview.create!(review_params)
        render json: review, status: :created
    end

    def update
        review = find_review
        review.update(review_params)
        render json: review, status: :ok
    end

    def destroy
        review = find_review
        review.destroy
        head :no_content    
    end

    private

    def review_params
        params.permit(:review, :star, :user_id, :restaurant_id)
    end

    def find_review
        RestaurantReview.find(params[:id])
    end
end
