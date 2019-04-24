require 'test_helper'

class V1::UserControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get v1_user_create_url
    assert_response :success
  end

end
