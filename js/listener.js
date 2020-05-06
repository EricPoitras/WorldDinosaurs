btn_assets.addEventListener("click", function () {
	sec_leftbar.classList.toggle("d-none");
});
btn_annotation.addEventListener("click", function () {
	sec_rightbar.classList.toggle("d-none");
});
btn_controls.addEventListener("click", function () {
	tool_nav.classList.toggle("d-none");
});
btn_agent.addEventListener("click", function () {
	tool_agent.classList.toggle("d-none");
});
array_more_leftbar.forEach((item) => {
	item.addEventListener("click", (event) => {
		toggleModel(event.target.id);
	});
});
array_open_leftbar.forEach((item) => {
	item.addEventListener("click", (event) => {
		openModel(event.target.id);
	});
});
document.addEventListener("DOMContentLoaded", function () {
	loadModel(counter);
	loadComment(counter2);
});
btn_next.addEventListener("click", function () {
	counter = counter + 1;
	btn_prev.disabled = false;
	loadModel(counter);
});
btn_prev.addEventListener("click", function () {
	counter = counter - 1;
	if (counter == 0) {
		counter = 0;
		btn_prev.disabled = true;
	} else {
		btn_prev.disabled = false;
	}
	loadModel(counter);
});
btn_next2.addEventListener("click", function () {
	counter2 = counter2 + 1;
	btn_prev2.disabled = false;
	loadComment(counter2);
});
btn_prev2.addEventListener("click", function () {
	counter2 = counter2 - 1;
	if (counter2 == 0) {
		counter2 = 0;
		btn_prev2.disabled = true;
	} else {
		btn_prev2.disabled = false;
	}
	loadComment(counter2);
});
array_more_rightbar.forEach((item) => {
	item.addEventListener("click", (event) => {
		toggleComment(event.target.id);
	});
});
array_like_rightbar.forEach((item) => {
	item.addEventListener("click", (event) => {
		likeComment(event.target.id);
	});
});
btn_nav_left.addEventListener("mousedown", function () {
	console.log("mouse down");
	btn_nav_left.style.boxShadow = "0px 0px 2px 7px #007bff80";
	camera.position.x /= 0.9;
});
btn_nav_left.addEventListener("mouseup", function () {
	console.log("mouse up");
	btn_nav_left.style.boxShadow = "none";
	var zoom = controls.target.distanceTo(controls.object.position);
	var x = camera.position.x;
	var y = camera.position.y;
	var z = camera.position.z;
	console.log(zoom, x, y, z);
});
btn_nav_up.addEventListener("mousedown", function () {
	console.log("mouse down");
	btn_nav_up.style.boxShadow = "0px 0px 2px 7px #007bff80";
	camera.position.y *= 0.9;
});
btn_nav_up.addEventListener("mouseup", function () {
	console.log("mouse up");
	btn_nav_up.style.boxShadow = "none";
	var zoom = controls.target.distanceTo(controls.object.position);
	var x = camera.position.x;
	var y = camera.position.y;
	var z = camera.position.z;
	console.log(zoom, x, y, z);
});
btn_nav_right.addEventListener("mousedown", function () {
	console.log("mouse down");
	btn_nav_right.style.boxShadow = "0px 0px 2px 7px #007bff80";
	camera.position.x *= 0.9;
});
btn_nav_right.addEventListener("mouseup", function () {
	console.log("mouse up");
	btn_nav_right.style.boxShadow = "none";
	var zoom = controls.target.distanceTo(controls.object.position);
	var x = camera.position.x;
	var y = camera.position.y;
	var z = camera.position.z;
	console.log(zoom, x, y, z);
});
btn_nav_down.addEventListener("mousedown", function () {
	console.log("mouse down");
	btn_nav_down.style.boxShadow = "0px 0px 2px 7px #007bff80";
	camera.position.y /= 0.9;
});
btn_nav_down.addEventListener("mouseup", function () {
	console.log("mouse up");
	btn_nav_down.style.boxShadow = "none";
	var zoom = controls.target.distanceTo(controls.object.position);
	var x = camera.position.x;
	var y = camera.position.y;
	var z = camera.position.z;
	console.log(zoom, x, y, z);
});
btn_nav_in.addEventListener("mousedown", function () {
	console.log("mouse down");
	btn_nav_in.style.boxShadow = "0px 0px 2px 7px #007bff80";
	camera.position.x *= 0.9;
	camera.position.y *= 0.9;
	camera.position.z *= 0.9;
});
btn_nav_in.addEventListener("mouseup", function () {
	console.log("mouse up");
	btn_nav_in.style.boxShadow = "none";
	var zoom = controls.target.distanceTo(controls.object.position);
	var x = camera.position.x;
	var y = camera.position.y;
	var z = camera.position.z;
	console.log(zoom, x, y, z);
});
btn_nav_out.addEventListener("mousedown", function () {
	console.log("mouse down");
	btn_nav_out.style.boxShadow = "0px 0px 2px 7px #007bff80";
	camera.position.x /= 0.9;
	camera.position.y /= 0.9;
	camera.position.z /= 0.9;
});
btn_nav_out.addEventListener("mouseup", function () {
	console.log("mouse up");
	btn_nav_out.style.boxShadow = "none";
	var zoom = controls.target.distanceTo(controls.object.position);
	var x = camera.position.x;
	var y = camera.position.y;
	var z = camera.position.z;
	console.log(zoom, x, y, z);
});
