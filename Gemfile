## Copyright 2024 Kaden Bilyeu (Bikatr7) (https://github.com/Bikatr7) (https://github.com/Bikatr7/bikatr7.github.io) (https://bikatr7.github.io)
## Use of this source code is governed by a GNU General Public License v3.0
## license that can be found in the LICENSE file.

source "https://rubygems.org"

## jekyll
gem "jekyll", "~> 4.3.3"

## Windows and JRuby timezone data
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

## Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

## Necessary to serve the site with Jekyll
gem 'webrick', '~> 1.7' 