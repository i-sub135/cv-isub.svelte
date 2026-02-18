IMAGE ?= cv-isub
VERSION := $(shell node -p "require('./package.json').version")

.PHONY: docker-build
# Build image tagged with package.json version
docker-build:
	docker build -t $(IMAGE):$(VERSION) .
