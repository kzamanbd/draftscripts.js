<template>
    <div class="flex justify-center h-screen items-center">
        <button
            type="button"
            @click="handleClick('confirm')"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Confirm
        </button>
        <button
            type="button"
            @click="handleClick('success')"
            class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
            Success
        </button>
        <button
            type="button"
            @click="handleClick('error')"
            class="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
            Error
        </button>
        <button
            type="button"
            @click="handleClick('warning')"
            class="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900">
            Yellow
        </button>
    </div>
</template>

<script setup lang="ts">
    import { inject } from 'vue';
    const openDialog: any = inject('openDialog');

    const handleClick = async (type: string) => {
        await openDialog('Hello World!', {
            type: type
        });
    };
</script>
