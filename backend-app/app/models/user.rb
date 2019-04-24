class User < ApplicationRecord
    has_many :user_accesses, dependent: :destroy
end
