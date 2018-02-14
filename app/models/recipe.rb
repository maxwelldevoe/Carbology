class Recipe < ApplicationRecord
  mount_uploader :image, ProfilePhotoUploader
  validates :title, presence: true
  validates :ingredients, presence: true
  validates :instructions, presence: true
  validates :description, presence: true
end
