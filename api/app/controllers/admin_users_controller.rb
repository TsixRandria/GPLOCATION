class AdminUsersController < ApplicationController
    before_action :set_utilisateur, only: [:show, :update, :destroy]

    # GET /utilisateurs
    def index
        @utilisateurs = AdminUser.all
        json_response(@utilisateurs)
    end

    # POST /utilisateurs
    def create
        @utilisateur = AdminUser.create!(utilisateur_params)
        json_response(@utilisateur, :created)
    end

    # GET /utilisateurs/:id
    def show
        json_response(@utilisateur)
    end

    # PUT /utilisateurs/:id
    def update
        @utilisateur.update(utilisateur_params)
        head :no_content
    end

    # DELETE /utilisateurs/:id
    def destroy
        @utilisateur.destroy
        head :no_content
    end

    private

    def utilisateur_params
        # whitelist params
        params.permit(:username, :email, :password)
    end

    def set_utilisateur
        @utilisateur = AdminUser.find(params[:id])
    end
end
