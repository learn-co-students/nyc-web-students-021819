require 'bundler'
Bundler.require

require_relative('../lib/pet')
require_relative('../lib/walkable')
require_relative('../lib/pescatarianable')
require_all('lib')
# Dir[File.join(File.dirname(__FILE__), "../lib", "*.rb")].sort.each {|f| require f}
