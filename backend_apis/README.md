# Backend APIs
## Why is it needed?


## How is it done?

## How to run?
### Start neo4j server locally
```
docker run \
    --restart always \
    --publish=7474:7474 --publish=7687:7687 \
    --env NEO4J_AUTH=neo4j/your_password \
    --volume=$HOME/neo4j/data:/data \
    -e NEO4J_apoc_export_file_enabled=true \
    -e NEO4J_apoc_import_file_enabled=true \
    -e NEO4J_apoc_import_file_use__neo4j__config=true \
    -e NEO4J_PLUGINS=\[\"apoc\"\] \
    neo4j:5.23.0 
```

### Open neo4j browser
Open http://localhost:7474/browser/

### Start backend API
Run the following script:
```
pip3 install -r requirements.txt
python3 main.py
```

### Start Frontend
Run the following script:
```
npm install
npm run start
```