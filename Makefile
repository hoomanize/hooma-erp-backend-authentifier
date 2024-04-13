compose_run_dev:
	docker compose -f ./docker/development/docker-compose.yml up --build

compose_stop_dev:
	docker compose -f ./docker/development/docker-compose.yml down

compose_exec_application:
	docker exec -it authentifier_application bash
