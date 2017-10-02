require "rubygems"
include Java
load "zeidon.rb"

include_class 'com.quinsoft.zeidon.ObjectEngine'

@oe = Zeidon.get_object_engine( )
@task = @oe.Northwind.create_task
