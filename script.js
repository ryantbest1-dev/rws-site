// Ryan's Web Solutions interactions
function toggleMenu(){
  const nav = document.querySelector('.nav');
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
}

function contactSubmit(e){
  e.preventDefault();
  const data = new FormData(e.target);
  const name = encodeURIComponent(data.get('name'));
  const email = encodeURIComponent(data.get('email'));
  const msg = encodeURIComponent(data.get('message'));
  const subject = encodeURIComponent('Project inquiry from website');
  const body = encodeURIComponent(`Name: ${name}%0AEmail: ${email}%0A%0A${decodeURIComponent(msg)}`);
  window.location.href = `mailto:ryantbest1@gmail.com?subject=${subject}&body=${body}`;
  return false;
}

document.getElementById('year').textContent = new Date().getFullYear();
