// Preview Image on Upload
function previewImage(event) {
    const preview = document.getElementById('image-preview');
    preview.src = URL.createObjectURL(event.target.files[0]);
    preview.classList.remove('hidden');
}

// Add More Education
function addEducation() {
    const educationSection = document.getElementById('education-section');
    const newEducation = `
        <div class="education-entry">
            <label for="school">School:</label>
            <input type="text" class="school" name="school"><br><br>

            <label for="degree">Degree:</label>
            <input type="text" class="degree" name="degree"><br><br>

            <label for="year">Year of Graduation:</label>
            <input type="text" class="year" name="year"><br><br>
        </div>
    `;
    educationSection.insertAdjacentHTML('beforeend', newEducation);
}

// Add More Work Experience
function addExperience() {
    const experienceSection = document.getElementById('experience-section');
    const newExperience = `
        <div class="experience-entry">
            <label for="company">Company:</label>
            <input type="text" class="company" name="company"><br><br>

            <label for="role">Role:</label>
            <input type="text" class="role" name="role"><br><br>

            <label for="duration">Duration:</label>
            <input type="text" class="duration" name="duration"><br><br>
        </div>
    `;
    experienceSection.insertAdjacentHTML('beforeend', newExperience);
}

// Add More Skills
function addSkill() {
    const skillsSection = document.getElementById('skills-section');
    const newSkill = `<input type="text" class="skill" name="skill"><br><br>`;
    skillsSection.insertAdjacentHTML('beforeend', newSkill);
}

// Preview Resume
function previewResume() {
    const resumeContent = document.getElementById('resume-content');
    const previewSection = document.getElementById('resume-preview');
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    // Education Entries
    const educationEntries = document.querySelectorAll('.education-entry');
    let educationContent = '<h3>Education</h3>';
    educationEntries.forEach(entry => {
        const school = entry.querySelector('.school').value;
        const degree = entry.querySelector('.degree').value;
        const year = entry.querySelector('.year').value;
        educationContent += `<p>${degree} from ${school}, ${year}</p>`;
    });

    // Experience Entries
    const experienceEntries = document.querySelectorAll('.experience-entry');
    let experienceContent = '<h3>Work Experience</h3>';
    experienceEntries.forEach(entry => {
        const company = entry.querySelector('.company').value;
        const role = entry.querySelector('.role').value;
        const duration = entry.querySelector('.duration').value;
        experienceContent += `<p>${role} at ${company}, ${duration}</p>`;
    });

    // Skills Entries
    const skillEntries = document.querySelectorAll('.skill');
    let skillsContent = '<h3>Skills</h3><ul>';
    skillEntries.forEach(entry => {
        skillsContent += `<li>${entry.value}</li>`;
    });
    skillsContent += '</ul>';

    // Compile Resume
    resumeContent.innerHTML = `
        <h2>${name}</h2>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        ${educationContent}
        ${experienceContent}
        ${skillsContent}
    `;

    previewSection.classList.remove('hidden');
}
