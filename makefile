DATE=`date`

run:
	yarn docs:build
	rm -rf ./docs
	mv ./src/.vuepress/dist docs
	git add .

	git commit
	git push
