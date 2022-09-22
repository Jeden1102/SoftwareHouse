<template>
    <div class="solutions__start">
        <div class="start__container">
            <div class="start__text">
                <div class="heading">
                    Find the right Solution for your business.
                </div>
                <div class="text__desc">
                    We work with the most current technologies and offer the best solutions for your business.
                </div>
                <div class="text__button">
                    Services
                </div>
            </div>
            <div class="start__img">
                <img src="@/assets/solutions1.svg" alt="">
            </div>
        </div>

    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" >
.solutions__start {
    padding:20px;
    .start__container {
        width: 70%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        @media(min-width:992px){
            flex-direction: row;
        }
        .start__text {
            display:flex;
            flex-direction: column;
            gap:20px;
            .text__button {
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 15px 40px;
                gap: 10px;

                width:40%;

                /* Turquose */

                background: #28E4C9;
                border-radius: 16px;
                color: white;
                font-weight: bold;
            }
        }
    }

    margin-left: -2.5%;

    @media(min-width:768px) {
        margin-left: -5.5%;
    }

    @media(min-width:768px) {
        margin-left: -8.8%;
    }

    @media(min-width:1200px) {
        margin-left: -12.5%;
    }

    width:100vw;
    background: linear-gradient(202.06deg, #F2C917 14.42%, #FFB800 77.68%);

}
</style>