<template>
    <div class="about_us__clients">
        <div class="heading">
            Our clients

        </div>
        <div class="clients__images">
            <Flicking :options="{ moveType: 'freeScroll', bound: true }" @move-end="onMoveEnd">
                <div class="images__box" v-for="client in clients" :key="client">
                    <img :src="createImg(client)" alt="">
                </div>
            </Flicking>
        </div>
    </div>
</template>

<script>
import { Flicking } from "@egjs/vue-flicking";
export default {
    data() {
        return {
            clients: ["logo1.svg", "logo2.svg", "logo3.svg", "logo4.svg", "logo5.svg", "logo6.svg"]
        }
    },
    methods: {
        createImg(client) {
            return require(`@/assets/clients/${client}`);
        }
    },
    components: {
        Flicking
    }
}
</script>

<style lang="scss" scoped>
.about_us__clients {
    .heading {
        text-align: center;
    }
}

.clients__images {
    .images__box {
        padding: 15px;
        border-radius: 5px;
        transition: .3s;

        &:hover {
            background: rgb(238, 238, 238);
        }
    }

    margin-top:100px;
    display:flex;
    flex-direction: column;
    gap:20px;
    justify-content: center;
    align-items: center;

    @media(min-width:768px) {
        flex-direction: row;
    }

    @media(min-width:992px) {
        gap: 70px;
    }
}
</style>