class WorkerReviewSerializer < ActiveModel::Serializer
  attributes :id, :review, :star, :user_id, :worker_id, :updated_at, :user_info, :worker_info

  belongs_to :worker
  belongs_to :user

  def user_info
    object.user
  end

  def worker_info
    object.worker
  end
end
