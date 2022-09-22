<template>
    <div class="about_us__services">
        <div class="heading heading--after">
            Services
        </div>
        <div class="services__list">
            <Flicking :options="{ moveType: 'freeScroll', bound: true }" @move-end="onMoveEnd">
                <div class="list__box">
                    <img src="@/assets/services/service1.svg" alt="">
                    <h2 class="box__heading">
                        Placement
                    </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis earum dolorem nesciunt, ducimus
                        illum quasi dolorum alias laudantium quas quaerat.</p>
                </div>
                <div class="list__box">
                    <img src="@/assets/services/service2.svg" alt="">
                    <h2 class="box__heading">
                        Outsourcing
                    </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis earum dolorem nesciunt, ducimus
                        illum quasi dolorum alias laudantium quas quaerat.</p>
                </div>
                <div class="list__box">
                    <img src="@/assets/services/service3.svg" alt="">
                    <h2 class="box__heading">
                        Nearshore
                    </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis earum dolorem nesciunt, ducimus
                        illum quasi dolorum alias laudantium quas quaerat.</p>
                </div>
            </Flicking>
            <h2>Services details<img src="@/assets/arrow-right.svg" alt=""></h2>
        </div>
    </div>
</template>

<script>
import { Flicking } from "@egjs/vue-flicking";

export default {
    components: {
        Flicking
    }
}
</script>

<style lang="scss" scoped>

.about_us__services {
    .heading {
        text-align: center;
    }

    .services__list {
        margin:30px 0;
        .list__box {
            width: 300px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin:0 30px;
            padding:20px;
            border-radius: 20px;
            position:relative;
            transition: .2s;
            cursor: pointer;
            overflow:hidden;
            &:hover{
                background-color: rgb(228, 228, 228);
                &::after{
                    left:20px;
                }
            }
            &::after{
                transition: .2s;
                position:absolute;
                left:-20px;
                bottom:10px;
                transform: scale(1.5);
                content:url('../../assets/arrow-right.svg');
            }
            .box__heading {
                font-weight: 700;
                font-size: 24px;
                text-align: center;
                letter-spacing: 0.2px;
                margin: 0;
            }

        }
    }
}
</style>