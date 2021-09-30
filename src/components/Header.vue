<template>
  <div class="hello">
<header class="header">
    <div class="header__wrapper">
        <div class="header__container _container">
            <div class="menu_icon icon-menu " v-bind:class="{ _active: activeEl===true } " @click="activeEl = !activeEl">
                <span></span>
                <span class="small"></span>
                <span></span>
             </div>

            <div id="header-nav" class="header__items" v-bind:class="{ _active: activeEl===true } ">
                <ul class="header__left">
                    <li class="header__item">
                        <a class="header__link" href="#tales">TALE OF LIONS</a>
                    </li>
                    <li class="header__item">
                        <a class="header__link" href="#kinds">LIONS KINDS</a>
                    </li>
                    <li class="header__item">
                        <a class="header__link" href="#roadmap">ROADMAP</a>
                    </li>
     
                    <li class="header__item">
                        <a class="header__link" href="#why">WHY TO BUY</a>
                    </li>
                    <li class="header__item">
                        <a class="header__link" href="#faq">FAQ</a>
                    </li>
                    <li class="header__item">
                        <a class="header__link" href="#team">TEAM</a>
                    </li>
                    <li class="header__item">
                        <a class="header__link" href="#contacts">CONTACTS</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</header>
  </div>
</template>

<script>

export default {
	data:()=> {
	return {
			activeEl: false,
		}
	},
	mounted() {
		this.anchorAnim();
		this.mobMenu();
		this.observer();
	},
	methods: {
		anchorAnim(){
			const anchors = document.querySelectorAll('a[href^="#"]')
			for (let anchor of anchors){
			anchor.addEventListener("click", function(event){
				event.preventDefault();
				const blockID = anchor.getAttribute('href')
				document.querySelector('' + blockID).scrollIntoView({
				behavior:"smooth",
				block: "start"
				})
			})
			}
		},
		mobMenu(){
			if (window.screen.width < 800){
			const hrefs = document.querySelectorAll('.header__link')
			for (let href of hrefs){
			href.addEventListener("click", function(){
				const menu = document.querySelector('.icon-menu')
				const items= document.querySelector('.header__items')
				menu.classList.toggle('_active')
				items.classList.toggle('_active')
			})
			}
		}
		},
		observer(){
			let observer = new IntersectionObserver((entries)=>{
				entries.forEach(
				entry =>{
					if(entry.isIntersecting){
						document.querySelector('.header').classList.remove('_active');
				}else{
					document.querySelector('.header').classList.add('_active');
				}
				}
			)
			}, { threshold: 1});

			document.querySelectorAll('.header').forEach(
			p => {observer.observe(p)}
			);
		}
			
	},
}



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

