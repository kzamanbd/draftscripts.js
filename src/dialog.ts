import errorAnimation from '@/assets/anim/error.json';
import infoAnimation from '@/assets/anim/info.json';
import successAnimation from '@/assets/anim/success.json';
import warningAnimation from '@/assets/anim/warning.json';

import LottieAnimation from '@/components/LottieAnimation.vue';
import { createApp, defineComponent, h, ref, Transition } from 'vue';
import type { App } from 'vue';

/**
 * BDialog component
 * @example
 * this.$alert('Message', { type: 'success' });
 *? use promise to handle the response
 * this.$alert('Message', { type: 'confirm' }).then((action) => {
 *    if (action) {
 *       console.log('Confirmed');
 *   }
 * }).catch(() => {
 *   console.log('Rejected');
 * });
 * or composition API
 * import { inject } from 'vue';
 * const openDialog = inject('openDialog');
 * openDialog('Message', { type: 'success' });
 *? use promise to handle the response
 * openDialog('Message', { type: 'confirm' }).then((action) => {
 *    if (action) {
 *       console.log('Confirmed');
 *   }
 * }).catch(() => {
 *   console.log('Rejected');
 * });
 */

type DialogTypes = {
    type: 'success' | 'error' | 'warning' | 'confirm';
    title?: string;
    confirmBtnText?: string;
    showCancelBtn?: boolean;
    allowOutsideClick?: boolean;
    btnClass?: string;
    icon?: string;
    iconColor?: string;
    animationData?: any;
    message?: string;
    resolve?: (value: boolean) => void;
    reject?: (value: boolean) => void;
};

const JerpDialog = defineComponent({
    name: 'JerpDialog',
    setup() {
        const visible = ref(false);
        const dialog = ref<DialogTypes>({
            type: 'success',
            title: 'Success',
            confirmBtnText: 'OK',
            showCancelBtn: false,
            allowOutsideClick: true,
            iconColor: 'success',
            animationData: successAnimation
        });

        const closeHandler = () => {
            visible.value = false;
            if (dialog.value.type === 'confirm') {
                if (dialog.value.reject) {
                    dialog.value.reject(false);
                }
            } else {
                if (dialog.value.resolve) {
                    dialog.value.resolve(false);
                }
            }
        };

        const confirmHandler = () => {
            if (dialog.value.resolve) {
                dialog.value.resolve(true);
            }
            visible.value = false;
        };

        const modifiedOptions = (options: DialogTypes) => {
            // Define common properties with default values
            const commonProps = {
                title: 'Success',
                type: 'success',
                confirmBtnText: 'OK',
                showCancelBtn: false,
                allowOutsideClick: true,
                btnClass: '',
                icon: '',
                iconColor: 'success',
                animationData: successAnimation
            };

            // Create a map for specific properties based on type
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

            // Retrieve the specific properties based on the type
            const specificProps = typeSpecificProps[options.type] || {};

            // Merge common properties with specific properties, allowing overrides from options
            return {
                ...commonProps,
                ...specificProps,
                ...options
            };
        };

        const openDialog = (message: string, options: DialogTypes) => {
            visible.value = true;
            return new Promise((resolve, reject) => {
                dialog.value = { resolve, reject, message, ...modifiedOptions(options) };
            });
        };

        return {
            visible,
            dialog,
            openDialog,
            closeHandler,
            confirmHandler,
            modifiedOptions
        };
    },
    mounted() {
        this.$watch(
            () => this.visible,
            (value) => {
                if (value) {
                    const container = document.getElementById('dialog-app');
                    const overlayElement = document.createElement('div');
                    overlayElement.className = 'j-dialog-overlay';
                    container?.appendChild(overlayElement);
                } else {
                    const overlayElement = document.querySelector('.j-dialog-overlay');
                    if (overlayElement) {
                        overlayElement.remove();
                    }
                }
            }
        );
    },
    render() {
        return h(
            Transition,
            {
                name: 'scale',
                onBeforeEnter: (el) => {
                    el.classList.add('scale-enter-active');
                },
                onLeave: (el) => {
                    el.classList.add('scale-leave-active');
                }
            },
            () => {
                if (!this.visible) return null;

                return h('div', { class: 'j-dialog-box', onClick: this.closeHandler }, [
                    h(
                        'div',
                        {
                            class: `j-dialog-container j-dialog-${this.dialog.type}`,
                            onClick: (event) => event.stopPropagation() // Stop event propagation here
                        },
                        [
                            h('div', { class: 'j-dialog-content' }, [
                                h('div', { class: 'j-dialog-icon' }, [
                                    h(LottieAnimation, {
                                        animationData: this.dialog.animationData,
                                        loop: !(this.dialog.type == 'success')
                                    })
                                ]),
                                h('div', { class: 'j-dialog-title' }, this.dialog.title),
                                h('div', { class: 'j-dialog-message' }, this.dialog.message)
                            ]),
                            h('div', { class: 'j-dialog-btn-group' }, [
                                this.dialog.showCancelBtn &&
                                    h(
                                        'button',
                                        {
                                            class: 'j-dialog-btn j-dialog-btn-cancel',
                                            onClick: this.closeHandler
                                        },
                                        'CANCEL'
                                    ),
                                h(
                                    'button',
                                    {
                                        class: 'j-dialog-btn j-dialog-btn-confirm',
                                        onClick: this.confirmHandler
                                    },
                                    this.dialog.confirmBtnText
                                )
                            ])
                        ]
                    )
                ]);
            }
        );
    }
});

const DialogPlugin = {
    install(app: App) {
        const dialogInstance = createApp(JerpDialog);

        const element = document.createElement('div');
        element.id = 'dialog-app';
        document.body.appendChild(element);
        const container: any = dialogInstance.mount(element);
        app.provide('openDialog', container.openDialog);
        app.config.globalProperties.$openDialog = container.openDialog;
    }
};

export default DialogPlugin;
