<template>
    <div class="py-12 mb-20">
        <div class="relative container mx-auto px-5">
            <div class="ellipse ellipse-blue"></div>
            <div class="flex items-center relative container mx-auto ">
                <div class="w-[55%]">
                    <h1 class="text-[4.25rem] font-medium mb-2">Centras iHub</h1>
                    <p class="text-lg max-w-xl mb-10">Lorem ipsum dolor sit amet consectetur. Leo <br> commodo arcu elit aliquet habitasse id risus <br> commodo. Purus egestas at vulputate bibendum <br> ac lacus vulputate.  Purus egestas at vulputate <br> bibendum ac lacus vulputate. </p>
                    <button class="text-white hover:text-black border border-white hover:bg-white font-medium rounded-full text-base px-16 py-2.5 text-center mb-8 transition">Связаться с нами</button>
                </div>
                <div class="relative z-10">
                    <img class="w-[425px] h-full" src="../../assets/images/mainBanner.png" alt="mainBanner">
                    <div class="absolute right-[-90px] top-[95px] w-48 p-3 bg-white text-black block-shadow rounded-[2rem] cursor-pointer work">
                        <div class="flex items-center gap-8">
                            <div class="w-10 h-10 blue-circle rounded-full"></div>
                            <p class="font-bold mr-9">Дизайн</p>
                        </div>
                        <p class="text-lg font-medium leading-6 pl-2 mt-0 h-0 overflow-hidden transition-all">Lorem ipsum dolor sit amet nsectetur. Leo commodo arc .</p>
                    </div>
                    <div class="absolute left-[-110px] top-[270px] w-[210px] p-3 bg-white text-black block-shadow rounded-[2rem] cursor-pointer work">
                        <div class="flex items-center justify-between gap-8">
                            <p class="font-bold ml-6">Разработка</p>
                            <div class="w-10 h-10 purple-circle rounded-full"></div>
                        </div>
                        <p class="text-lg font-medium leading-6 pl-2 mt-0 h-0 overflow-hidden transition-all">Lorem ipsum dolor sit amet nsectetur. Leo commodo arc .</p>
                    </div>
                    <div class="absolute right-[-75px] top-[360px] w-[220px] p-3 bg-white text-black block-shadow rounded-[2rem] cursor-pointer work">
                        <div class="flex items-center gap-5">
                            <div class="w-10 h-10 cyan-circle rounded-full"></div>
                            <p class="font-bold">Сопровождение</p>
                        </div>
                        <p class="text-lg font-medium leading-6 mt-0 mr-4 ml-4 h-0 overflow-hidden transition-all">Lorem ipsum dolor sit amet nsectetur. Leo commodo arc .</p>
                    </div>
                </div>
            </div>
            <div class="ellipse ellipse-purple"></div>
        </div>
        <div class="mt-24 mb-56 relative">
            <h2 class="container mx-auto text-[56px] font-medium mb-14">Наши Stack технологии</h2>
            <p class="container mx-auto text-[2rem] mb-7 relative">Языки программирования</p>
            <div class="w-full overflow-hidden mb-16 relative">
                <swiper
                    :slidesPerView="6"
                    :spaceBetween="25"
                    :grabCursor="true"
                    :pagination="{
                        clickable: true,
                    }"
                    :modules="modules"
                    class="mySwiper px-20"
                >
                    <swiper-slide style="width: 140px">
                        <div class="flex items-center justify-center w-full h-32 border-2 border-solid border-white rounded-3xl">
                            <img class="w-12" src="../../assets/images/python.svg" alt="programming language">
                        </div>
                    </swiper-slide>
                    <swiper-slide style="width: 140px">
                        <div class="flex items-center justify-center w-full h-32 border-2 border-solid border-white rounded-3xl">
                            <img class="w-10" src="../../assets/images/java.svg" alt="programming language">
                        </div>
                    </swiper-slide>
                    <swiper-slide style="width: 140px">
                        <div class="flex items-center justify-center w-full h-32 border-2 border-solid border-white rounded-3xl">
                            <img class="w-20" src="../../assets/images/php.svg" alt="programming language">
                        </div>
                    </swiper-slide>
                    <swiper-slide style="width: 140px">
                        <div class="flex items-center justify-center w-full h-32 border-2 border-solid border-white rounded-3xl">
                            <img class="w-12" src="../../assets/images/html.svg" alt="programming language">
                        </div>
                    </swiper-slide>
                    <swiper-slide style="width: 140px">
                        <div class="flex items-center justify-center w-full h-32 border-2 border-solid border-white rounded-3xl">
                            <img class="w-12" src="../../assets/images/css.svg" alt="programming language">
                        </div>
                    </swiper-slide>
                    <swiper-slide style="width: 140px">
                        <div class="flex items-center justify-center w-full h-32 border-2 border-solid border-white rounded-3xl">
                            <img class="w-12" src="../../assets/images/js.svg" alt="programming language">
                        </div> 
                    </swiper-slide>
                    <swiper-slide style="width: 140px">
                        <div class="flex items-center justify-center w-full h-32 border-2 border-solid border-white rounded-3xl">
                            <img class="w-12" src="../../assets/images/ts.svg" alt="programming language">
                        </div> 
                    </swiper-slide>
                    <swiper-slide style="width: 140px">
                        <div class="flex items-center justify-center w-full h-32 border-2 border-solid border-white rounded-3xl">
                            <img class="w-12" src="../../assets/images/kotlin.svg" alt="programming language">
                        </div>
                    </swiper-slide>
                    <swiper-slide style="width: 140px">
                        <div class="flex items-center justify-center w-full h-32 border-2 border-solid border-white rounded-3xl">
                            <img class="w-24" src="../../assets/images/go.svg" alt="programming language">
                        </div> 
                    </swiper-slide>
                    <div class="swiper-scrollbar" slot="scrollbar"></div>
                </swiper>
            </div>
            <div class="ellipse ellipse-cyan"></div>
            <div>
                <p class="container mx-auto text-[2rem] mb-7 relative">Фрэймворки</p>
                <div class="container mx-auto flex items-center gap-6 mb-16 relative">
                    <div class="flex items-center justify-center w-36 h-28 border-2 border-solid border-white rounded-3xl">
                        <img class="w-12" src="../../assets/images/vue.svg" alt="programming language">
                    </div> 
                    <div class="flex items-center justify-center w-36 h-28 border-2 border-solid border-white rounded-3xl">
                        <img class="w-12" src="../../assets/images/react.svg" alt="programming language">
                    </div>
                    <div class="flex items-center justify-center w-36 h-28 border-2 border-solid border-white rounded-3xl">
                        <img class="w-12" src="../../assets/images/laravel.svg" alt="programming language">
                    </div>
                    <div class="flex items-center justify-center w-36 h-28 border-2 border-solid border-white rounded-3xl">
                        <img class="w-12" src="../../assets/images/spring.svg" alt="programming language">
                    </div>
                    <div class="flex items-center justify-center w-36 h-28 border-2 border-solid border-white rounded-3xl">
                        <img class="w-12" src="../../assets/images/graylog.svg" alt="programming language">
                    </div>
                </div>
            </div>
            <p class="container mx-auto text-[2rem] mb-7 relative">Базы данных и ПО</p>
            <div class="w-full overflow-hidden mb-16 relative">
                <swiper
                    :slidesPerView="6"
                    :spaceBetween="25"
                    :grabCursor="true"
                    :pagination="{
                        clickable: true,
                    }"
                    :modules="modules"
                    class="mySwiper px-20"
                >
                    <swiper-slide style="width: 140px">
                        <div class="flex items-center justify-center w-full h-32 border-2 border-solid border-white rounded-3xl">
                            <img class="w-24" src="../../assets/images/elastic.svg" alt="programming language">
                        </div>
                    </swiper-slide>
                    <swiper-slide style="width: 140px">
                        <div class="flex items-center justify-center w-full h-32 border-2 border-solid border-white rounded-3xl">
                            <img class="w-14" src="../../assets/images/postgresql.svg" alt="programming language">
                        </div>
                    </swiper-slide>
                    <swiper-slide style="width: 140px">
                        <div class="flex items-center justify-center w-full h-32 border-2 border-solid border-white rounded-3xl">
                            <img class="w-16" src="../../assets/images/docker.svg" alt="programming language">
                        </div>
                    </swiper-slide>
                    <swiper-slide style="width: 140px">
                        <div class="flex items-center justify-center w-full h-32 border-2 border-solid border-white rounded-3xl">
                            <img class="w-28" src="../../assets/images/oracle.svg" alt="programming language">
                        </div>
                    </swiper-slide>
                    <swiper-slide style="width: 140px">
                        <div class="flex items-center justify-center w-full h-32 border-2 border-solid border-white rounded-3xl">
                            <img class="relative -top-[14px] w-[6.5rem]" src="../../assets/images/mysql.svg" alt="programming language">
                        </div>
                    </swiper-slide>
                    <swiper-slide style="width: 140px">
                        <div class="flex items-center justify-center w-full h-32 border-2 border-solid border-white rounded-3xl">
                            <img class="w-12" src="../../assets/images/spiral.svg" alt="programming language">
                        </div> 
                    </swiper-slide>
                    <swiper-slide style="width: 140px">
                        <div class="flex items-center justify-center w-full h-32 border-2 border-solid border-white rounded-3xl">
                            <img class="w-6" src="../../assets/images/mongodb.svg" alt="programming language">
                        </div> 
                    </swiper-slide>
                    <swiper-slide style="width: 140px">
                        <div class="flex items-center justify-center w-full h-32 border-2 border-solid border-white rounded-3xl">
                            <img class="w-14" src="../../assets/images/cow.svg" alt="programming language">
                        </div>
                    </swiper-slide>
                    <div class="swiper-scrollbar" slot="scrollbar"></div>
                </swiper>
            </div>
        </div>
        <div class="w-full max-w-[1540px] mx-auto relative mb-16">
            <img class="w-[280px] absolute left-0 top-[-7rem]" src="../../assets/images/cyan_3d.png" alt="3d">
            <img class="w-72 absolute z-10 left-[39rem] top-[-10rem]" src="../../assets/images/cyan_blur.svg" alt="3d">
            <img class="w-60 absolute z-10 left-[21rem] bottom-[-10rem]" src="../../assets/images/purple_blur.svg" alt="3d">
            <div class="flex items-center justify-between h-[260px] pr-32 pl-44 relative z-10">
                <div class="info-block">
                    <h3 class="text-7xl font-bold text-center mb-2">235</h3>
                    <h6 class="text-3xl font-medium text-center mb-7">Сотрудники</h6>
                    <p class="text-[18px] leading-5 max-w-[250px] text-center">Lorem ipsum dolor sit amet consectetur. Leo commodo arcu elit aliquet habitasse id risus commodo.</p>
                </div>
                <div class="info-block">
                    <h3 class="text-7xl font-bold text-center mb-2">31</h3>
                    <h6 class="text-3xl font-medium text-center mb-7">Команды</h6>
                    <p class="text-[18px] leading-5 max-w-[250px] text-center">Lorem ipsum dolor sit amet consectetur. Leo commodo arcu elit aliquet habitasse id risus commodo.</p>
                </div>
                <div class="info-block">
                    <h3 class="text-7xl font-bold text-center mb-2">7</h3>
                    <h6 class="text-3xl font-medium text-center mb-7">Проекты</h6>
                    <p class="text-[18px] leading-5 max-w-[250px] text-center">Lorem ipsum dolor sit amet consectetur. Leo commodo arcu elit aliquet habitasse id risus commodo.</p>
                </div>
            </div>
            <div class="ellipse ellipse-darkblue"></div>
            <img class="w-[280px] absolute right-0 top-[0rem]" src="../../assets/images/purple_3d.png" alt="3d">
        </div>
    </div>
</template>

<script>
import "swiper/swiper-bundle.css";

import { Swiper, SwiperSlide } from "swiper-vue2";
import { Pagination } from 'swiper';
export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Pagination],
      };
    },
    created() {
    }
  };
</script>

<style lang="scss" scoped>
.block-shadow {
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.25);
}

.blue-circle {
    background: linear-gradient(90deg, #002AFF -0.37%, #061F9B 97.76%, #061F98 100.38%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 15px rgba(0, 0, 0, 0.25);
}

.purple-circle {
    background: linear-gradient(90deg, #C701FC -0.37%, #6C0089 100.38%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 15px rgba(0, 0, 0, 0.25);
    transform: matrix(1, 0, 0, -1, 0, 0);
}

.cyan-circle {
    background: linear-gradient(33.25deg, #00C8E2 -86.6%, #00AFC6 274.91%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 15px rgba(0, 0, 0, 0.25);
}

.ellipse{
    position: absolute;

    &-blue {
        width: 325px;
        height: 325px;
        
        background: #169DFF;
        opacity: 0.5;
        filter: blur(159.5px);
        top: -4rem;
        left: -6rem;
    }

    &-purple {
        width: 450px;
        height: 350px;
        
        background: #C701FC;
        opacity: 0.3;
        filter: blur(159.5px);
        bottom: 0rem;
        left: 23rem;
    }
        
    &-cyan {
        width: 450px;
        height: 375px;
        
        background: #00C8E2;
        opacity: 0.25;
        filter: blur(159.5px);
        bottom: 11rem;
        left: 10rem;
    }

    &-darkblue {
        width: 550px;
        height: 375px;
        
        background: #1130CC;
        opacity: 0.3;
        filter: blur(159.5px);
        bottom: -2rem;
        left: 30rem;
    }
}

.info-block{
    width: 16rem;
    transition: padding-left 0.35s;
    cursor: pointer;

    h3, h6 {
        transition: font-size 0.35s, color 0.35s;
    }

    &:hover {
        padding-left: 1.5rem;

        h3, h6 {
            color: #5282E7;
        }

        h3 {
            font-size: 6rem;
        }

        h6 {
            font-size: 2.35rem;
        }
    }
}

.work {
    &:hover {
        p.text-lg {
            margin-top: 0.75rem;
            height: 5rem;
        }
    }
}
</style>