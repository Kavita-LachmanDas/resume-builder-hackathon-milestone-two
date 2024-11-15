
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("resumeForm") as HTMLFormElement;
    const generatedResume = document.getElementById("generatedResume") as HTMLDivElement;
    const imageUpload = document.getElementById("imageUpload") as HTMLInputElement;
    const profilePic = document.getElementById("profilePic") as HTMLImageElement;
    const changeImageBtn = document.getElementById("changeImageBtn") as HTMLButtonElement;

    // Handle image upload when the user clicks "Change Image"
    changeImageBtn.addEventListener("click", function() {
        imageUpload.click();  // Trigger the file input when the button is clicked
    });

    imageUpload.addEventListener("change", function() {
        const file = imageUpload.files ? imageUpload.files[0] : null;
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                profilePic.src = e.target?.result as string;  // Set the uploaded image as profile picture
            };
            reader.readAsDataURL(file);  // Read the uploaded file and convert it to a URL
        }
    });

    // Form submission handling (the rest of your form logic)
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent page reload

        // Get form values
        const name = (document.getElementById("name") as HTMLInputElement).value;
        const email = (document.getElementById("email") as HTMLInputElement).value;
        const phone = (document.getElementById("phone") as HTMLInputElement).value;
        const address = (document.getElementById("address") as HTMLInputElement).value;
        const education = (document.getElementById("education") HTMLTextAreaElement).value;
        const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;

        const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
        const projects = (document.getElementById("projects") as HTMLTextAreaElement).value;
        const languages = (document.getElementById("languages") as HTMLTextAreaElement).value;
        const certifications = (document.getElementById("certifications") as HTMLTextAreaElement).value;
        const hobbies = (document.getElementById("hobbies") as HTMLTextAreaElementt).value;

        // Populate the resume template
        (document.querySelector(".resume-name") as HTMLElement).innerText = name;
        (document.querySelector(".resume-email") as HTMLElement).innerText = email;
        (document.querySelector(".resume-phone") as HTMLElement).innerText = phone;
        (document.querySelector(".resume-address") as HTMLElement).innerText = address;
        (document.querySelector(".resume-education") as HTMLElement).innerText = education;
        (document.querySelector(".resume-skills-list") as HTMLElement).innerText = skills;
        (document.querySelector(".resume-experience") as HTMLElement).innerText = experience;
        (document.querySelector(".resume-projects") as HTMLElement).innerText = projects;
        (document.querySelector(".resume-languages-list") as HTMLElement).innerText = languages;
        (document.querySelector(".resume-certifications") as HTMLElement).innerText = certifications;
        (document.querySelector(".resume-hobbies") as HTMLElement).innerText = hobbies;

        // Display the resume
        generatedResume.style.display = "block";
    });
});