class WorkerReviewSerializer < ActiveModel::Serializer
  attributes :id, :review, :star, :user_id, :worker_id, :user_info

  belongs_to :worker
  belongs_to :user

  def user_info
    object.user
  end
end
