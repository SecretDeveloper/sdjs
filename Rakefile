task :default => [:minify_single]

require 'rake/minify'
Rake::Minify.new(:minify_single) do
  dir("path/to/your/dir") do # we specify only the source directory
    add("sd-min.js", "sd.js") # the output file name is full path
  end
end