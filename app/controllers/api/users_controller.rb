class Api::UsersController < ApplicationController
  # before_action :set_user, only: [:show, :edit, :update, :destroy]

  # GET /users
  # GET /users.json
  # def index
  #   @users = User.all
  # end

  # GET /users/1
  # GET /users/1.json
  def show
    @user = User.find(params[:id])
    # @user = current_user # is this ok?

  end

  # GET /users/new
  def new
    @user = User.new
  end

  # GET /users/1/edit
  def edit
  end

  # POST /users
  # POST /users.json
  def create
    @user = User.new(user_params)

    # respond_to do |format|
      if @user.save
        login(@user)
        render 'api/users/show' # homepage = business index maybe?

        # format.html { redirect_to @user, notice: 'User was successfully created.' }
        # format.json { render :show, status: :created, location: @user }

      else
        # format.html { render :new }
        # format.json { render json: @user.errors, status: :unprocessable_entity }
        render json: @user.errors.full_messages, status: 422
      end
  end
    def update
      @user = User.find(params[:id])
      if @user.update(user_params)
        render 'api/users/show'
      else
        render json: @user.errors.full_messages, status: 422
      end
    
  end

  # PATCH/PUT /users/1
  # PATCH/PUT /users/1.json

  # DELETE /users/1
  # DELETE /users/1.json
  # def destroy
  #   @user.destroy
  #   respond_to do |format|
  #     format.html { redirect_to users_url, notice: 'User was successfully destroyed.' }
  #     format.json { head :no_content }
  #   end
  # end

  private
    # maybe callback?
    def set_user
      @user = User.find(params[:id])
    end


    def user_params
      params.require(:user).permit(:first_name, :last_name, :email, :password, :zipcode)
    end

end