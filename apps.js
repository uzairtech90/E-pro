
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("topBtn").style.display = "block";
  } else {
    document.getElementById("topBtn").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
document.addEventListener('DOMContentLoaded', function () {
  // Get the search icon element
  const searchIcon = document.querySelector('.fa-magnifying-glass');

  // Get the search bar element
  const searchBar = document.querySelector('.search-bar');

  // Add click event listener to the search icon
  searchIcon.addEventListener('click', function () {
      // Toggle the visibility of the search bar
      searchBar.style.display = (searchBar.style.display === 'none' || searchBar.style.display === '') ? 'flex' : 'none';

      // Scroll to the search bar if it's visible
      if (searchBar.style.display !== 'none') {
          searchBar.scrollIntoView({ behavior: 'smooth' });
      }
  });
});