class Review < ApplicationRecord
  validates :body, presence: true

  belongs_to :business,
  foreign_key: :business_id,
  class_name: :Business


  belongs_to :author,
  foreign_key: :author_id,
  class_name: :User
end
