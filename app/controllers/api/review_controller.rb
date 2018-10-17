class Review::BusinessesController < ApplicationController

  # def index
  #   @business = Business.all
  #
  #   render :index
  # end

  def show
    @business = Business.find(params[:id])
    render 'api/businesses/show'
  end

  def create
    @review = Review.new(params)
  end


  private 

  def review_params
    params.require(:review).permit(:review_params)
  end
end
