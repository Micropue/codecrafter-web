<template>
    <div>
        <Router-view></Router-view>
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
}

.opacity-enter-active,
.opacity-leave-active {
    filter: blur(0px);
    opacity: 1;
    transition: all 0.3s;
}

.opacity-enter-from,
.opacity-leave-to {
    filter: blur(10px);
    opacity: 0;
}
</style>