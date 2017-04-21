class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  helper_method :current_user

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def login(user)
    session[:session_token] = user.reset_session_token!
  end

  def logout
    @current_user.reset_session_token!
    session[:session_token] = nil
  end

  def require_login
    render(json: ["You are not loggin"], status: 404) unless current_user
  end
end
