class Api::BusinessesController < ApplicationController

  def index
    # @business = Business.all
    # render :index

    if params['YOLO']
      #find by params[yolo] that matches columns and whatever
      #@business = the return of the previous line
      #render index
    else
      @business = Business.all
      render :index


    end 
  end

  def show
    @business = Business.find(params[:id])
    render 'api/businesses/show'
  end


  # def business_params
  #   params.require(:business).permit(:restaurant_name, :city, :neighborhood, :state, :street)
  # end
end
