require 'test_helper'

class Api::UsersControllerTest < ActionController::TestCase
  test "should get show" do
    get :show
    assert_response :success
  end

  test "should get index" do
    get :index
    assert_response :success
  end

  test "should get get_current_user" do
    get :get_current_user
    assert_response :success
  end

end
