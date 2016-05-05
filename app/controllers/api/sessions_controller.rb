class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
		if @user
			login!(@user)
			render "api/users/show"
		else
			@errors = ['email or password is incorrect']
			render "api/shared/error", status: 401
		end
  end

  def destroy
    @user = current_user
    if @user
      logout!
      render "api/users/show"
    else
      @errors = ['no current user']
      render "api/shared/error"
    end
  end

  def show

    if current_user
      @user = current_user
      render "api/users/show"
    else
      @errors = nil
      render "api/shared/error", status: 401
    end
  end
end
