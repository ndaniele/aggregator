class ApplicationController < ActionController::Base
    protect_from_forgery with: :exception
    
    after_filter :set_csrf_cookie_for_ng
    
    def set_csrf_cookie_for_ng
        cookies['XSRF-TOKEN'] = form_authenticity_token if protect_against_forgery?
    end
    
    respond_to :json
    
    before_action :configure_permitted_parameters, if: :devise_controller?


  protected
    
    def index
      #  user = current_user
    #        if current_user.nil?
     #       redirect_to new_user_session_path
      #      end      
    end
    
    def verified_request?
        super || valid_authenticity_token?(session, request.headers['X-XSRF-TOKEN'])
    end


  def configure_permitted_parameters
    added_attrs = [:username, :email, :password, :password_confirmation, :remember_me]
    devise_parameter_sanitizer.permit :sign_up, keys: added_attrs
    devise_parameter_sanitizer.permit :account_update, keys: added_attrs
  end
    
end

