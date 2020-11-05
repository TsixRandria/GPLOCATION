class VoituresController < ApplicationController
    before_action :set_voiture, only: [:show, :update, :destroy]
    # before_action :authorized, only: [:create]

    # GET /voitures
    def index
        @voitures = Voiture.all
        json_response(@voitures)
    end

    # POST /voitures
    def create
        @voiture = Voiture.create!(voiture_params)
        json_response(@voiture, :created)
    end

    # GET /voitures/:id
    def show
        json_response(@voiture)
    end

    # PUT /voitures/:id
    def update
        @voiture.update(voiture_params)
        head :no_content
    end

    # DELETE /voitures/:id
    def destroy
        @voiture.destroy
        head :no_content
    end

    private

    def voiture_params
        # whitelist params
        params.permit(:image, :marque, :model, :places, :mode, :climatisation, :vitesse, :portes)
    end

    def set_voiture
        @voiture = Voiture.find(params[:id])
    end
end

