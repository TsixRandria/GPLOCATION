class UsersController < ApplicationController
    before_action :authorized, only: [:auto_login]



  # GET /utilisateurs
    def index
      @user = User.all
      json_response(@user)
    end

    # POST /REGISTER
    def create
        @user = User.create(user_params)
        if @user.valid?
        token = encode_token({user_id: @user.id})
        render json: {user: @user, token: token}
        else
        render json: {error: "Invalid username or password"}
        end
    end

    # GET /utilisateurs/:id
    def show
        json_response(@user)
    end

    # PUT /utilisateurs/:id
    def update
        @user.update(user_params)
        head :no_content
    end

    # DELETE /utilisateurs/:id
    def destroy
        @user.destroy
        head :no_content
    end

    # LOGGING IN
    def login
        @user = User.find_by(username: params[:username])

        if @user && @user.authenticate(params[:password])
        token = encode_token({user_id: @user.id})
        render json: {user: @user, token: token}
        else
        render json: {error: "Invalid username or password"}
        end
    end

    def auto_login
        render json: @user
      end
    
      private
    
      def user_params
        params.permit(:name, :prenom, :telephone, :mail, :password, :password_confirmation)
      end
end
