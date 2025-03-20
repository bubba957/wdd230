const optionsDMY = {day: 'numeric', month: 'long', year: 'numeric'};

document.querySelector('.lastModified').textContent = new Date().toLocaleDateString('en-US', optionsDMY);