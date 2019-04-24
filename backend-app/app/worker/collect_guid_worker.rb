class CollectGuidWorker

  include Sidekiq::Worker
  def perform(user_params, user_access_params)
    @user = User.find_or_create_by(guid: user_params["guid"])
    
    unless user_params["email"].blank?
      @user.update(user_params)
    
    else
      user_access = UserAccess.new(user_access_params)
      user_access.user_id = @user.id
      user_access.save
    end
    
  end
end