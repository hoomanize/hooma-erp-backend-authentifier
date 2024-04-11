# Hooma - Authentifier Service
___

# Infra

```mermaid
    sequenceDiagram
        participant client
    box Blue Docker 
        participant webserver (ngnix)
        participant authentifier service
        participant db (mongo)
    end
    client->>webserver (ngnix): incoming request
    webserver (ngnix)->>authentifier service: reverse proxy
    authentifier service->>db (mongo): query
```