<template>
    <div class="services__container">
        <div class="container__box ">
            <div class="box__img">
                <img src="@/assets/solutions/solution1.svg" alt="">
            </div>
            <div class="box__txt">
                <div class="heading heading--after">
                    Placement
                </div>
                <div class="txt__desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique velit animi aut nisi aliquam
                    repellat ex harum iusto natus, sapiente nihil quam tempore rerum blanditiis a, voluptate, nesciunt
                    consequatur pariatur?
                </div>
            </div>
        </div>
        <div class="container__box container__box--reversed">
            <div class="box__img">
                <img src="@/assets/solutions/solution2.svg" alt="">
            </div>
            <div class="box__txt">
                <div class="heading heading--after">
                    Outsourcing
                </div>
                <div class="txt__desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit harum voluptates rerum, unde autem labore, deserunt adipisci velit, nesciunt excepturi tenetur quasi doloribus quod quis pariatur perferendis commodi non dolorum cumque obcaecati nihil. Quasi, alias corrupti? Animi recusandae iste quaerat!
                </div>
            </div>
        </div>
        <div class="container__box">
            <div class="box__img">
                <img src="@/assets/solutions/solution3.svg" alt="">
            </div>
            <div class="box__txt">
                <div class="heading heading--after">
                    Nearshore
                </div>
                <div class="txt__desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit harum voluptates rerum, unde autem labore, deserunt adipisci velit, nesciunt excepturi tenetur quasi doloribus quod quis pariatur perferendis commodi non dolorum cumque obcaecati nihil. Quasi, alias corrupti? Animi recusandae iste quaerat!
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
.services__container {
    margin: 50px 0;
    display: flex;
    flex-direction: column;
    gap: 50px;

    .container__box {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 30px;

        @media(min-width:768px) {
            flex-direction: row;
        }
        &--reversed{
            @media(min-width:768px) {
            flex-direction: row-reverse;
        }
        }
        .box__txt {
            display: flex;
            flex-direction: column;
            gap: 30px;
            @media(min-width:768px){
                width:50%;
            }
        }
    }
}
</style>