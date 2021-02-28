function adjustRating(severity) {
  document.getElementById("severityvalue").innerHTML = severity;
}


function selectResponse() {
	const s = document.querySelector('#selected')
	const sel = document.querySelector('#selectbrowser');
	s.style.display = "block";
	s.textContent = sel.value;
	
}