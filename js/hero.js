window.addEventListener('scroll', function () {
  var topbar = document.getElementById('topbar');

  // Change the background color to pink when the user scrolls
  if (window.scrollY > 0) {
    topbar.style.backgroundColor = 'var(--bg-yellowish-color)';
  } else {
    topbar.style.backgroundColor = 'transparent';
  }
});
