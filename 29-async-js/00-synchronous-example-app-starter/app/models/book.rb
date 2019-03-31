class Book < ApplicationRecord
  belongs_to :author

  def self.fuzzy_search(term)
    fuzzy_term = "%#{term}%"
    Book.where('title LIKE ? OR description LIKE ?', fuzzy_term, fuzzy_term)
  end
end
