# "questions", 
#     t.integer  "quiz_id"
#     t.text     "content"
#     t.datetime "created_at", :null => false
#     t.datetime "updated_at", :null => false
#   end

# "quizzes", :force => true do |t|
#     t.text     "name"
#     t.datetime "created_at", :null => false
#     t.datetime "updated_at", :null => false
#   end
Quiz.delete_all

quiz1 = Quiz.create(name: "Basic Math 1")
quiz2 = Quiz.create(name: "Basic History 1")
quiz3 = Quiz.create(name: "Basic Math 2")
quiz4 = Quiz.create(name: "Basic History 2")

ques1 = Question.create(content: "What is 1+1?")
ques2 = Question.create(content: "What is 3x2?")
ques3 = Question.create(content: "What is 5+5?")
ques4 = Question.create(content: "Who was the first president of the USA?")
ques5 = Question.create(content: "Who's face is on the 10 dollar bill?")
ques6 = Question.create(content: "Which president had wooden teeth?")

quiz1.questions.push(ques1)
quiz1.questions.push(ques2)
quiz2.questions.push(ques4)
quiz2.questions.push(ques5)
quiz3.questions.push(ques3)
quiz4.questions.push(ques6)

quiz1.save!
quiz2.save!
quiz3.save!
quiz4.save!