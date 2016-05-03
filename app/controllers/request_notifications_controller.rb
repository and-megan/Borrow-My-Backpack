class RequestNotificationsController < ApplicationController
  def index
    @request_notifications = RequestNotification.all
  end

  def create
    request_notification = current_user.request_notifications.create!(request_notification_params)
    render json: request_notification
  end

  def show
    @request_notification = RequestNotification.find(params[:id])
  end

  def destroy
    request_notification = RequestNotification.find(params[:id])
    request_notification.destroy!
    render json: request_notification
  end


  private
  def request_notification_params
    params.require(:request_notification).permit(
      :recipient_id, :request_id
    )
  end


end
