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
                headers: { Authorization: `Bearer 4cdbd9f1b16cfe4f31bd0f504d4266d6b73cca1ffc3acf447fbfd01cab1aa4e0045a3444a9fdcb3da0c3b5850e4e174ba2143a4f57a37bf55f4b325539883bb26d61de85d9908e38ae813e1d063139c11900f1058977458413a5289f00fb4494c831774bec996c2e54d5d2194edcc49c44c26e3fdf2b43cf19965770d5fe8463` }
            };
            axios.get(`https://evening-cliffs-27692.herokuapp.com/api/job-offers/${this.id}`, config).then(data => {
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