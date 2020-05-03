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
