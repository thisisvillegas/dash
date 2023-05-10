#!/bin/bash

ssh -i "late night worm hole.pem" ec2-user@ec2-3-83-68-163.compute-1.amazonaws.com <<'ENDSSH'

nvm use 16.20
cd dash
git pull
ng build
sudo cp -r dist/angular-hello-world/* /usr/share/nginx/html
echo "moved file"
sudo systemctl restart nginx
echo "restarted nginx"

ENDSSH