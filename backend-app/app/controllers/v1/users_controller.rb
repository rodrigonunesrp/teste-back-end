class V1::UsersController < ApplicationController
  def create
    begin
      # user_access_data = user_access_params.blank? ? nil : user_access_params.to_h
      user_access_data = user_params["email"].blank? ? user_access_params.to_h : nil
      CollectGuidWorker.perform_async(user_params.to_h, user_access_data)
      render json: "OK".to_json, status: :ok
    rescue Exception => e
      render json: "Monitoring data not saved. Errors: " + e, status: :ok
    end  
  end

  private
  def user_access_params
    params.require(:user_access).permit(:url, :created_at)
  end

  def user_params
    params.require(:user).permit(:email, :name, :guid)
  end

end
