run:
	yarn docs:build
	rm -rf ./docs
	mv ./src/.vuepress/dist docs
	git add .

	DATE="$(date)"
	git commit -m DATE
	git push
