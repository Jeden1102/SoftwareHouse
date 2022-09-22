<template>
    <div class="about_us__work">
        <div class="heading heading--after">Work</div>
        <div class="work__content">
            <div class="content__img">
                <img src="@/assets/about_us_3.svg" alt="">
            </div>
            <div class="content__text">
                <h2 class="text__heading">
                    Join our team
                </h2>
                <p class="text__desc">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos obcaecati exercitationem praesentium totam aliquam velit nam quibusdam dolorum omnis blanditiis!
                </p>
                <button class="base__button base__button--outline">
                    Offers
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.about_us__work{
    text-align: center;
    .work__content{
        display:flex;
        flex-direction: column;
        @media(min-width:768px){
            flex-direction: row;
            margin:50px 0;
        }
        .content__img{
            img{
                max-width:300px;
            }
        }
        .content__text{
            .base__button{
                margin:0 auto;
            }
        }
    }
}
</style>