// script to pause image animation when image is off screen

// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Select the profile image element
  const profileImage = document.querySelector(".profile-image");

  // Create an Intersection Observer to monitor when the image is in the viewport
  const observer = new IntersectionObserver((entries) => {
    // Handle each intersection entry
    entries.forEach((entry) => {
      // Check if the image is currently in the viewport
      if (entry.isIntersecting) {
        // Add the 'animated' class to trigger the animation
        profileImage.classList.add("animated");
      } else {
        // Remove the 'animated' class to pause the animation when out of the viewport
        profileImage.classList.remove("animated");
      }
    });
  });

  // Start observing the profile image
  observer.observe(profileImage);
});
