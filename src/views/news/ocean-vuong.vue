<template>
  <div>
    <section
      class="top-section relative h-screen bg-cover bg-center flex items-end justify-start text-white"
      style="
        background-image: url(&quot;/images/news/ocean-vuong/top.png&quot;);
      "
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

    <section
      class="relative second-section h-screen flex items-center bg-white z-10"
    >
      <div class="w-1/3 ml-[5%] mr-auto opacity-0 next-text">
        <div class="flex items-center gap-2 mt-5 mb-4 text-[12px]">
          <button
            class="cursor-pointer rounded-full flex items-center gap-1 border border-black py-[6px] px-[10px]"
          >
            <icon-gift size="19" color="#121212" />
            Share full article
          </button>
          <button
            class="cursor-pointer rounded-full flex items-center justify-center gap-1 border border-black w-[34px] h-[34px]"
          >
            <icon-share size="19" color="#121212" />
          </button>
          <button
            class="cursor-pointer rounded-full flex items-center justify-center gap-1 border border-black w-[34px] h-[34px]"
          >
            <icon-mark size="19" color="#121212" />
          </button>
          <button
            class="cursor-pointer rounded-full flex items-center gap-1 border border-black py-[6px] px-[10px]"
          >
            <icon-sms size="19" color="#121212" />
            159
          </button>
        </div>
        <div class="text-[23px] leading-[28.5px] text-[#3c3c3c] font-light">
          <p class="mb-[25px]">
            <span class="uppercase">Hours after my</span> mother took her last
            breath on earth, after I heard a scream that must have come from my
            mouth, after I wiped the snot from my face and chanted Buddhist
            sutras as each of her three sisters took turns kissing the crown of
            her head, her skin cooling by the minute, and we opened the windows
            to let the spirits out, after I covered her face with a Pikachu
            blanket and held her claylike hand in my own, after we sat around
            lighting one incense stick after another — for the chain of smoke
            must be unbroken until they take her away — my brother and I went
            down to the basement and watched mixed martial arts fighters beat
            each other into bloody masks.
          </p>
          <p>
            When my brother abruptly got up and left our mother’s deathbed and I
            followed him to the makeshift room in the basement to make sure he
            was OK, the fights were already on. We found ourselves, in our
            shock, sitting between the boiler and the crumbling brick wall, our
            faces lit blue by TV light, watching the Vaseline-coated fighters
            punch and kick each other under stadium LEDs. This spectacle of
            combat, which has coursed through our civilizations at least since
            the days of the Roman Colosseum, felt both quintessentially and
            absurdly American now as we sat, motherless in the still of an
            autumn night in New England, our bodies inches apart but not
            touching.
          </p>
        </div>
      </div>
      <div class="absolute right-0 mr-[5%] next-img opacity-0">
        <img
          src="/images/news/ocean-vuong/second-section.png"
          class="w-[900px]"
        />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".top-section",
      start: "top top",
      end: "bottom+=100% top",
      scrub: true,
      pin: true,
      //   markers: true,
    },
  });

  tl.to(".top-first-text", { autoAlpha: 0, duration: 1 })
    .to(".top-second-text", { autoAlpha: 1, duration: 1 })
    .to(".top-section", { autoAlpha: 0, duration: 1 })
    .to(".second-section", { autoAlpha: 1, duration: 1 }, "-=0.5") // section chiqadi
    .to(".next-img", { autoAlpha: 1, duration: 1 }, "-=0.5");

  gsap.fromTo(
    ".next-text",
    { y: 100, autoAlpha: 0 },
    {
      y: 0,
      autoAlpha: 1,
      duration: 1,
      scrollTrigger: {
        trigger: ".next-section",
        start: "top 70%",
        toggleActions: "play none none reverse",
        // markers: true,
      },
    }
  );
});
</script>
