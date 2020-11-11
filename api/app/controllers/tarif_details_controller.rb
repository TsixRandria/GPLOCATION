class TarifDetailsController < ApplicationController
    before_action :set_tarif, only: [:show, :update, :destroy]
  
    # before_action :create do
    #   unless self.prix.blank? then self.prix.gsub(/\D/, '').to_i end
    # end
  
    # GET /tarif_details
    def index
      @tarif_details = Tarif.TarifDetail.all
  
      render json: @tarif_details
    end
  
    # GET /tarif_details/1
    def show
      render json: @tarif_detail
    end
  
    # POST /tarif_details
    def create
      @tarif_detail = Tarif.TarifDetail.build(tarif_params)
     
  
      if @tarif_detail.save
        render json: @tarif_detail, status: :created, location: @tarif_detail
      else
        render json: @tarif_detail.errors, status: :unprocessable_entity
      end
    end
  
    # PATCH/PUT /tarif_details/1
    def update
      if @tarif_detail.update(tarif_params)
        render json: @tarif_detail
      else
        render json: @tarif_detail.errors, status: :unprocessable_entity
      end
    end
  
    # DELETE /tarif_details/1
    def destroy
      @tarif_detail.destroy
    end
  
    private
      # Use callbacks to share common setup or constraints between actions.
      def set_tarif
        @tarif_detail = TarifDetail.find(params[:id])
      end
  
      # Only allow a trusted parameter "white list" through.
      def tarif_params
       params.permit(:duree, :prix)
      end
  end