<template>
    <div class="about_us__contact">
        <div class="heading heading--after">Contact</div>
        <div class="contact__content">
            <div class="content__img">
                <img src="@/assets/about_us_4.svg" alt="">
            </div>
            <div class="content__text">
                <h2 class="text__heading">
                    Send a message
                </h2>
                <p class="text__desc">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos obcaecati exercitationem praesentium
                    totam aliquam velit nam quibusdam dolorum omnis blanditiis!
                </p>
                <div class="contact__box">
                    <div class="flex">
                        <input placeholder="john.doe@gmail.com" type="text" class="base__input">
                        <button class="base__button">Send</button>
                    </div>
                    <textarea placeholder="I'd like to ask..." class="base__input base__input--textarea" name="" id="" cols="30" rows="10"></textarea>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.about_us__contact {
    text-align: center;

    .contact__content {
        display: flex;
        flex-direction: column;

        @media(min-width:768px) {
            flex-direction: row-reverse;
            margin: 50px 0;
        }

        .content__img {
            img {
                max-width: 300px;
            }
        }

        .content__text {
            .contact__box{
                gap:20px;
                width:100%;
                display:flex;
                flex-direction: column;
                justify-content: flex-start;
            }
            .flex {
                display: flex;

                button.base__button {
                    margin: 0 !important;
                    width:100px;
                    border-radius: 0px 5px 5px 0px !important;
                }
            }
        }
    }
}
</style>