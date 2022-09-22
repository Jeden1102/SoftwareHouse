<template>
  <div id="app">
    <div class="container">
    <header>
      <BaseHeader/>
    </header>
    <main>
      <router-view />
    </main>

  </div>
  <footer>
      <BaseFooter/>
    </footer>
  </div>

</template>

<script>
import BaseHeader from '@/components/base/BaseHeader.vue';
import BaseFooter from '@/components/base/BaseFooter.vue';
export default {
  components: {
    BaseHeader,
    BaseFooter
  }
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
body{
    padding:0;
  margin:0;
  box-sizing: border-box;
  }
#app {
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: #00385F;
  overflow-x: hidden;
  a{
    color:black;
    text-decoration: none;
  }
 
  .container{
    width: 95%;
  margin: 0 auto;
  @media(min-width:768px) {
    width: 90%;
  }

  @media(min-width:992px) {
    width: 85%;
  }

  @media(min-width:1200px) {
    width: 80%;
  }
  }
  

  .heading {
    font-weight: 700;
    font-size: 48px;
    line-height: 57px;
    position:relative;
    letter-spacing: 0.2px;
    &--small{
      font-size:28px;
    }
    &--after{
      &::after{
        position:absolute;
        content:'';
        width:30%;
        height:5px;
        background: #F2C917;
        left:40%;
        bottom:-8px;
      }
    }
    span {
      color: rgba(242, 201, 23, 1);
    }
  }

  .base__button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 15px 40px;
    gap: 10px;
    background: #F2C917;
    border-radius: 16px;
    color:White;
    font-weight: 700;
    border:none;
    outline:none;
    margin:18px auto;
    transition: .2s;
    &--outline{
      background: none;
      border:2px solid #F2C917;
      color:#00385F;
    }
    &:hover{
      color:white;
      cursor: pointer;
      background: #FFC800;
    }
  }
  .base__input{
    padding: 14px 16px;

width: 248px;
height: 48px;

/* Text / Gray 100 */
border:none;
outline: none;
background: #F4F5F7;
border-radius: 5px 0px 0px 5px;
&--textarea{
  height:150px;
  width:80%;
}
  }
  .element-absolute{
    position:absolute;
    z-index:-1;
    &--leaf-1{
      left:-170px;
      top:200px;
      transform: rotate(75deg);
    }
    &--leaf-2{
      right:0px;
      top:500px;
      @media(min-width:768px){
        top:400px;
      }
    }
  }
}
</style>
