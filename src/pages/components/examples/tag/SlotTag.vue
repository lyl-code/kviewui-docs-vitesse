<template>
  <kui-cell-group title="自定义插槽">
    <kui-space :gap="[30, 20]">
      <kui-tag>
        <template #left-icon>
          <kui-icons type="star" />
        </template>
        左侧插槽
      </kui-tag>
      <kui-tag>
        右侧插槽
        <template #right-icon>
          <kui-icons type="heart" />
        </template>
      </kui-tag>
      <kui-tag>
        <template #left-icon>
          <kui-icons type="star" />
        </template>
        左右两侧插槽
        <template #right-icon>
          <kui-icons type="heart" />
        </template>
      </kui-tag>
    </kui-space>
  </kui-cell-group>
</template>
