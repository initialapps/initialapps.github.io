#!/bin/bash

# build file directory
dir="build/"

# delete all files in current directory
find *.html -delete
echo 'clearing html files'

# get all files in the build directory
files=(build/*)
for item in ${files[*]}
do
	# filter out header and footer files
	if [[ $item =~ ^(build/header.html|build/footer.html)$ ]]; then
		echo "skipping $item"
	else
		#remove the directory from file
		file=${item#$dir}
		cat build/header.html $item build/footer.html > $file
		echo "building $item"
	fi
done
