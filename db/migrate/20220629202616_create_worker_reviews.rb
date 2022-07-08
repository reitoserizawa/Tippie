class CreateWorkerReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :worker_reviews do |t|
      t.string :review
      t.integer :star
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :worker, null: false, foreign_key: true

      t.timestamps
    end
  end
end
