<script setup lang="ts">
const onThrowErrorClick = (): void => {
    throw createError("疑似エラー")
}
</script>