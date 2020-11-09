class TarifsController < ApplicationController
  before_action :set_tarif, only: [:show, :update, :destroy]
  # before_action :authorized, only: [:create]

  # GET /tarifs
  def index
      @tarifs = Tarif.all
      json_response(@tarifs)
  end

  # POST /tarifs
  def create
      @tarif = Tarif.create!(tarif_params)
      json_response(@tarif, :created)
  end

  # GET /tarifs/:id
  def show
      json_response(@tarif)
  end

  # PUT /tarifs/:id
  def update
      @tarif.update(tarif_params)
      head :no_content
  end

  # DELETE /tarifs/:id
  def destroy
      @tarif.destroy
      head :no_content
  end

  private

  def tarif_params
      # whitelist params
      params.permit(:date_debut, :date_fin)
  end

  def set_tarif
      @tarif = Tarif.find(params[:id])
  end
end

