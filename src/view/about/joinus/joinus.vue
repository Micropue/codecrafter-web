<template>
    <div>
        <h1>加入QQ群来联系我们</h1>
        <img src="../../../assets/joinus-qrcode.jpg" alt="qrcode">
        <s-button onclick="window.open('https://qm.qq.com/q/1DGXoIf7hW')">直接跳转</s-button>
    </div>
</template>
<style lang="scss" scoped>
div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;

    h1 {
        background-clip: text;
        color:transparent;
        background-image:
            radial-gradient(closest-side, var(--s-color-primary), rgba(235, 105, 78, 0)),
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

    img {
        height: 60%;
    }

    s-button {
        margin-top: 20px;
    }
}
</style>