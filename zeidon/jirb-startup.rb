require "rubygems"
include Java
load "zeidon.rb"

java_import 'com.quinsoft.zeidon.ObjectEngine'

@oe = Zeidon.get_object_engine( )
@task = @oe.Northwind.create_task

def reload!
  @oe = Zeidon.reload_object_engine
  @task = @oe.Northwind.create_task
  @task
end
