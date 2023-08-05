<template>
    <div>
        <client-only>
            <input 
                :placeholder="placeholder"
                :maxlength="max"
                class="w-full bg-white text-gray-800 border text-sm
                border-[#EFF0ED] rounded-lg p-3 placeholder-gray-500 focus:outline-none"
                @focus="isFocused = true"
                @blur="isFocused = true"
                :class="
                    [
                        isFocused ? 'border-gray-900': '',
                        error ? 'border-gray-900': ''
                    ]
                "
                :type="inputType"
                v-model="inputComputed"
                autocomplete="off"
            >
        </client-only>
    </div>
</template>

<script setup>
const emit = defineEmits(['update:input'])

const props = defineProps([
    'placeholder','input','inputType','error','max'
])
const {placeholder, input, inputType, error, max} = toRefs(props)

let isFocused = ref(false);

const inputComputed = computed({
    get: () => input.value,
    set: (val) => emit('update:input', val)
})

</script>

