<template>
    <div>
        <h2 class="heading">
            Search for a job
        </h2>
        <div class="filters">
            <multiselect   @input="computeFilters" v-model="filtersValues.job_offer_location" :multiple="true" :options="filters.locationFilter"
                :searchable="true" :close-on-select="true" :show-labels="false" placeholder="Pick a location">
            </multiselect>
            <multiselect  @input="computeFilters"  v-model="filtersValues.job_offer_title" :multiple="true" :options="filters.titleFilter"
                :searchable="true" :close-on-select="true" :show-labels="false" placeholder="Pick a job position">
            </multiselect>
            <multiselect @input="computeSorting" v-model="sorting.value" track-by="label" label="label" :multiple="false"
                :options="sorting.options" :searchable="false" :close-on-select="true" :show-labels="false"
                placeholder="Sort by"></multiselect>
        </div>
        <h2 class="heading heading--small">
            Job offers
        </h2>
        <div class="job_list__container">
            <div class="container__box" v-for="job in jobList" :key="job.id">
                <div v class="box box--left">
                    <div class="box__title">
                        {{ job.attributes.job_offer_title }} <span>{{ job.attributes.job_offery_seniority }}</span>
                    </div>
                    <div class="box__location">
                        <img src="@/assets/location.svg" alt="">
                        {{ job.attributes.job_offer_location }}
                    </div>
                    <div class="box__tags">
                        <div v-for="tag,idx in getTagList(job.attributes.job_offer_tags)" class="tags__tag" :key="idx">{{
                        tag }}</div>
                    </div>
                    <div class="box__salary">
                        {{ job.attributes.job_offer_sallary_min }} - {{ job.attributes.job_offer_sallary_max }} $
                    </div>
                </div>
                <div class="box box--right">
                    <div class="box__btns">
                        <router-link :to="{ name: 'Job', params: {id: job.id } }"><button class="btns__btn btns__btn--yellow">View details</button></router-link>
                        <router-link :to="{ name: 'Job', params: {id: job.id } }"><button class="btns__btn btns__btn--dark">Apply</button></router-link>
                        <button class="btns__btn btns__btn--green"><img src="@/assets/share.svg" alt="">Share</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="pagination__container">
            <div class="pagination__box" v-if="pagination.page>1" @click="changePage(pagination.page-1)">
                &#8249;
            </div>
            <div class="pagination__box" v-if="pagination.page>1" @click="changePage(pagination.page-1)">
                {{ pagination.page-1 }}
            </div>
            <div class="pagination__box pagination__box--active" @click="changePage(pagination.page)">
                {{ pagination.page }}
            </div>
            <div class="pagination__box" v-if="pagination.page < pagination.pageCount"
                @click="changePage(pagination.page+1)">
                {{ pagination.page+1 }}
            </div>
            <div class="pagination__box" v-if="pagination.page < pagination.pageCount"
                @click="changePage(pagination.page+1)">
                &#8250;
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Multiselect from 'vue-multiselect'
export default {
    data() {
        return {
            filtersValues: {
                job_offer_location: [],
                job_offer_title: [],
            },
            filters: {
                locationFilter: [],
                titleFilter: [],
            },
            sorting: {
                value: null,
                options: [
                    { label: "Salary low -> high", field: "job_offer_sallary_min", sort: "asc" },
                    { label: "Salary high -> low", field: "job_offer_sallary_min", sort: "desc" },
                    { label: "Location a -> z", field: "job_offer_location", sort: "asc" },
                    { label: "Salary z -> a", field: "job_offer_location", sort: "desc" },
                ]
            },
            jobList: null,
            fullJobList: null,
            pagination: null,
            currentPage: 1,
            filterString : "",
            sortingString : "",
        }
    },
    components: { Multiselect },
    mounted() {
        this.getJobs();
    },
    methods: {
        computeFilters() {
            this.filterString = "";
            let filters = "";
            
            for (const property in this.filtersValues) {
                console.log(property)
                console.log(this.filtersValues[property])
                this.filtersValues[property].forEach((el,idx)=>{
                    if(el != ""){
                        filters += `&filters[${property}][$in][${idx}]=${el}`
                    }
                })
            }
            this.filterString = filters;
            this.getJobs()
        },
        computeSorting(){
            this.sortingString = `&sort[0]=${this.sorting.value.field}%3A${this.sorting.value.sort}`
            this.getJobs()
        },
        getJobs() {
            const config = {
                headers: { Authorization: `Bearer 4cdbd9f1b16cfe4f31bd0f504d4266d6b73cca1ffc3acf447fbfd01cab1aa4e0045a3444a9fdcb3da0c3b5850e4e174ba2143a4f57a37bf55f4b325539883bb26d61de85d9908e38ae813e1d063139c11900f1058977458413a5289f00fb4494c831774bec996c2e54d5d2194edcc49c44c26e3fdf2b43cf19965770d5fe8463` }
            };
            axios.get(`https://evening-cliffs-27692.herokuapp.com/api/job-offers?pagination[page]=${this.currentPage}&pagination[pageSize]=3${this.filterString}${this.sortingString}`, config).then(data => {
                this.jobList = data.data.data
                this.pagination = data.data.meta.pagination
            }).catch(err => {
                console.log(err)
            })
            axios.get(`https://evening-cliffs-27692.herokuapp.com/api/job-offers`, config).then(data => {
                this.fullJobList = data.data.data
                this.getFilters(this.fullJobList)
            }).catch(err => {
                console.log(err)
            })
        },
        getTagList(tags) {
            return tags.split(",");
        },
        getFilters() {
            let locationFilter = [];
            let titleFilter = [];
            this.fullJobList.forEach(job => {
                locationFilter.push(job.attributes.job_offer_location)
                titleFilter.push(job.attributes.job_offer_title)
            })
            this.filters.locationFilter = [...new Set(locationFilter)];
            this.filters.titleFilter = [...new Set(titleFilter)];
        },
        changePage(page) {
            this.currentPage = page
            this.getJobs();
        }
    },
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css">

</style>
<style lang="scss" scoped>
.filters {
    display: flex;
    gap: 50px;
}

.pagination__container {
    margin: 30px 0;
    display: flex;
    gap: 10px;
    justify-content: flex-end;

    .pagination__box {
        justify-content: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1px 3px;
        gap: 10px;

        width: 24px;
        height: 24px;

        &--active {
            background: #FADB14;
        }

        border: 1px solid #00385F;
        border-radius: 2px;
    }
}

.job_list__container {
    display: flex;
    flex-direction: column;
    gap: 20px;

    .container__box {
        width: 100%;
        min-height: 200px;
        padding: 30px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        padding: 20px;
        gap: 16px;
        background: #FAFAFA;
        border: 1px solid #D9D9D9;
        border-radius: 15px;

        @media(min-width:768px) {
            flex-direction: row;
            align-items: center;
        }

        .box {
            display: flex;
            flex-direction: column;
            gap: 20px;

            .box__title {
                font-size: 20px;
                font-weight: 700;
                span{
                    background: #00C3A4;
                    color:white;
                    padding:5px;
                    border-radius: 5px;
                    margin:20px 0;
                }
            }

            .box__location {
                display: flex;
                align-items: center;
                gap: 10px;
            }

            .box__tags {
                display: flex;
                flex-wrap: wrap;
                gap: 10px;

                .tags__tag {
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    padding: 8px;
                    gap: 10px;
                    background: #F2C917;
                    border-radius: 9px;
                    font-weight: 600;

                    &:hover {
                        background: #ffd103;
                        cursor: pointer;
                    }
                }
            }

            .box__btns {
                display: flex;
                flex-direction: column;
                gap: 10px;

                .btns__btn {
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    padding: 15px 40px;
                    gap: 10px;
                    width: 305px;
                    height: 52px;
                    border-radius: 15px;
                    border: none;
                    color: #00385F;
                    font-weight: 700;
                    outline: none;

                    &--green {
                        border: 1px solid green;
                    }

                    &--yellow {
                        transition: .2s;
                        border: 1px solid #F2C917;

                        &:hover {
                            background: #F2C917;
                        }
                    }

                    &--dark {
                        background: black;
                        color: white;
                    }
                }
            }
        }
    }
}
</style>