module V1
    class GameSerializer < ActiveModel::Serializer
      attributes :id, :title, :is_started, :is_ended
    end
  end