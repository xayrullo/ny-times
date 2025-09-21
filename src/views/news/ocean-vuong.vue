<template>
  <div class="absolute sections top-0">
    <section class="top-section h-full text-white absolute inset-0">
      <div class="relative">
        <div class="h-full min-h-[100vh] overflow-hidden">
          <img
            src="/images/news/ocean-vuong/top.png"
            alt="ocean-vuong"
            class="w-full"
          />
        </div>
        <div class="text-wrapper absolute -top-[60px] left-[5%] h-[100vh]">
          <div
            class="top-first-text absolute inset-0 flex items-end justify-start w-[650px] text-4xl font-[100] tracking-[.1px] leading-[1.21em]"
            style="-webkit-font-smoothing: antialiased"
          >
            <div>
              <p>Three weeks after my mother died,</p>
              <p class="indent-[2.5em]">my brother moved in with me.</p>
              <p class="indent-[1em]">In our grief I emerged, oddly enough,</p>
              <p class="indent-[2.5em]">as a kind of father</p>
            </div>
          </div>
          <div
            class="top-second-text absolute opacity-0 inset-0 flex items-end justify-start w-[650px]"
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
      </div>
    </section>

    <section
      class="relative inset-0 second-section h-screen opacity-0 flex items-center bg-white z-10"
    >
      <div class="relative flex items-center">
        <div class="second-section-text w-1/3 ml-[5%] mr-auto opacity-0">
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
              breath on earth, after I heard a scream that must have come from
              my mouth, after I wiped the snot from my face and chanted Buddhist
              sutras as each of her three sisters took turns kissing the crown
              of her head, her skin cooling by the minute, and we opened the
              windows to let the spirits out, after I covered her face with a
              Pikachu blanket and held her claylike hand in my own, after we sat
              around lighting one incense stick after another — for the chain of
              smoke must be unbroken until they take her away — my brother and I
              went down to the basement and watched mixed martial arts fighters
              beat each other into bloody masks.
            </p>
            <p>
              When my brother abruptly got up and left our mother’s deathbed and
              I followed him to the makeshift room in the basement to make sure
              he was OK, the fights were already on. We found ourselves, in our
              shock, sitting between the boiler and the crumbling brick wall,
              our faces lit blue by TV light, watching the Vaseline-coated
              fighters punch and kick each other under stadium LEDs. This
              spectacle of combat, which has coursed through our civilizations
              at least since the days of the Roman Colosseum, felt both
              quintessentially and absurdly American now as we sat, motherless
              in the still of an autumn night in New England, our bodies inches
              apart but not touching.
            </p>
          </div>
        </div>
        <div
          class="second-section-image w-2/3 py-[5%] px-[5%] h-[80vh] flex items-center justify-center"
        >
          <img
            src="/images/news/ocean-vuong/second-section.png"
            class="max-h-full max-w-full object-contain"
          />
        </div>
      </div>
    </section>
    <section
      class="relative third-section h-screen flex items-center bg-white z-10"
    >
      <div class="w-1/3 mr-[5%] ml-auto opacity-0 third-text">
        <div class="text-[23px] leading-[28.5px] text-[#3c3c3c] font-light">
          <p class="mb-[25px]">
            Our mother’s body, according to our Buddhist custom, was to stay in
            place until dawn, undisturbed. My relatives took turns holding vigil
            beside the body upstairs. Then it was my turn, and then my
            brother’s, and we went back upstairs and circled my mother’s bed as
            the fighters circled each other before the empty couch in the
            basement.
          </p>
          <p>
            After living with my mother for more than two decades — his whole
            life — my brother would soon move in with me.
          </p>
        </div>
      </div>
      <div class="absolute left-0 ml-[5%] third-img opacity-0">
        <img
          src="/images/news/ocean-vuong/third-section.png"
          class="w-[1100px]"
        />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted, provide } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useHeaderColor } from "@/composables/useHeaderColor";

gsap.registerPlugin(ScrollTrigger);

useHeaderColor().setColor("#FFFFFF");

onMounted(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".sections",
      start: "top top",
      end: "bottom+=100% top",
      scrub: true,
      pin: true,
      markers: true,
    },
  });

  tl.to(".top-first-text", { autoAlpha: 0, duration: 1 })
    .to(".top-second-text", { autoAlpha: 1, duration: 1 })
    .to(".top-section", {
      opacity: 0,
      duration: 1,
      onUpdate: function () {
        const progress = this.progress();

        const secondOpacity =
          progress < 0.5 ? 0 : gsap.utils.mapRange(0.5, 1, 0, 1, progress);

        gsap.set(".second-section", { opacity: secondOpacity });
      },
    })
    .fromTo(
      ".second-section-text",
      { y: "100vh", opacity: 0 }, // boshlang'ich: ekranning eng pasti
      {
        y: "-110%",
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        onUpdate: function () {
          const progress = this.progress();
          console.log("Progress", this);
        },
      },
      ">-0.1"
    );
});
</script>
