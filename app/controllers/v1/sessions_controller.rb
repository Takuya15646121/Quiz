module V1
  class SessionsController < ApplicationController
    skip_before_action :authenticate_user_from_token!

    # POST /v1/login
    def create
      @user = User.find_for_database_authentication(email: params[:email])
      return invalid_email unless @user
      if @user.valid_password?(params[:password])
        sign_in :user, @user
        render json: @user, serializer: SessionSerializer, root: nil
      else
        invalid_password
      end
    end

    private

    def invalid_email
      #warden.custom_failure!
      render json: { error: "メールアドレスが正しくありません" }, status: 403
    end

    def invalid_password
      warden.custom_failure!
      render json: { error: "パスワードが正しくありません" }, status: 403
    end
  end
end