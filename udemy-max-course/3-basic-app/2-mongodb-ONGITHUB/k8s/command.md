helm install my-release bitnami/mongodb
export MONGODB_ROOT_PASSWORD=$(kubectl get secret --namespace default my-release-mongodb -o jsonpath="{.data.mongodb-root-password}" | base64 --decode)

Wait for next command to work :
kubectl run --namespace default my-release-mongodb-client --rm --tty -i --restart='Never' --image docker.io/bitnami/mongodb:4.2.8-debian-10-r7 --command -- mongo admin --host my-release-mongodb --authenticationDatabase admin -u root -p $MONGODB_ROOT_PASSWORD

docker build -t dleurs/nodejs-mongodb-ovh:1.1.2 .

docker push dleurs/nodejs-mongodb-ovh:1.1.2

kubectl create k8s/deploy-and-loadbalancer.yaml

kubectl get svc

kubectl run --namespace default testing-nodejs-app --rm --tty -i --restart='Never' --image curlimages/curl --command -- curl -v 10.3.1.201

Wait for external IP



