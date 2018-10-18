class Api::ReviewsController < ApplicationController

  # def index
  #   @business = Business.all
  #
  #   render :index
  # end

  def show
    @review = Review.find(params[:id])
    render 'api/reviews/show'
  end

  def create
    @review = Review.new(params)

    if @review.save
    render 'api/reviews/show'

    else
      render json: @review.errors.full_messages, status: 422
    end
  end


  private

  def review_params
    params.require(:review).permit(:body)
  end
end
