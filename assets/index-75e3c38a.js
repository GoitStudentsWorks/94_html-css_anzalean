(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();(()=>{const n={openModalBtn:document.querySelectorAll("[data-menu-open]"),closeModalBtn:document.querySelector("[data-menu-close]"),modal:document.querySelector("[data-menu]"),closeMenuLink:document.querySelectorAll(".header-menu-list-item-link")};n.openModalBtn.forEach(o=>{o.addEventListener("click",l)}),n.closeMenuLink.forEach(o=>o.addEventListener("click",l)),n.closeModalBtn.addEventListener("click",l),n.modal.addEventListener("click",r);function r(o){o.target===o.currentTarget&&n.modal.classList.add("is-hidden")}function l(){n.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}})();
