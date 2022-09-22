<template>
    <div class="about_us__mission">
        <div class="mission__image">
            <img src="@/assets/about_us_2.svg" alt="">
        </div>
        <div class="mission__text">
            <div class="heading heading--after">
                What is our mission?
            </div>
            <div class="subheading">
                Inspiring the connection of technology with people, fostering the best of our professionals through our
                expertise in finding and attracting the best talent for the best projects.
            </div>
        </div>

    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.about_us__mission {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:50px;
    position:relative;
    @media(min-width:768px) {
        flex-direction: row;
    }
    .mission__text{
        width:100%;
        display:flex;
        flex-direction: column;
        gap:40px;
        @media(min-width:768px){
            width:60%;
        }
    }
    .mission__image {
        img {
            max-height: 350px;
            width: 100%;
        }
    }
}
</style>