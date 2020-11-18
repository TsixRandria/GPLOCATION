class GestionTempController < ApplicationController

    # GET /gestiontemp
    def index
        @gestion_temp = GestionTemp.all
    end

     # POST /gestiontemp
    def create
        @gestion_temp = GestionTemp.new(gestion_temp_params)
        @gestion_temp.save
        render json: @gestion_temp, status: :created, location: @gestion_temp
    end





    private

   def gestion_temp_params
        params.permit(:jour, :surplus)
   end
   
end