## Vue3 Pinia VueRouter Tailwind JSON-Server JS SASS Vite Toastify


# to start the project
## start json-server
	json-server --watch db.json
## start frontend
	npm run dev


### start in a docker container

# build the image
docker build -t netflix-img .
# run it in a container exposing the correct port
docker run --name netflics-container -p 5173:5173 netflix-img

# temporary json-server fix
for now you can run json-server from cmd line of thre container to start json-server
json-server --watch db.json