// Fetch JSON data and update profile
fetch("rexm_v-card.json")
  .then(response => response.json())
  .then(data => {
    let profileHTML = `
      <div class="card">
        <img src="${data.avatar_url}" alt="${data.display_name}" class="avatar">
        <h2>${data.display_name}</h2>
        <h4>${data.job_title}</h4>
        <h5>${data.company}</h5>
        <p>📍 ${data.location}</p>
        <div class="social-links">`;

    // Loop through verified accounts and add social icons
    data.verified_accounts.forEach(account => {
      profileHTML += `
        <a href="${account.url}" target="_blank">
          <img src="${account.service_icon}" alt="${account.service_label}" title="${account.service_label}">
        </a>`;
    });

    profileHTML += `</div></div>`;

    document.getElementById("profile-card").innerHTML = profileHTML;
  })
  .catch(error => console.error("Error fetching JSON:", error));

// Dark Mode Toggle
const darkModeToggle = document.getElementById("dark-mode-toggle");

// Check if dark mode was enabled previously
if (localStorage.getItem("dark-mode") === "enabled") {
    document.body.classList.add("dark-mode");
}

// Handle button click to toggle dark mode
darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Save dark mode preference
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("dark-mode", "enabled");
    } else {
        localStorage.setItem("dark-mode", "disabled");
    }
});
