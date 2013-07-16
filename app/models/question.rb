class Question < ActiveRecord::Base
  attr_accessible :content, :quiz_id
  belongs_to :quiz
end
