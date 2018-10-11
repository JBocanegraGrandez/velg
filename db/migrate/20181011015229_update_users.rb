class UpdateUsers < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :username
    remove_column :users, :location
    add_column :users, :first_name, :string, null: false
    add_column :users, :last_name, :string, null: false
    add_column :users, :zipcode, :integer, null: false
  end
end
