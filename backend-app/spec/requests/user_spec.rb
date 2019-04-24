require 'rails_helper'

RSpec.describe "User post requests", :type => :request do

    it "Post user data" do
        headers = { "CONTENT_TYPE" => "application/json" }
        params = { 'user': { name: "Rod", guid: "1234567890", email: "rodrigonunesrp@gmail.com" } } 
        post "/v1/users", :params => params.to_json, :headers => headers

        expect(response.status).to eq 200
        expect(response.body).to eq "OK".to_json
    end

    it "Post user access data" do
        headers = { "CONTENT_TYPE" => "application/json" }
        params = { 
            'user': { name: "Rod", guid: "1234567890", email: "rodrigonunesrp@gmail.com" },
            'user_access': { url: "1234567890", created_at: "rodrigonunesrp@gmail.com" } 
        }
        post "/v1/users", :params => params.to_json, :headers => headers

        expect(response.status).to eq 200
        expect(response.body).to eq "OK".to_json

    end
end