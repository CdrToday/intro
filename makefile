run:
	yarn docs:build
	rm -rf ./docs
	mv ./src/.vuepress/dist docs