<script setup lang="ts">
const onThrowErrorClick = (): void => {
    throw createError("疑似エラー")
}
</script>

<template>
    <section>
        エラー<button v-on:click="onThrowErrorClick">発生</button>
    </section>
</template>