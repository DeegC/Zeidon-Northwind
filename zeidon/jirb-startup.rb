require "rubygems"
require 'pp'
include Java
load "zeidon.rb"

java_import 'com.quinsoft.zeidon.ObjectEngine'

def reload!
  @oe = Zeidon.reload_object_engine( "jirb_zeidon.ini" )
  @task = @oe.Northwind.create_task
  @task
end

reload!
