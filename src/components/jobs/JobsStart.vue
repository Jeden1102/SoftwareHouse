<template>
    <div class="jobs__container">
        <div class="container__txt">
            <div class="heading">
                Looking for a great job?
            </div>
            <p>It's an amazing for you to start a new job - take a look at our offers and feel free to send CV or contact us for details !</p>
        </div>
        <div class="container__img">
            <img src="@/assets/jobs_start.svg" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.jobs__container{
    display:flex;
    flex-direction: column;
    gap:50px;
    .container__img{
        img{
            max-width:400px;
            @media(min-width:768px){
                max-width:600px;
            }
        }
    }
    @media(min-width:768px){
        flex-direction: row;
    }
}
</style>