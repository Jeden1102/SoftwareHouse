<template>
    <div class="about_us__heading">

        <div class="heading__text">
            <h1 class="heading">
                Pleasure, we are <span>YellowIpe.</span>
            </h1>
            <h2 class="subheading">
                We inspire the Technology <span>Connection</span>
                with the <span>people</span> .
            </h2>
            <button class="base__button">
                More about us
            </button>
        </div>
        <div class="heading__img">
            <img src="@/assets/about_us_1.svg" alt="">
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.about_us__heading {
    display:flex;
    flex-direction: column-reverse;
    position:relative;
    @media(min-width:768px) {
        flex-direction: row;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .subheading {
        font-weight: 400;
        font-size: 1rem;
        margin:20px 0;
        span {
            font-weight: 700;
        }
    }

    .heading__img {
        img {
            max-height: 350px;
            width: 100%;
        }
    }
}
</style>