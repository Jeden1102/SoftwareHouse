<template>
    <div>
        <JobsStart/>
        <JobsList/>
    </div>
</template>

<script>
    import JobsStart from '@/components/jobs/JobsStart.vue';
    import JobsList from '@/components/jobs/JobsList.vue';
    export default {
        components:{
            JobsStart,
            JobsList
        }
    }
</script>

<style lang="scss" scoped>

</style>