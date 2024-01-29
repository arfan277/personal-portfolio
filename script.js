// function toggleMenu() {
//     const menu = document.querySelector(".menu-links");
//     const icon = document.querySelector(".hamburger-icon");
//     menu.classList.toggle("open");
//     icon.classList.toggle("open");
//   }
  
// Toggle menu function
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  const isOpen = menu.classList.contains("open");

  // If the menu is already open, close it
  if (isOpen) {
      menu.classList.remove("open");
      icon.classList.remove("open");
  } else {
      // If the menu is closed, open it
      menu.classList.add("open");
      icon.classList.add("open");
      
      // Add event listener to close menu when clicking anywhere outside of it
      document.addEventListener("click", closeMenuOutside);
  }
}

// Function to close menu when clicking anywhere outside of it
function closeMenuOutside(event) {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  if (!menu.contains(event.target) && !icon.contains(event.target)) {
      menu.classList.remove("open");
      icon.classList.remove("open");
      document.removeEventListener("click", closeMenuOutside);
  }
}
