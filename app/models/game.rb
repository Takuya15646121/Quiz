# == Schema Information
#
# Table name: games
#
#  id         :bigint(8)        not null, primary key
#  user_id    :integer
#  title      :string
#  is_started :boolean
#  is_ended   :boolean
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Game < ApplicationRecord
    belongs_to :user

    validates :title, presence: true
    validates :user_id, presence: true
end
