// Wait until the page loads
document.addEventListener("DOMContentLoaded", function() {
  // Use the profileData object from rexm_v-card.js
  const data = profileData;

  let profileHTML = `
    <div class="card">
      <img src="${data.avatar_url}" alt="${data.display_name}" class="avatar">
      <h2>${data.display_name}</h2>
      <h4>${data.job_title}</h4>
      <h5>${data.company}</h5>
      <p>📍 ${data.location}</p>
      <div class="social-links">`;

  // ✅ Loop through verified accounts and add social icons (ONLY ONCE)
  data.verified_accounts.forEach(account => {
      profileHTML += `
        <a href="${account.url}" target="_blank">
          <img src="${account.service_icon}" alt="${account.service_label}" title="${account.service_label}">
        </a>`;
  });

  profileHTML += `</div></div>`;

  // ✅ Insert generated HTML into the page
  document.getElementById("profile-card").innerHTML = profileHTML;

  // ✅ Dark Mode Toggle
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
});
