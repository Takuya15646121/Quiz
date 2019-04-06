module V1
    class GamesController < ApplicationController
        
        # GET /games
        def games
            token = request.headers['Authorization']
            user = User.find_by_access_token(token)
            unless user.blank?
                games = Game.where(user_id: user.id)
                render json: games, serializer: V1::GameSerializer, root: nil
            end
        end
    end
end