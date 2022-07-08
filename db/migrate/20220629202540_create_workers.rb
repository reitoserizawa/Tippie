class CreateWorkers < ActiveRecord::Migration[7.0]
  def change
    create_table :workers do |t|
      t.string :first_name
      t.string :last_name
      t.string :image
      t.string :bio
      t.belongs_to :restaurant, null: false, foreign_key: true

      t.timestamps
    end
  end
end
