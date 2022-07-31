deps:
	cd frontend && yarn install
	cd api && bundler install

start:
	foreman start