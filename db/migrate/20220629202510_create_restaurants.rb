class CreateRestaurants < ActiveRecord::Migration[7.0]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.string :address
      t.string :category
      t.string :price
      t.string :image
      t.string :username
      t.string :password_digest

      t.timestamps
    end
  end
end
