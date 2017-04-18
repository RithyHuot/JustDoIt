class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credential(
    params[:user][:email],
    params[:user][:password]
    )
    if @user
      login(@user)
      render '/api/users/show', user: @user
    else
      render json: ["Invalid username/password"], status: 422
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render '/api/users/show', user: @user
    else
      render(json: ['You are not sign in'], status: 404)
    end
  end
end
