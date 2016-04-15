class Todo < ActiveRecord::Base
  validates :title, presence: true, length: { maximum: 256 }
end
