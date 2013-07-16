class QuizzesController < ApplicationController

    def index
        @quizzes = Quiz.all
    end

    def new
       @quiz = Quiz.new

       3.times do
            question = @quiz.questions.build
            #has to be in a block that looks like this to work
            4.times do
                #this also depends on a variable called 'answers' in the loop
                #that is located in your view
                 question.answers.build
            end
        end
    end

    def create
        # puts "This is my params below:"
        # puts params
        quiz = Quiz.new(params[:quiz])
        if quiz.save!
            redirect_to quizzes_path
        else
            redirect_to :new
        end
    end

    def show
        @quiz = Quiz.find(params[:id])
    end

end
