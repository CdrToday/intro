run:
	yarn docs:build
	rm -rf ./docs
	mv ./src/.vuepress/dist docs
	git add .
	git commit -m "$(date)"
	git push
