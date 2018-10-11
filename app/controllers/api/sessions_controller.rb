class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])

    if @user
      login(@user)
      # redirect_to homepage #is homepage biz index?
      # render json: ["log in successfully (testing)"], status: 201 #for testing only
      render "api/users/user.json.jbuilder"
    else
      render json: ["Invalid username/password combination"], status: 401
    end
  end

  def destroy
    logout
    render json: ['it worked, user destroyed'], status: 201#comonent will render something = to yelp=s "/seeyousoon"
  end

end
