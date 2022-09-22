<template>
    <div id="nav">
        <img src="@/assets/logo.svg" alt="">
        <nav class="navigation">
            <router-link class="link" :to="{name:'AboutUs'}">About us</router-link>
            <router-link class="link" :to="{name:'Solutions'}">Solutions</router-link>
            <router-link class="link" :to="{name: 'Jobs'}">Work</router-link>
            <router-link class="link" to="/">Contact</router-link>
            <router-link class="link" to="/">Language</router-link>
        </nav>
        <img v-if="!showMobileMenu" @click="toggleMobileNav" class="burger-icon" src="@/assets/burger.svg" alt="">
        <img v-else @click="toggleMobileNav" class="burger-icon burger-icon--close" src="@/assets/hide-menu.svg" alt="">
    </div>
</template>

<script>
export default {
    data() {
        return {
            showMobileMenu:false,
        }
    },
    methods: {
        toggleMobileNav(){
            this.showMobileMenu = !this.showMobileMenu
            document.querySelector('.navigation').classList.toggle('nav-show')
        }
    },
}
</script>

<style lang="scss" scoped>
#nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 62px 0;
    nav {
        z-index:5;
        gap: 32px;
        display: flex;
        flex-direction: column;
        position:absolute;
        left:0;
        transition: .3s;
        top:-100%;
        width:100%;
        background: #F2C917;
        border-radius: 0px 0px 44px 44px;
        padding:40px 0;
        @media(min-width:768px){
            background: none;
            position:relative;
            width:unset;
            flex-direction: row;
        }
    }
    .nav-show{
        top:0;
    }
    .burger-icon{
        display:block;
        transform: scale(2);
        cursor: pointer;
        @media(min-width:768px){
            display:none;
        }
        &--close{
            z-index:6;
        }
    }
    .link {
        font-weight: 700;
        color: #00385F;
        font-size: 14px;
        line-height: 24px;
        text-decoration: none;
        text-align: center;
        letter-spacing: 0.2px;
        flex: none;
        order: 1;
        flex-grow: 0;
        position: relative;
        width:fit-content;
        margin:0 auto;
        &:hover::after {
            width: 100%;
        }

        &::after {
            content: "";
            position: absolute;
            lefT: 0;
            bottom: 0;
            width: 0;
            transition: .2s;
            height: 2px;
            background: white;
            @media(min-width:768px){
                background: #FFC800;
            }
        }
    }
}
</style>