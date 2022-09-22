<template>
    <div class="solutions__client">
        <div class="heading">
            Customer reviews
        </div>
        <div class="client__container">
            <div class="container__box">
                <img src="@/assets/reviews/client1.svg" alt="">
                <h2>Jane Doe</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio quasi maxime modi in eaque aliquid animi atque voluptatem, illo mollitia voluptas! Nam minima quibusdam dolorum tenetur nostrum eum ullam libero.</p>
            </div>
            <div class="container__box">
                <img src="@/assets/reviews/client2.svg" alt="">
                <h2>John Doe</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio quasi maxime modi in eaque aliquid animi atque voluptatem, illo mollitia voluptas! Nam minima quibusdam dolorum tenetur nostrum eum ullam libero.</p>
            </div>
            <div class="container__box">
                <img src="@/assets/reviews/client3.svg" alt="">
                <h2>Anna Stone</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio quasi maxime modi in eaque aliquid animi atque voluptatem, illo mollitia voluptas! Nam minima quibusdam dolorum tenetur nostrum eum ullam libero.</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.solutions__client {
    padding: 50px;

    .client__container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
        margin:30px 0;
        @media(min-width:992px) {
            flex-direction: row;
        }

        .container__box {
            width:300px;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px;
            gap: 10px;
            background: #F7F7F7;
            border-radius: 28px;

        }
    }
}
</style>