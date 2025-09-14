<template>
  <section
    class="hero-section relative h-screen bg-cover bg-center flex items-end justify-start text-white"
    style="background-image: url(&quot;/images/news/ocean-vuong/top.png&quot;)"
  >
    <div class="text-wrapper relative my-[60px] mx-[100px]">
      <div
        class="top-first-text absolute inset-0 flex items-end justify-start w-[600px] text-4xl"
      >
        <div>
          <p>Three weeks after my mother died,</p>
          <p class="indent-[2.5em]">my brother moved in with me.</p>
          <p class="indent-[1em]">In our grief I emerged, oddly enough,</p>
          <p class="indent-[2.5em]">as a kind of father</p>
        </div>
      </div>
      <div
        class="top-second-text absolute opacity-0 inset-0 flex items-end justify-start w-[600px]"
      >
        <div>
          <div class="text-[17px]">Opinion</div>
          <h1 class="uppercase text-[124px] leading-[115px]">
            My <br />
            Brother's <br />
            keeper
          </h1>
          <div class="text-[23px] leading-[25px]">
            Photographs and text <br />
            by Ocean Vuong
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Scroll uchun qo‘shimcha content -->
  <div class="h-[200vh] bg-gray-100"></div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".hero-section",
      start: "top top",
      end: "bottom+=100% top",
      scrub: true,
      pin: true,
      //   markers: true,
    },
  });

  tl.to(".top-first-text", { autoAlpha: 0, duration: 1 }).to(
    ".top-second-text",
    { autoAlpha: 1, duration: 1 }
  );
});
</script>
