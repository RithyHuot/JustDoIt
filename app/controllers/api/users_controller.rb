class Api::UsersController < ApplicationController
  before_action :require_login, except: [:create, :show]

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render :show
    else
      render :error, status: 422
    end
  end

  def update
    @user = User.find(params[:id])

    if @user.update(user_params)
      render :show
    else
      render :error, status: 422
    end

  end

  def show
    @user = User.find(params[:id])

    if @user
      render :show
    else
      render :error, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :first_name, :last_name, :location, :image, :bio)
  end
end
