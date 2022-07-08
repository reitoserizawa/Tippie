class ApplicationController < ActionController::API
    include ActionController::Cookies
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :record_invalid

    def current_user
        User.find_by(id: session[:current_user])
    end

    def is_authorized?
        return render json: { error: "Not Authorized" }, status: :unauthorized unless current_user
    end

    private

    def record_not_found (e)
        render json: {error: "#{e.model} not found"}, status: :not_found
    end

    def record_invalid (e)
        render json: {errors: e.record.errors.full_messages}, status: :unprocessable_entity
    end
end
