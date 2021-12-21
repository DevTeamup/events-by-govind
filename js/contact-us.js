const username = document.getElementById('name');
const email = document.getElementById('gmail');
const number = document.getElementById('number');
const subject = document.getElementById('subject');
const content = document.getElementById('content');
const formSubmit = document.getElementById('formSubmit');
const submitBtn = document.getElementById('submitBtn');

console.log(name, gmail, number, subject, content);

submitBtn.addEventListener('click', function () {
    if (username.value !== "" && number.value !== "") {
        submitBtn.disabled = true;
        fetch("https://formsubmit.co/ajax/rgshinde34@gmail.com", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                Name: username.value,
                "Email ID": email.value,
                Contact: number.value,
                Subject: subject.value,
                Message: content.value
            })
        }).then(response => response.json())
            .then(data => {
                console.log(data);
                if (data.success) snackbarHandler('The form submitted successfully!', true)
                else snackbarHandler(data.message, false);

                submitBtn.disabled = false;
            })
            .catch(error => console.log(error));
    } else {
        submitBtn.disabled = false;
        return snackbarHandler('Your Name and Conatact number is required!', false)
    }
});


