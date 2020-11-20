class ReservationsController < ApplicationController
  before_action :set_reservation, only: [:show, :update, :destroy]
  before_action :tarif_id, only: [:create]
  
  # GET /reservations
  def index
    @reservations = Reservation.all

    render json: @reservations
  end

  # GET /reservations/1
  def show
    render json: @reservation
  end

  def tarif_id
    @reservation = Reservation.create(reservation_params)
    
  end

  # POST /reservations
  def create
                                                                                                                                                                                                              

    if @reservation.dateDepart === @reservation.dateRetour
      # return @reservation.delete
      return render json: {message: "Pour louer aujourd\'hui, merci de contacter directement Cargo Location 
      Perpignan au 04 68 35 86 35 ."}
    elsif filtre = (@reservation.dateDepart.to_date...@reservation.dateRetour.to_date).count
      if filtre >= 90
        return render json: {message: "Veuillez saisir 
        de nouveau vos dates de location ou Contactez notre agence pour toute durée de location superieure à 90 jours 
        Via notre formulaire de contact ."}
      end
    else compare  = @reservation.dateDepart.to_date > @reservation.dateRetour.to_date
      if compare === true
        return render json: {message: "veuiller valider une autre date"}
      end
    end
    if @reservation.save
      render json: @reservation, location: @reservation, status: :created
      session[:reservation] = @reservation.id
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
