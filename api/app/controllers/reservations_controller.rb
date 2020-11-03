class ReservationsController < ApplicationController
  before_action :set_reservation, only: [:show, :update, :destroy]
  before_action :filtre

  # GET /reservations
  def index
    @reservations = Reservation.all

    render json: @reservations
  end

  # GET /reservations/1
  def show
    render json: @reservation
  end

  # POST /reservations
  def create
    @reservation = Reservation.create!(reservation_params)

    if @reservation.save
      render json: @reservation, status: :created, location: @reservation
    else
      render json: @reservation.errors, status: :unprocessable_entity
    end
  end


  def filtre
    # return nil if :dateDepart === :dateRetour
    #   render json: {messsage: "Pour louer aujourd\'hui, merci de contacter directement Cargo Location Perpignan au 04 68 35 86 35."}, status: 202

    # return nil if (:dateDepart <=> :dateRetour) > 90
    #   render json: {message: "Pour une location plus de 90 jours, veuiller nous contacter via notre formulaire de contact"}, status: 203
    
    return false if :dateDepart > :dateRetour
      render json: {message: "veuiller valider une autre date s'il vous plait"}, status: 430
    # if :dateDepart === :dateRetour
    #   render json: {messsage: "Pour louer aujourd\'hui, merci de contacter directement Cargo Location Perpignan au 04 68 35 86 35."}, status: 430
    # end
    
  end
  

  # PATCH/PUT /reservations/1
  def update
    if @reservation.update(reservation_params)
      render json: @reservation
    else
      render json: @reservation.errors, status: :unprocessable_entity
    end
  end

  # DELETE /reservations/1
  def destroy
    @reservation.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_reservation
      @reservation = Reservation.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def reservation_params
      params.fetch(:reservation, {}).permit(:lieuDepart, :lieuRetour, :dateDepart, :dateRetour, :heureDepart, :heureRetour)
    end
end
