class CreateBusinesses < ActiveRecord::Migration[5.2]
  def change
    create_table :businesses do |t|
      t.string :restaurant_name, null: false
      t.string :street, null: false
      t.string :neighborhood
      t.string :city, null: false
      t.string :state
      t.string :zipcode
      t.boolean :delivery
      t.boolean :takeout
      t.boolean :outdoor_seating
      t.boolean :gender_neutral_restrooms
      t.boolean :dogs_allowed
      t.boolean :full_bar
      t.boolean :breakfast
      t.boolean :lunch
      t.boolean :dinner
      t.boolean :brunch

      t.timestamps
    end
    add_index :businesses, :restaurant_name
  end
end
