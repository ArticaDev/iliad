require 'sinatra'
require 'sinatra/reloader' if development?
require './config'

get '/' do
  'Hello world!'
end