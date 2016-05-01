class Api::RequestsController < ApplicationController
  def index
    @requests = Request.all
  end

  def create
    request = current_user.requests.create!(request_params)
    render json: request
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
    else
      render json: @request.errors.full_messages
    end
  end
  private
  def request_params
    params.require(:request).permit(
      :sporting_good_id, :message, :start_date, :end_date, :sender_id
    )
  end
end
