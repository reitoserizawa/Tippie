class WorkerReviewsController < ApplicationController
    def index
        reviews = WorkerReview.all
        render json: reviews, status: :ok
    end

    def show
        review = find_review
        render json: review, status: :ok
    end

    def create
        review = WorkerReview.create!(review_params)
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
        params.permit(:review, :star, :user_id, :worker_id)
    end

    def find_review
        WorkerReview.find(params[:id])
    end
end
