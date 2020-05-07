function toggleModel(model_id) {
	switch (model_id) {
		case "btn_more_left_1":
			if (array_more_leftbar[0].textContent == "Less") {
				array_more_leftbar[0].textContent = "More";
			} else {
				array_more_leftbar[0].textContent = "Less";
			}
			array_descriptor_leftbar[0].classList.toggle("d-none");
			break;
		case "btn_more_left_2":
			if (array_more_leftbar[1].textContent == "Less") {
				array_more_leftbar[1].textContent = "More";
			} else {
				array_more_leftbar[1].textContent = "Less";
			}
			array_descriptor_leftbar[1].classList.toggle("d-none");
			break;
		case "btn_more_left_3":
			if (array_more_leftbar[2].textContent == "Less") {
				array_more_leftbar[2].textContent = "More";
			} else {
				array_more_leftbar[2].textContent = "Less";
			}
			array_descriptor_leftbar[2].classList.toggle("d-none");
			break;
		case "btn_more_left_4":
			if (array_more_leftbar[3].textContent == "Less") {
				array_more_leftbar[3].textContent = "More";
			} else {
				array_more_leftbar[3].textContent = "Less";
			}
			array_descriptor_leftbar[3].classList.toggle("d-none");
			break;
		case "btn_more_left_5":
			if (array_more_leftbar[4].textContent == "Less") {
				array_more_leftbar[4].textContent = "More";
			} else {
				array_more_leftbar[4].textContent = "Less";
			}
			array_descriptor_leftbar[4].classList.toggle("d-none");
			break;
	}
}

function loadModel(list_index) {
	btn_next.disabled = false;
	var counter = 0;
	for (var i = list_index * 5; i < list_index * 5 + 5; i++) {
		try {
			array_model_leftbar[counter].classList.remove("d-none");
			array_title_leftbar[counter].textContent = data[i].title;
			array_descriptor_leftbar[counter].textContent = data[i].descriptor;
		} catch {
			array_model_leftbar[counter].classList.add("d-none");
			btn_next.disabled = true;
		}
		counter = counter + 1;
	}
}

function openModel(model_id) {
	var url_address;
	switch (model_id) {
		case "btn_open_left_1":
			url_address = data[0].url;
			model = data[0].id;
			break;
		case "btn_open_left_2":
			url_address = data[1].url;
			model = data[1].id;
			break;
		case "btn_open_left_3":
			url_address = data[2].url;
			model = data[2].id;
			break;
		case "btn_open_left_4":
			url_address = data[3].url;
			model = data[3].id;
			break;
		case "btn_open_left_5":
			url_address = data[4].url;
			model = data[4].id;
			break;
	}
	console.log("Render the model from the following url address: " + url_address);
	renderModel(url_address);
}

function animateModel() {
	renderer.render(scene, camera);
	requestAnimationFrame(animateModel);
	// https://stackoverflow.com/questions/52944642/three-js-perspectivecamera-orbitcontrol-how-i-can-get-current-zoom-level
	var zoom = controls.target.distanceTo(controls.object.position);
	var x = camera.position.x;
	var y = camera.position.y;
	var z = camera.position.z;
	//console.log(zoom, x, y, z);
	//console.log(controls.object.rotation._x, controls.object.rotation._y, controls.object.rotation._z);
}

function renderModel(model_url) {
	// Define scene object and background color
	scene = new THREE.Scene();
	scene.background = new THREE.Color(0x000000);
	// Define camera
	camera = new THREE.PerspectiveCamera(40, sec_dashboard.offsetWidth / sec_dashboard.offsetHeight, 1, 5000);
	camera.rotation.y = (45 / 180) * Math.PI;
	camera.position.x = 800;
	camera.position.y = 200;
	camera.position.z = 1000;
	// Define lighting conditions
	highlight = new THREE.AmbientLight(0x404040, 100);
	scene.add(highlight);
	directionalLight = new THREE.DirectionalLight(0xffffff, 2);
	directionalLight.position.set(0, 1, 0);
	//directionalLight.castShadow = true;
	scene.add(directionalLight);
	light = new THREE.PointLight(0xc4c4c4, 1.5);
	light.position.set(0, 300, 500);
	scene.add(light);
	light2 = new THREE.PointLight(0xc4c4c4, 1.5);
	light2.position.set(500, 100, 0);
	scene.add(light2);
	light3 = new THREE.PointLight(0xc4c4c4, 1.5);
	light3.position.set(0, 100, -500);
	scene.add(light3);
	light4 = new THREE.PointLight(0xc4c4c4, 1.5);
	light4.position.set(-500, 300, 500);
	scene.add(light4);
	light5 = new THREE.PointLight(0xc4c4c4, 1.5);
	light5.position.set(0, -500, 0);
	scene.add(light5);
	// Define renderer
	renderer = new THREE.WebGLRenderer({ antialias: true });
	renderer.setSize(sec_dashboard.offsetWidth, sec_dashboard.offsetHeight);
	console.log("Width set to:" + sec_dashboard.offsetWidth);
	sec_dashboard.appendChild(renderer.domElement);
	// Define controls
	controls = new THREE.OrbitControls(camera, renderer.domElement);
	controls.addEventListener("change", renderer);
	// Define loader
	let loader = new THREE.GLTFLoader();
	loader.load(
		model_url,
		function (gltf) {
			fossil = gltf.scene;
			console.log(fossil);
			fossil.scale.set(3, 3, 3);
			scene.add(fossil);
			animateModel();
		},
		// called while loading is progressing
		function (xhr) {
			console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
		},
		// called when loading has errors
		function (error) {
			console.log("An error happened");
		}
	);
}

function loadComment(comment_id) {
	console.log(comment_id);
	btn_next2.disabled = false;
	var comment_index = 0;
	for (var i = comment_id * 5; i < comment_id * 5 + 5; i++) {
		try {
			array_comment_rightbar[comment_index].classList.remove("d-none");
			array_text_rightbar[comment_index].textContent = data2[i].comment;
			array_text_reply_rightbar[comment_index].innerHTML = "";
			data2[i].replies.forEach((element) => (array_text_reply_rightbar[comment_index].innerHTML += element + "<br>"));
		} catch {
			array_comment_rightbar[comment_index].classList.add("d-none");
			btn_next2.disabled = true;
		}
		comment_index = comment_index + 1;
	}
}

function toggleComment(comment_id) {
	switch (comment_id) {
		case "btn_more_right_1":
			if (array_more_rightbar[0].textContent == "Less") {
				array_more_rightbar[0].textContent = "More";
			} else {
				array_more_rightbar[0].textContent = "Less";
			}
			array_text_reply_rightbar[0].classList.toggle("d-none");
			array_btn_reply_rightbar[0].classList.toggle("d-none");
			break;
		case "btn_more_right_2":
			if (array_more_rightbar[1].textContent == "Less") {
				array_more_rightbar[1].textContent = "More";
			} else {
				array_more_rightbar[1].textContent = "Less";
			}
			array_text_reply_rightbar[1].classList.toggle("d-none");
			array_btn_reply_rightbar[1].classList.toggle("d-none");
			break;
		case "btn_more_right_3":
			if (array_more_rightbar[2].textContent == "Less") {
				array_more_rightbar[2].textContent = "More";
			} else {
				array_more_rightbar[2].textContent = "Less";
			}
			array_text_reply_rightbar[2].classList.toggle("d-none");
			array_btn_reply_rightbar[2].classList.toggle("d-none");
			break;
		case "btn_more_right_4":
			if (array_more_rightbar[3].textContent == "Less") {
				array_more_rightbar[3].textContent = "More";
			} else {
				array_more_rightbar[3].textContent = "Less";
			}
			array_text_reply_rightbar[3].classList.toggle("d-none");
			array_btn_reply_rightbar[3].classList.toggle("d-none");
			break;
		case "btn_more_right_5":
			if (array_more_rightbar[4].textContent == "Less") {
				array_more_rightbar[4].textContent = "More";
			} else {
				array_more_rightbar[4].textContent = "Less";
			}
			array_text_reply_rightbar[4].classList.toggle("d-none");
			array_btn_reply_rightbar[4].classList.toggle("d-none");
			break;
	}
}

function likeComment(comment_id) {
	var like_index;
	switch (comment_id) {
		case "btn_like_right_1":
			like_index = counter2 * 5;
			break;
		case "btn_like_right_2":
			like_index = counter2 * 5 + 1;
			break;
		case "btn_like_right_3":
			like_index = counter2 * 5 + 2;
			break;
		case "btn_like_right_4":
			like_index = counter2 * 5 + 3;
			break;
		case "btn_like_right_5":
			like_index = counter2 * 5 + 4;
			break;
	}
	data2[like_index].like = data2[like_index].like + 1;
	console.log(data2);
}

function toggleReply(reply_id) {
	switch (reply_id) {
		case "btn_reply1":
			if (array_btn_reply_rightbar[0].textContent == "Add a Reply") {
				array_btn_reply_rightbar[0].textContent = "Hide";
			} else {
				array_btn_reply_rightbar[0].textContent = "Add a Reply";
			}
			array_cont_reply_rightbar[0].classList.toggle("d-none");
			break;
		case "btn_reply2":
			if (array_btn_reply_rightbar[1].textContent == "Add a Reply") {
				array_btn_reply_rightbar[1].textContent = "Hide";
			} else {
				array_btn_reply_rightbar[1].textContent = "Add a Reply";
			}
			array_cont_reply_rightbar[1].classList.toggle("d-none");
			break;
		case "btn_reply3":
			if (array_btn_reply_rightbar[2].textContent == "Add a Reply") {
				array_btn_reply_rightbar[2].textContent = "Hide";
			} else {
				array_btn_reply_rightbar[2].textContent = "Add a Reply";
			}
			array_cont_reply_rightbar[2].classList.toggle("d-none");
			break;
		case "btn_reply4":
			if (array_btn_reply_rightbar[3].textContent == "Add a Reply") {
				array_btn_reply_rightbar[3].textContent = "Hide";
			} else {
				array_btn_reply_rightbar[3].textContent = "Add a Reply";
			}
			array_cont_reply_rightbar[3].classList.toggle("d-none");
			break;
		case "btn_reply5":
			if (array_btn_reply_rightbar[4].textContent == "Add a Reply") {
				array_btn_reply_rightbar[4].textContent = "Hide";
			} else {
				array_btn_reply_rightbar[4].textContent = "Add a Reply";
			}
			array_cont_reply_rightbar[4].classList.toggle("d-none");
			break;
	}
}

function addReply(reply_id) {
	var reply_index;
	switch (reply_id) {
		case "btn_add1":
			reply_index = counter2 * 5;
			data2[reply_index].replies.push(array_input_reply_rightbar[0].value);
			break;
		case "btn_add2":
			reply_index = counter2 * 5 + 1;
			data2[reply_index].replies.push(array_input_reply_rightbar[1].value);
			break;
		case "btn_add3":
			reply_index = counter2 * 5 + 2;
			data2[reply_index].replies.push(array_input_reply_rightbar[2].value);
			break;
		case "btn_add4":
			reply_index = counter2 * 5 + 3;
			data2[reply_index].replies.push(array_input_reply_rightbar[3].value);
			break;
		case "btn_add5":
			reply_index = counter2 * 5 + 4;
			data2[reply_index].replies.push(array_input_reply_rightbar[4].value);
			break;
	}
	console.log(data2);
	loadComment(counter2);
}

function updateAgent(prompt_id) {
	clearInterval(timer);
	if (counter3 >= agent.length) {
		text_agent.classList.add("d-none");
	} else {
		text_agent.classList.remove("d-none");
		text_agent.textContent = agent[prompt_id].prompt;
		counter3 = counter3 + 1;
		totalSeconds = 0;
		timer = setInterval(setTime, 1000);
	}
}

function setTime() {
	++totalSeconds;
	//console.log("Seconds: " + (totalSeconds % 60), "Minutes: " + parseInt(totalSeconds / 60));
	if (parseInt(totalSeconds / 60) > 5 || observation_count >= counter3) {
		updateAgent(counter3);
	}
}
