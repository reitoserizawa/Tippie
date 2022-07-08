class WorkersController < ApplicationController
    def index
        workers = Worker.all
        render json: workers, status: :ok
    end

    def show
        worker = find_worker
        render json: worker, status: :ok
    end

    private

    def find_worker
        Worker.find(params[:id])
    end
end
