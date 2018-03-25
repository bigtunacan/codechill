require 'json'
require 'sinatra'
require 'sinatra/cross_origin'
require 'byebug'

configure do
  enable :cross_origin
end

set :allow_origin, :any
set :allow_methods, [:get, :post, :options]
set :allow_credentials, true
set :max_age, "1728000"
set :expose_headers, ['Content-Type']

get '/' do
  #byebug
  #erb :index
  { :key => 'Hello world' }.to_json
end
