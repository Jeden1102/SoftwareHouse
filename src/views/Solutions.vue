<template>
    <div>
        <SolutionsStart/>
        <SolutionsServices/>
        <SolutionsPeople/>
        <SolutionsClients/>
        <AboutUsContact/>
    </div>
</template>

<script>
    import SolutionsStart from '@/components/solutions/SolutionsStart.vue';
    import SolutionsServices from '@/components/solutions/SolutionsServices.vue';
    import SolutionsPeople from '@/components/solutions/SolutionsPeople.vue';
    import SolutionsClients from '@/components/solutions/SolutionsClients.vue';
    import AboutUsContact from '@/components/about_us/AboutUsContact.vue';
    export default {
        components:{
            SolutionsStart,
            SolutionsServices,
            SolutionsPeople,
            SolutionsClients,
            AboutUsContact
        }
    }
</script>

<style lang="scss" scoped>

</style>