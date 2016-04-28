class Api::SportingGoodsController < ApplicationController

  def index
    @sporting_goods = SportingGood.all
  end

  def create
    sporting_good = current_user.sporting_goods.create!(sporting_good_params)
    render json: sporting_good
  end

  def show
    @sporting_good = SportingGood.find(params[:id])
  end

  def destroy
    sporting_good = SportingGood.find(params[:id])
    sporting_good.destroy!
    render json: sporting_good
  end

  private

  def sporting_good_params
    params.require(:sporting_good).permit(
    :lat, :lng, :description, :category,
    :pic_url)
  end


end
