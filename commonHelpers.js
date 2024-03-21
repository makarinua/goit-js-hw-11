import{i as n,S as c}from"./assets/vendor-39d661cd.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&e(a)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function e(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();function d(o){const s=document.querySelector(".gallery"),i=o.hits.map(e=>`<li class="gallery-item" data-id="${e.id}">
          <div class="img-container" >
          <a class="large-image" href="${e.largeImageURL}">
          <img class="image" src="${e.webformatURL}" alt="${e.tags}">
          </a> 
          </div>
          <ul class="description-list" >
            <li class="description-item"><p>Likes</p><p>${e.likes}</p></li>
            <li class="description-item"><p>Views</p><p>${e.views}</p></li>
            <li class="description-item"><p>Comments</p><p>${e.comments}</p></li>
            <li class="description-item"><p>Downloads</p><p>${e.downloads}</p></li>
          </ul>
        </li>`).join("");s.insertAdjacentHTML("afterbegin",i)}function m(o){const s=document.querySelector(".loader");s.classList.remove("is-hidden");const i=`key=42614843-af27c28624474ca020601ef6c&q=${o.target.elements.search.value.trim()}&image_type=photo&orientation=horizontal&safesearch=true`;fetch(`https://pixabay.com/api/?${i}`).then(e=>{if(e.ok)return e.json();throw new Error(e.status)}).then(e=>{e.hits.length===0?n.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"red",messageColor:"white",position:"topRight"}):d(e)}).then(()=>{s.classList.add("is-hidden"),new c(".large-image",{captionDelay:250,captionsData:"alt"}).refresh()}).catch(e=>{n.show({message:"Sorry, something goes wrong!",backgroundColor:"red",messageColor:"white",position:"topCenter"})})}const l=document.querySelector(".form");l.addEventListener("submit",p);function p(o){o.preventDefault(),o.target.elements.search.value===""?n.show({message:"Запит на пошук порожній",backgroundColor:"red",messageColor:"white",position:"topRight"}):(document.querySelector(".gallery").innerHTML="",m(o)),l.reset()}
//# sourceMappingURL=commonHelpers.js.map
