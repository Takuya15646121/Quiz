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

require 'rails_helper'

RSpec.describe Game, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
