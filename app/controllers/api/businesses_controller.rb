class Api::BusinessesController < ApplicationController

  def index
    @business = Business.all

    render :index
  end

  def show
    @business = Business.find(params[:id])
    render 'api/businesses/show'
  end


  # def business_params
  #   params.require(:business).permit(:restaurant_name, :city, :neighborhood, :state, :street)
  # end
end
