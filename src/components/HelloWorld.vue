<script setup lang="ts">
import { ref } from "vue";
import { i18n } from "@lingui/core";

defineProps<{ msg: string }>();

const locale = ref(localStorage.getItem("locale"));

function switchLanguage() {
  locale.value = locale.value === "zh-cn" ? "en" : "zh-cn";
  localStorage.setItem("locale", locale.value);
  window.location.reload();
}

const locales = {
  "zh-cn": "中文",
  en: "English",
};
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="switchLanguage">
      {{ locales[locale] }}
    </button>
    <p>
      {{ i18n.t("编辑") }}
      <code>components/HelloWorld.vue</code> {{ i18n.t("来测试 HMR") }}
    </p>
  </div>
  <p>
    {{ i18n.t("在 IDE 中安装 Volar 以获得更好的 DX") }}
  </p>
  <p class="read-the-docs">
    {{ i18n.t("点击 Vite 和 Vue 徽标以了解更多信息") }}
  </p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
