class Business < ApplicationRecord
  validates :restaurant_name, presence: true
  validates :street, presence: true
  validates :city, presence: true

has_many :reviews,
foreign_key: :business_id,
class_name: :Review




end
