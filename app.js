document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("resumeForm");
    var generatedResume = document.getElementById("generatedResume");
    var imageUpload = document.getElementById("imageUpload");
    var profilePic = document.getElementById("profilePic");
    var changeImageBtn = document.getElementById("changeImageBtn");
    // Handle image upload when the user clicks "Change Image"
    changeImageBtn.addEventListener("click", function () {
        imageUpload.click(); // Trigger the file input when the button is clicked
    });
    imageUpload.addEventListener("change", function () {
        var file = imageUpload.files ? imageUpload.files[0] : null;
        if (file) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var _a;
                profilePic.src = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result; // Set the uploaded image as profile picture
            };
            reader.readAsDataURL(file); // Read the uploaded file and convert it to a URL
        }
    });
    // Form submission handling (the rest of your form logic)
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page reload
        // Get form values
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var address = document.getElementById("address").value;
        var education = document.getElementById("education").value;
        var skills = document.getElementById("skills").value;
        var experience = document.getElementById("experience").value;
        var projects = document.getElementById("projects").value;
        var languages = document.getElementById("languages").value;
        var certifications = document.getElementById("certifications").value;
        var hobbies = document.getElementById("hobbies").value;
        // Populate the resume template
        document.querySelector(".resume-name").innerText = name;
        document.querySelector(".resume-email").innerText = email;
        document.querySelector(".resume-phone").innerText = phone;
        document.querySelector(".resume-address").innerText = address;
        document.querySelector(".resume-education").innerText = education;
        document.querySelector(".resume-skills-list").innerText = skills;
        document.querySelector(".resume-experience").innerText = experience;
        document.querySelector(".resume-projects").innerText = projects;
        document.querySelector(".resume-languages-list").innerText = languages;
        document.querySelector(".resume-certifications").innerText = certifications;
        document.querySelector(".resume-hobbies").innerText = hobbies;
        // Display the resume
        generatedResume.style.display = "block";
    });
});
