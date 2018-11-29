class Business < ApplicationRecord
  validates :restaurant_name, presence: true
  validates :street, presence: true
  validates :city, presence: true

has_many :reviews,
foreign_key: :business_id,
class_name: :Review


  def self.search_businesses(arg)

  a = (Business.where("restaurant_name LIKE (?)", "%#{arg}%").map {|el| el}) +
      (Business.where("restaurant_name LIKE (?)", "%#{arg.downcase}%").map {|el| el}) +
      (Business.where("restaurant_name LIKE (?)", "%#{arg.upcase}%").map {|el| el}) +
      (Business.where("restaurant_name LIKE (?)", "%#{arg.capitalize}%").map {|el| el}) +

      (Business.where("cat1 LIKE (?)", "%#{arg}%").map {|el| el}) +
      (Business.where("cat1 LIKE (?)", "%#{arg.downcase}%").map {|el| el}) +
      (Business.where("cat1 LIKE (?)", "%#{arg.upcase}%").map {|el| el}) +
      (Business.where("cat1 LIKE (?)", "%#{arg.capitalize}%").map {|el| el}) +
      
      (Business.where("cat2 LIKE (?)", "%#{arg}%").map {|el| el}) +
      (Business.where("cat2 LIKE (?)", "%#{arg.downcase}%").map {|el| el}) +
      (Business.where("cat2 LIKE (?)", "%#{arg.upcase}%").map {|el| el}) +
      (Business.where("cat2 LIKE (?)", "%#{arg.capitalize}%").map {|el| el})


  a.uniq
  end

end
