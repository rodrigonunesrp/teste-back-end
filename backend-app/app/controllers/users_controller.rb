class UsersController < ApplicationController
  def index
    @user_accesses = UserAccess.all.includes(:user).order("created_at DESC").limit(50)
  end
end
