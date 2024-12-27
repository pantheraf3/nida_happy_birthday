const name = document.querySelector(".name")
const age = document.querySelector(".age")
const thanks = document.querySelector(".thanks")

const message = document.querySelector(".celebrant_info")
const submit = document.querySelector(".submit")

function showMessage() {
	submit.addEventListener("click", () => {
		if (name.value === "" || age.value === "") {
			alert("Inputs can't be empty")
		} else{
			message.innerHTML = `
			<div class="message">
				<p>
					Happy birthday to ${name.value}, All thanks to Allah (SWT) for granting you another year of life. May Allah (SWT) bless you with barakah in your time, rizq, and health. May He grant you success in this life and the Hereafter, and may you always remain steadfast on the straight path.
					${age.value} looks good on you. <br>
				</p>
			</div>
			`
		}
	})
}
showMessage()