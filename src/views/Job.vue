<template>
    <div>
        <div class="back__box">
            <img src="@/assets/arrow-right.svg" alt="">
            <router-link :to="{name:'Jobs'}"><p>Go Back to offers</p></router-link>
        </div>
        <div class="job__container">
            <div class="job__box_first">
                <div class="first__box">
                    <h4 class="first__heading">
                        <img src="@/assets/job_icons/general.svg" alt="">
                        Job time
                    </h4>
                    <div class="first__desc">
                        {{ jobData.attributes.job_offer_time }}
                    </div>
                </div>
                <div class="first__box">
                    <h4 class="first__heading">
                        <img src="@/assets/job_icons/general.svg" alt="">
                        Location
                    </h4>
                    <div class="first__desc">
                        {{ jobData.attributes.job_offer_location }}
                    </div>
                </div>
                <div class="first__box">
                    <h4 class="first__heading">
                        <img src="@/assets/job_icons/interface.svg" alt="">
                        Start day
                    </h4>
                    <div class="first__desc">
                        {{ jobData.attributes.job_offer_start }}
                    </div>
                </div>
                <div class="first__box">
                    <h4 class="first__heading">
                        <img src="@/assets/job_icons/file.svg" alt="">
                        Salary
                    </h4>
                    <div class="first__desc">
                        {{ jobData.attributes.job_offer_sallary_min }} - {{ jobData.attributes.job_offer_sallary_max }} $
                    </div>
                </div>
            </div>
            <div class="job__desc">
                <pre>{{ jobData.attributes.job_offer_desc }}</pre>
                
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            jobData: null,
        }
    },
    props: ["id"],
    mounted() {
        this.getJobData()
    },
    methods: {
        getJobData() {
            const config = {
                headers: { Authorization: `Bearer b42def251b57c58af2d02f1f5fda40be09fcbc5b6bdeafa958bf598e80113b23d4576d741e763f3ef3f57943c29f09f125c99911d8a9f536d4ba0e5624857e46a8c8e4c384e29cd2c7e6ae80ac8a13bbd13ca151de73ebf1e8ca7f2dbb0a1eeb6fc0191a4fc4199ad94953a8c833e2377ece0d0bb56bccdd660973eed3588d26` }
            };
            axios.get(`http://localhost:1337/api/job-offers/${this.id}`, config).then(data => {
                this.jobData = data.data.data
            }).catch(err => {
                console.log(err)
            })
        }
    },
}
</script>

<style lang="scss" scoped>
    .back__box{
        display:flex;
        justify-content: flex-start;
        align-items: center;
        gap:10px;
        img{
            transform: rotate(-180deg);
        }
    }
    .job__container{
        display:Flex;
        flex-direction: column;
        @media(min-width:768px){
            flex-direction: row;
        }
        .job__box_first{
            flex:1;
            background-color: rgb(243, 243, 243);
            padding:20px;
            border-radius: 10px;
            .first__box{
                .first__heading{
                    display:flex;
                    gap:20px;
                }
            }

        }
        .job__desc{
            padding:20px;
                pre{
                    white-space: break-spaces;
                }
            flex:1;
            @media(min-width:768px){
                flex:4;
            }
        }
    }

</style>