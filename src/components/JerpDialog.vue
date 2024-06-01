<template>
    <transition name="scale" @before-enter="addEnterActive" @leave="addLeaveActive">
        <div v-if="visible" :class="dialogBoxClass" @click="closeHandler">
            <div :class="dialogContainerClass" @click.stop>
                <div :class="dialogContentClass">
                    <div :class="dialogIconClass">
                        <LottieAnimation :animationData="dialog.animationData" :loop="dialog.type !== 'success'" />
                    </div>
                    <div :class="dialogTitleClass">{{ dialog.title }}</div>
                    <div :class="dialogMessageClass">{{ dialog.message }}</div>
                </div>
                <div :class="dialogBtnGroupClass">
                    <button v-if="dialog.showCancelBtn" :class="dialogCancelBtnClass" @click="closeHandler">
                        CANCEL
                    </button>
                    <button :class="dialogConfirmBtnClass" @click="confirmHandler">
                        {{ dialog.confirmBtnText }}
                    </button>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    import { defineComponent, ref } from 'vue';
    import LottieAnimation from '@/components/LottieAnimation.vue';
    import errorAnimation from '@/assets/anim/error.json';
    import infoAnimation from '@/assets/anim/info.json';
    import successAnimation from '@/assets/anim/success.json';
    import warningAnimation from '@/assets/anim/warning.json';

    export default defineComponent({
        name: 'JerpDialog',
        components: { LottieAnimation },
        props: {
            customClasses: {
                type: Object,
                default: () => ({})
            }
        },
        setup(props) {
            const visible = ref(false);
            const dialog = ref({
                type: 'success',
                title: 'Success',
                confirmBtnText: 'OK',
                showCancelBtn: false,
                allowOutsideClick: true,
                animationData: successAnimation
            });

            const closeHandler = () => {
                visible.value = false;
                if (dialog.value.type === 'confirm') {
                    dialog.value.reject?.(false);
                } else {
                    dialog.value.resolve?.(false);
                }
            };

            const confirmHandler = () => {
                dialog.value.resolve?.(true);
                visible.value = false;
            };

            const modifiedOptions = (options) => {
                const commonProps = {
                    title: 'Info',
                    type: 'info',
                    confirmBtnText: 'OK',
                    showCancelBtn: false,
                    allowOutsideClick: true,
                    iconColor: 'success',
                    animationData: infoAnimation
                };

                const typeSpecificProps = {
                    success: {
                        title: 'Success',
                        btnClass: 'text-success',
                        icon: 'check_circle',
                        animationData: successAnimation
                    },
                    error: {
                        title: 'An error occurred',
                        btnClass: 'text-danger',
                        icon: 'error',
                        animationData: errorAnimation
                    },
                    warning: {
                        title: 'Warning',
                        btnClass: 'text-warning',
                        icon: 'warning',
                        animationData: warningAnimation
                    },
                    confirm: {
                        title: 'Are You Sure?',
                        confirmBtnText: 'YES',
                        showCancelBtn: true,
                        btnClass: 'text-confirm',
                        icon: 'help',
                        iconColor: 'confirm',
                        animationData: infoAnimation
                    }
                };

                const specificProps = typeSpecificProps[options.type] || {};

                return {
                    ...commonProps,
                    ...specificProps,
                    ...options
                };
            };

            const openDialog = (message, options) => {
                visible.value = true;
                return new Promise((resolve, reject) => {
                    dialog.value = { ...modifiedOptions(options), message, resolve, reject };
                });
            };

            return {
                visible,
                dialog,
                openDialog,
                closeHandler,
                confirmHandler,
                modifiedOptions,
                ...props.customClasses
            };
        },
        mounted() {
            this.$watch(
                () => this.visible,
                (value) => {
                    const container = document.getElementById('dialog-app');
                    if (value) {
                        const overlayElement = document.createElement('div');
                        overlayElement.className = 'j-dialog-overlay';
                        container?.appendChild(overlayElement);
                    } else {
                        const overlayElement = document.querySelector('.j-dialog-overlay');
                        overlayElement?.remove();
                    }
                }
            );
        },
        methods: {
            addEnterActive(el) {
                el.classList.add('scale-enter-active');
            },
            addLeaveActive(el) {
                el.classList.add('scale-leave-active');
            }
        }
    });
</script>
