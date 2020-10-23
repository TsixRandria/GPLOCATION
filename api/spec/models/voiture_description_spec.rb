# spec/models/item_spec.rb
require 'rails_helper'

# Test suite for the Item model
RSpec.describe VoitureDescription, type: :model do
  # Association test
  # ensure an item record belongs to a single todo record
  it { should belong_to(:voiture) }
  # Validation test
  # ensure column name is present before saving
  it { should validate_presence_of(:libelle) }
  it { should validate_presence_of(:valeur) }
end
