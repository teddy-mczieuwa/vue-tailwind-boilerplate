import { provide, inject, ref, computed, h } from "vue";
export const AccordionList = {
  props: {
    tag: { type: String, default: "ul" },
  },
  setup(props, { slots }) {
    const currentItem = ref(null);
    provide("currentItem", currentItem);
    return () => h(props.tag, slots.default ? slots.default() : []);
  },
};

export const AccordionItem = {
  props: {
    activeItem: {
      type: [String, Number],
      required: true,
    },
  },
  emits: {},
  setup(props, { slots }) {
    const currentItem = inject("currentItem");
    const active = computed(() => currentItem.value === props.activeItem);
    const setCurrentItem = () =>
      (currentItem.value = active.value ? null : props.activeItem);
    return () =>
      slots.default
        ? slots.default({ setCurrentItem, active: active.value })
        : [];
  },
};
