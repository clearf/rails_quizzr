class Answer < ActiveRecord::Base
  attr_accessible :content, :is_correct, :question_id

  belongs_to :question

  #needs what else?
  
end
