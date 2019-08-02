class Api::BusinessesController < ApplicationController

  def index
    # @business = Business.all
    # render :index
    @businesses = Business.search_businesses(params[:data])
    # debugger
    # if params['YOLO']
    #   #find by params[yolo] that matches columns and whatever
    #   #@business = the return of the previous line
    #   #render index
    # else
    #   @business = Business.all
    #   render :index
    #
    #
    # end

    if @businesses
      render 'api/businesses/index'
    else
      @businesses = Business.all
      render 'api/businesses/index'
    end
  end

  def show
    @business = Business.find(params[:id])
    render 'api/businesses/show'
  end


  def business_params
    params.require(:business).permit(:restaurant_name, :city, :neighborhood, :state, :street)
  end
end
