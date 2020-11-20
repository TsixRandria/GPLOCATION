class VoituresController < ApplicationController
    before_action :set_voiture, only: [:show, :update, :destroy]
    # before_action :authorized, only: [:create]
    # before_action :set_category
    # before_action :set_category_voiture, only: [:show, :update, :destroy]

    # GET /categories/:category_id/voitures
    # GET /voitures
    def index
        @voitures = Voiture.all
        render json: @voitures
        # json_response(@voitures)

    end

    # POST /categories/:category_id/voitures
    # POST /voitures
    def create
        @category = Category.find(voiture_params[:category])
        @paramsmapped = voiture_params
        @paramsmapped[:category] = @category
        @voiture = Voiture.create!(@paramsmapped)
        json_response(@voiture, :created)
    end

    # GET /categories/:category_id/voitures/:id
    # GET /voitures/:id
    def show
        @category = @voiture.category
        @options = @category.options
        render json: {voitures: @voitures, options: @options}
    end

    # PUT /categories/:category_id/voitures/:id
    # PUT /voitures/:id
    def update
        @voiture.update(voiture_params)
        head :no_content
    end

    # DELETE /categories/:category_id/voitures/:id
    # DELETE /voitures/:id
    def destroy
        @voiture.destroy
        head :no_content
    end

    private

    def voiture_params
        # whitelist params
        params.permit(:image, :marque, :model, :places, :mode, :climatisation, :vitesse, :portes, :category)
    end

    def set_voiture
        @voiture = Voiture.find(params[:id])
    end

    # def set_category
    #     @category = Category.find(params[:category_id])
    #   end
    
    # def set_category_Voiture
    #     @voiture = @category.voitures.find_by!(id: params[:id]) if @category
    # end
end

