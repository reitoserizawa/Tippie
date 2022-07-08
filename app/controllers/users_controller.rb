class UsersController < ApplicationController

    def index
        users = User.all
        render json: users, status: :ok
    end

    def show
        current_user = User.find(session[:current_user])
        puts "User ID:#{session[:current_user]}"
        render json: current_user, status: :ok
    end

    def create
        user = User.create!(user_params)
        if user.valid?
            session[:current_user] = user.id
            render json: user, status: 201
        else
            render json: { error: "Invalid user" }, status: 422
        end
    end

    private

    def user_params
        params.permit(:first_name, :last_name, :image, :bio, :username, :password, :password_confirmation)
    end

    def find_user
        User.find(params[:id])
    end

end
