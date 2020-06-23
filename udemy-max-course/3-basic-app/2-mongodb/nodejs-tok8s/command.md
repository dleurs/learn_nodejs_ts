#docker build --build-arg DOCKER_DBURL="mongodb+srv://dimitri:<setPassword>@testcluster-vbfgl.gcp.mongodb.net/<setDbName>?retryWrites=true&w=majority"  -t dleurs/nodejs-todo-app-crud:1.0.0 .
docker build --build-arg DOCKER_DBURL="mongodb://root:n9CabYrdK6@my-release-mongodb.default.svc.cluster.local:27017/?authSource=admin"  -t dleurs/nodejs-mongodb-ovh:1.0.8 .

docker push dleurs/nodejs-todo-app-crud:1.0.0
docker push dleurs/nodejs-mongodb-ovh:1.0.8

kubectl create deployment --image=dleurs/nodejs-todo-app-crud:1.0.0 nodejs-todo-app-crud
kubectl create deployment --image=dleurs/nodejs-mongodb-ovh:1.0.8 nodejs-mongodb-ovh


kubectl expose deployment nodejs-todo-app-crud --type=LoadBalancer --port=8080 --name=my-node-svc
kubectl expose deployment nodejs-mongodb-ovh --type=LoadBalancer --port=8080 --name=my-node-svc


