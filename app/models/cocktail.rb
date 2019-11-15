class Cocktail < ApplicationRecord
  mount_uploader :photo, PhotoUploader
  has_many :doses, dependent: :destroy
  has_many :ingredients, through: :doses, dependent: :destroy

  validates :name, presence: true, uniqueness: true
  validates :photo, presence: true
end
