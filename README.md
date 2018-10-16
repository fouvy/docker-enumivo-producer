Enumivo producer
===
This docker image is for enumivo producer.
# Depends on
* docker
* docker-compose
# How to start?
## Clone project
open a bash terminal, and run following command
```
git clone https://github.com/fouvy/docker-enumivo-producer.git
```
change current directory to project
```
cd docker-enumivo-producer
```
## Config your information
If your haven't register producer, you should register producer first.
### Register producer(optional)
The script is register_bp.sh and you should config config_producer.js file first. The first 3 lines which params start with xxxx shold config to your own information. then run following command. This command depends on nodejs 
```
./register_bp.sh
```
The up command is depends on nodejs and enujs. If your didn't install it run this:
```
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
```
Then install enujs:
```
npm install -g enujs
```
### Config producer node ini
The ini file is enu/config/config.ini and find the config region which params start with xxxx, change it to your own information.
## Install and Start docker
Just run next command, your would start your bp, and it has been set up autorun if you reboot your computer.(All following code should run under docker-enumivo-producer directory.)
```
sudo docker-compose up -d
```
If your want to stop your bp, run this:
```
sudo docker-compose stop
```
IF your want to start your bp, run this:
```
sudo docker-compose start
```
If your want to see pb log, run this:
```
sudo docker-compose logs
```
# Finally
If you like my repo, your can run the following command and vote for me (williamfouvy).  Next command depends some programs: nodejs and enujs, which I have describe in the section Register producer(optional)
```
./vote_william.sh
```
Thank you.
