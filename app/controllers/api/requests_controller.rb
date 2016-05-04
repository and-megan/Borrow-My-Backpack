class Api::RequestsController < ApplicationController
  def index
    # @requests = Request.all
    #sent requests and received request using my associations
    @sent_requests = current_user.requests
    @received_requests = current_user.received_requests
  end

  def create
    request = current_user.requests.new(request_params)
    if request.save
      render json: request
    else
      render json: request.errors.full_messages, status: 422
    end
  end

  def show
    @request = Request.find(params[:id])
  end

  def destroy
    request = Request.find(params[:id])
    request.destroy!
    render json: request
  end

  def update
    @request = Request.find(params[:id])
    if @request.update(request_params)
      render json: @request

      @request_notification = RequestNotification.new()
      sporting_good = SportingGood.find(@request.sporting_good_id)
      owner = sporting_good.user
      @request_notification.request_id = @request.id
      @request_notification.recipient_id = owner.id

    else
      render json: @request.errors.full_messages
    end
  end
  private
  def request_params
    params.require(:request).permit(
      :sporting_good_id, :message, :start_date, :end_date, :sender_id, :responded, :status_response
    )
  end
end
