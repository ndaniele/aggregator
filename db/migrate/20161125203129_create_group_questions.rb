class CreateGroupQuestions < ActiveRecord::Migration[5.0]
  def change
      create_table :group_questions do |t|
      t.belongs_to :group
      t.belongs_to :question

      t.timestamps null: false
    end
  end
end
