class AddCategoriesToBusiness < ActiveRecord::Migration[5.2]
  def change
    add_column :businesses, :cat1, :string
    add_column :businesses, :cat2, :string
  end
end
