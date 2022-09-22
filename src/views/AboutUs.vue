<template>
  <div class="home">
    <img class="element-absolute element-absolute--left-3" src="@/assets/leaf_full.svg" alt="">
    <img class="element-absolute element-absolute--leaf-4" src="@/assets/leaf_full.svg" alt="">
    <img class="element-absolute element-absolute--leaf-1" src="@/assets/leaf_outline.svg" alt="">
    <img class="element-absolute element-absolute--leaf-2" src="@/assets/leaf_outline.svg" alt="">
    <img class="element-absolute element-absolute--leaf-2" src="@/assets/leaf_outline.svg" alt="">
    <img class="element-absolute element-absolute--leaf-2" src="@/assets/leaf_outline.svg" alt="">
    <img class="element-absolute element-absolute--leaf-2" src="@/assets/leaf_outline.svg" alt="">
    <AboutUsHeading />
    <AboutUsMission />
    <AboutUsValues/>
    <AboutUsClients/>
    <AboutUsServices/>
    <AboutUsWork/>
    <AboutUsContact/>
  </div>
</template>

<script>
// @ is an alias to /src
import AboutUsHeading from '@/components/about_us/AboutUsHeading.vue';
import AboutUsMission from '@/components/about_us/AboutUsMission.vue';
import AboutUsValues from '@/components/about_us/AboutUsValues.vue';
import AboutUsClients from '@/components/about_us/AboutUsClients.vue';
import AboutUsWork from '@/components/about_us/AboutUsWork.vue';
import AboutUsContact from '@/components/about_us/AboutUsContact.vue';
import AboutUsServices from '@/components/about_us/AboutUsServices.vue';
export default {
  name: 'Home',
  components: {
    AboutUsHeading,
    AboutUsMission,
    AboutUsValues,
    AboutUsClients,
    AboutUsWork,
    AboutUsContact,
    AboutUsServices
  }
}
</script>
<style>
.home {
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 100px;
}
</style>