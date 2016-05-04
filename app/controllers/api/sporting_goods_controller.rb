class Api::SportingGoodsController < ApplicationController

  def index
    @sporting_goods = []
    sporting_goods = SportingGood.all

    if (params[:filters])
      params[:filters].each do |filter|
        filtered_sg = SportingGood.where(category: filter)
        filtered_sg.each do |sg|
          @sporting_goods.push(sg)
        end
      end
      # return @sporting_goods
      render json: @sporting_goods
    else
      @sporting_goods = SportingGood.all
      render json: @sporting_goods
    end

  end

  def show
    @sporting_good = SportingGood.find(params[:id])
  end

  def create
    sporting_good = current_user.sporting_goods.create!(sporting_good_params)
    render json: sporting_good
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
    :lat, :lng, :description, :category, :filters,
    :pic_url)
  end


end
