<template>
    <div class="main">
        <div class="background">
            <div class="generate">
                <div class="title">
                    <img src="../../assets/logo.png" draggable="false" alt="logo">
                    <img src="../../assets/logo-text.png" draggable="false" alt="logo-text">
                </div>
                <h1>由<span class="special">全国各地</span>学生组成的技术团队的<span class="special">官方论坛</span></h1>
                <div class="buttons">
                    <s-button type="outlined" @click="$router.push('/about/joinus')">
                        <s-icon name="add" slot="start"></s-icon>
                        加入我们
                    </s-button>
                    <s-button type="filled-tonal" @click="$router.push('/community')">
                        <s-icon slot="start">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                                <path
                                    d="M40-120v-720h560v720H360v-160h-80v160H40Zm80-80h80v-160h240v160h80v-560H120v560Zm80-240h80v-80h-80v80Zm0-160h80v-80h-80v80Zm160 160h80v-80h-80v80Zm0-160h80v-80h-80v80Zm420 260-56-56 43-44H640v-80h127l-43-44 56-56 140 140-140 140ZM200-200v-160h240v160-160H200v160Z">
                                </path>
                            </svg>
                        </s-icon>
                        前往社区
                    </s-button>
                    <s-icon-button type="filled-tonal"
                        onclick="window.open('https://github.com/Micropue/codecrafter-web/')">
                        <s-icon>
                            <svg data-v-eb706c3e="" viewBox="0 0 1024 1024">
                                <path data-v-eb706c3e=""
                                    d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9 23.5 23.2 38.1 55.4 38.1 91v112.5c0.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z">
                                </path>
                            </svg>
                        </s-icon>
                    </s-icon-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router'
const $router = useRouter()
</script>
<style lang="scss" scoped>
.background {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;

    .buttons {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        s-button {
            margin: 0px 10px;
        }
    }
}

.special {
    background-image: linear-gradient(to right, rgb(197, 24, 232), rgb(0, 149, 255));
    font-weight: 300;
    background-clip: text;
    color: transparent;
}

div.main {
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;

    .generate {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 10px;
        box-sizing: border-box;

        h1 {
            text-align: center;
        }

        .title {
            display: flex;
            justify-content: center;
            align-items: center;

            [alt=logo] {
                width: 23vw;
                height: auto;
                max-width: 150px;
            }

            [alt=logo-text] {
                width: 20vw;
                min-width: 200px;
                height: auto;
                filter: invert(var(--inverted));
            }
        }
    }
}

.background {
    width: 100%;
    height: 100%;
    background-image:
        radial-gradient(closest-side, var(--s-color-primary), rgba(78, 185, 235, 0)),
        radial-gradient(closest-side, var(--s-color-primary-container), rgba(243, 11, 164, 0)),
        radial-gradient(closest-side, var(--s-color-error), rgba(254, 234, 131, 0)),
        radial-gradient(closest-side, var(--s-color-inverse-primary), rgba(170, 142, 245, 0)),
        radial-gradient(closest-side, var(--s-color-dark-primary-container), rgba(248, 192, 147, 0));
    background-size:
        130vmax 130vmax,
        80vmax 80vmax,
        90vmax 90vmax,
        110vmax 110vmax,
        90vmax 90vmax;
    background-position:
        -80vmax -80vmax,
        60vmax -30vmax,
        10vmax 10vmax,
        -30vmax -10vmax,
        50vmax 50vmax;
    background-repeat: no-repeat;
    animation: 10s movement linear infinite;
    background-attachment: fixed;

    @keyframes movement {

        0%,
        100% {
            background-size:
                130vmax 130vmax,
                80vmax 80vmax,
                90vmax 90vmax,
                110vmax 110vmax,
                90vmax 90vmax;
            background-position:
                -80vmax -80vmax,
                60vmax -30vmax,
                10vmax 10vmax,
                -30vmax -10vmax,
                50vmax 50vmax;
        }

        25% {
            background-size:
                100vmax 100vmax,
                90vmax 90vmax,
                100vmax 100vmax,
                90vmax 90vmax,
                60vmax 60vmax;
            background-position:
                -60vmax -90vmax,
                50vmax -40vmax,
                0vmax -20vmax,
                -40vmax -20vmax,
                40vmax 60vmax;
        }

        50% {
            background-size:
                80vmax 80vmax,
                110vmax 110vmax,
                80vmax 80vmax,
                60vmax 60vmax,
                80vmax 80vmax;
            background-position:
                -50vmax -70vmax,
                40vmax -30vmax,
                10vmax 0vmax,
                20vmax 10vmax,
                30vmax 70vmax;
        }

        75% {
            background-size:
                90vmax 90vmax,
                90vmax 90vmax,
                100vmax 100vmax,
                90vmax 90vmax,
                70vmax 70vmax;
            background-position:
                -50vmax -40vmax,
                50vmax -30vmax,
                20vmax 0vmax,
                -10vmax 10vmax,
                40vmax 60vmax;
        }
    }
}
</style>