class CreateGroups < ActiveRecord::Migration[5.0]
  def change
    create_table :groups do |t|
      t.text :groupname

      t.timestamps
    end
    add_index :groups, :groupname, unique: true
  end
end
