class TarifController < ApplicationController
   
    #GET /tarifs
    def index
        @tarifs = Tarif.all
        json_response(@tarifs)
    end

    #POST /tarifs
    def create
        @tarif = Tarif.create!(tarif_params)
        json_response(@tarif, :created)
    end
    
    #GET /tarifs/:id
    def show
        json_response(@tarif)
    end

    #PUT /tarifs/:id
    def update
        @tarif.update(tarif_params)
        head :no_content
    end
    
    #DELETE /tarifs/:id
    def destroy
        @tarif.destroy(tarif_params)
        head :no_content
    end

    private

    def tarif_params
        params.permit(:prix)
    end
    
    def set_tarif
        @tarif = Tarif.find(params[:id])
    end
    
    
    
end
