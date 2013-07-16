class Quiz < ActiveRecord::Base
  attr_accessible :name, :questions, :questions_attributes
  
  # #association 1
  has_many :questions, :dependent => :destroy

  # #association 2
  # has_many :answers, through: :questions
  
  # #nested attribute
  accepts_nested_attributes_for :questions, :reject_if => lambda { |a| a[:content].blank? }, :allow_destroy => true

end
