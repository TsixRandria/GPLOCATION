class ReservationsController < ApplicationController
  before_action :set_reservation, only: [:show, :update, :destroy]
 
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
    @reservation = Reservation.create(reservation_params)                                                                                                                                                                                                           

    if @reservation.dateDepart === @reservation.dateRetour
      return @reservation.delete
      render json: {message: "Pour louer aujourd\'hui, merci de contacter directement Cargo Location Perpignan au 04 68 35 86 35."}, status: 205
    elsif filtre = (@reservation.dateDepart.to_date...@reservation.dateRetour.to_date).count
      if filtre >= 90
        return @reservation.delete
        render json: {message: "Vous ne pouvez louer plus de 90 jours, veuillez saisir de nouveau vos dates de location,Contactez votre agence pour toute durée de location superieure.", status: 207}
      end
    else compare  = @reservation.dateDepart.to_date > @reservation.dateRetour.to_date
      if compare == true
        return @reservation.delete
        render json: {message: "veuiller valider une autre date"}, status: 206
      end
    end
    if @reservation.save
      render json: @reservation, location: @reservation, status: :created
    else
      render json: @reservation.errors, status: :unprocessable_entity
    end
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
