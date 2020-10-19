class ContactController < ApplicationController
    before_action :set_Contact, only: [:show, :update, :destroy]

    # GET /Contacts
    def index
        @contacts = Contact.all
        json_response(@contacts)
    end

    # POST /Contacts
    def create
        @contact = Contact.create!(Contact_params)
        json_response(@contact, :created)
    end

    # GET /Contacts/:id
    def show
        json_response(@contact)
    end

    # PUT /Contacts/:id
    def update
        @contact.update(Contact_params)
        head :no_content
    end

    # DELETE /Contacts/:id
    def destroy
        @contact.destroy
        head :no_content
    end

    private

    def Contact_params
        # whitelist params
        params.permit(:nom, :prenom, :email, :telephone, :message)
    end

    def set_Contact
        @contact = Contact.find(params[:id])
    end
end
