class Api::SportingGoodsController < ApplicationController

  def index
    @sporting_goods = []
    sporting_goods = SportingGood.all

    if (params[:filters])
      params[:filters].each do |filter|
        filtered_sg = SportingGood.where(category: filter)
        @sporting_goods.push(filtered_sg)
      end

    else
      @sporting_goods = SportingGood.all
    end

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

  def update
    @sporting_good = SportingGood.find(params[:id])

    if @sporting_good.update(sporting_good_params)
      render json: @sporting_good
    else
      render json: @sporting_good.errors.full_messages
    end

  end

  private

  def sporting_good_params
    params.require(:sporting_good).permit(
    :lat, :lng, :description, :category,
    :pic_url)
  end


end
