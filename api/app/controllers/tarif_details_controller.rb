class TarifDetailsController < ApplicationController
    before_action :set_tarif, only: [:show, :update, :destroy]
  
    before_action :create do
      unless self.prix.blank? then self.prix.gsub(/\D/, '').to_i end
    end
  
    # GET /tarifs
    def index
      @tarifs = Tarif.all
  
      render json: @tarifs
    end
  
    # GET /tarifs/1
    def show
      render json: @tarif
    end
  
    # POST /tarifs
    def create
      @tarif = Tarif.new(tarif_params)
     
  
      if @tarif.save
        render json: tarif, status: :created, location: @tarif
      else
        render json: @tarif.errors, status: :unprocessable_entity
      end
    end
  
    def tarif
      @tarif.to_i
    end
  
    # PATCH/PUT /tarifs/1
    def update
      if @tarif.update(tarif_params)
        render json: @tarif
      else
        render json: @tarif.errors, status: :unprocessable_entity
      end
    end
  
    # DELETE /tarifs/1
    def destroy
      @tarif.destroy
    end
  
    private
      # Use callbacks to share common setup or constraints between actions.
      def set_tarif
        @tarif = Tarif.find(params[:id])
      end
  
      # Only allow a trusted parameter "white list" through.
      def tarif_params
        params.fetch(:tarif, {}).permit(:prix => [])
      end
  end