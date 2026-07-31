const filterButtons=document.querySelectorAll('.planet-filter');
const planetCards=document.querySelectorAll('.planet-card');
filterButtons.forEach((button)=>{button.addEventListener('click',()=>{const selectedFilter=button.dataset.filter;filterButtons.forEach((item)=>item.classList.remove('is-active'));button.classList.add('is-active');planetCards.forEach((card)=>{const shouldShow=selectedFilter==='all'||selectedFilter===card.dataset.category;card.classList.toggle('is-hidden',!shouldShow);});});});
