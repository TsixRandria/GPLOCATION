class ClientsController < ApplicationController
  before_action :set_client, only: [:show, :update, :destroy]

  # GET /clients
  def index
    @clients = Client.all

    render json: @clients
  end

  # GET /clients/1
  def show
    render json: @client
  end

  # POST /clients
  def create
    @client = Client.new(client_params)

    if @client.save
      render json: @client, status: :created, location: @client
    else
      render json: @client.errors, status: :unprocessable_entity
    end
  end

  #new_session
  def login
    @client = Client.find_by(email: params[:email])
    if @client && @client.authenticate(password_digest: params[:password_digest])
        token = encode_token({client_id: @client.id})
        render json: {client: @client, token: token}
        session[:current_client_id] = client.id
    else
        render json: {error: "Email ou mot de passe incorrect"}
    end
  end


  # PATCH/PUT /clients/1
  def update
    if @client.update(client_params)
      render json: @client
    else
      render json: @client.errors, status: :unprocessable_entity
    end
  end

  # DELETE /clients/1
  def destroy
    @client.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_client
      @client = Client.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def client_params
      params.permit(:nom, :prenom, :telephone, :email, :password => [])
    end
end
