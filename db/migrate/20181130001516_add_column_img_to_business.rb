class AddColumnImgToBusiness < ActiveRecord::Migration[5.2]
  def change
    add_column :businesses, :img, :string
  end
end
