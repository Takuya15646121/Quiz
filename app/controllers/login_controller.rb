class LoginController < ApplicationController
  skip_before_action :authenticate_user_from_token!, only: [:index]
  def index
    render "index"
  end
end
