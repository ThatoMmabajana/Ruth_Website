function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
  document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');
  
    dropdowns.forEach(dropdown => {
      dropdown.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent the default behavior of the link click
        
        // Toggle the dropdown content visibility
        const content = this.querySelector('.dropdown-content');
        content.classList.toggle('show');
      });
  
      // Close the dropdown menu if the user clicks outside of it
      document.addEventListener('click', function(event) {
        if (!dropdown.contains(event.target)) {
          dropdown.querySelector('.dropdown-content').classList.remove('show');
        }
      });
    });
  });
  
  

