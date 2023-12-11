<script setup lang="ts">
const onThrowErrorClick = (): void => {
    throw createError("疑似エラー")
}
</script>

<template>
    <p>エラーを自動発生</p>
</template>