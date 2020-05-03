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
			break;
		case "btn_open_left_2":
			url_address = data[1].url;
			break;
		case "btn_open_left_3":
			url_address = data[2].url;
			break;
		case "btn_open_left_4":
			url_address = data[3].url;
			break;
		case "btn_open_left_5":
			url_address = data[4].url;
			break;
	}
	console.log("Render the model from the following url address: " + url_address);
}

function loadComment(comment_id) {
	console.log(comment_id);
	btn_next2.disabled = false;
	var comment_index = 0;
	for (var i = comment_id * 5; i < comment_id * 5 + 5; i++) {
		try {
			array_comment_rightbar[comment_index].classList.remove("d-none");
			array_text_rightbar[comment_index].textContent = data2[i].comment;
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
			array_text_rightbar[0].classList.toggle("d-none");
			break;
		case "btn_more_right_2":
			if (array_more_rightbar[1].textContent == "Less") {
				array_more_rightbar[1].textContent = "More";
			} else {
				array_more_rightbar[1].textContent = "Less";
			}
			array_text_rightbar[1].classList.toggle("d-none");
			break;
		case "btn_more_right_3":
			if (array_more_rightbar[2].textContent == "Less") {
				array_more_rightbar[2].textContent = "More";
			} else {
				array_more_rightbar[2].textContent = "Less";
			}
			array_text_rightbar[2].classList.toggle("d-none");
			break;
		case "btn_more_right_4":
			if (array_more_rightbar[3].textContent == "Less") {
				array_more_rightbar[3].textContent = "More";
			} else {
				array_more_rightbar[3].textContent = "Less";
			}
			array_text_rightbar[3].classList.toggle("d-none");
			break;
		case "btn_more_right_5":
			if (array_more_rightbar[4].textContent == "Less") {
				array_more_rightbar[4].textContent = "More";
			} else {
				array_more_rightbar[4].textContent = "Less";
			}
			array_text_rightbar[4].classList.toggle("d-none");
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
