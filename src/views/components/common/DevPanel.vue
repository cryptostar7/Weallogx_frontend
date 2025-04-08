<template>
    <div class="env-wrapper" @click="toggleEnvData">
        <div class="env-panel" :class="{ 'env-panel-visible': persistPanel }" @click="toggleEnvData">
            <p>APP_ENV: {{ deployAppEnv }}</p>
            <p>BUILD_ENV: {{ deployBuildEnv }}</p>
            <p>Branch: {{ deployBranch }}</p>
            <p>Commit: {{ deployCommit }}</p>
            <p>Built: {{ deployTimestamp }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            panelHover: false,
            persistPanel: false,
            deployAppEnv: import.meta.env.VITE_DEPLOY_APP_ENV || 'UNSET',
            deployBuildEnv: import.meta.env.VITE_DEPLOY_BUILD_ENV || 'UNSET',
            deployBranch: import.meta.env.VITE_DEPLOY_BRANCH || 'UNSET',
            deployCommit: import.meta.env.VITE_DEPLOY_COMMIT || 'UNSET',
            deployTimestamp: import.meta.env.VITE_DEPLOY_TIME || 'UNSET',
        };
    },
    methods: {
        toggleEnvData(event) {
            this.persistPanel = !this.persistPanel;
            event?.stopPropagation();
        },
        handleKeydown(event) {
            // Toggle the panel when the user presses "?" (Shift + /)
            if (event.key === '?' && event.target.tagName !== 'INPUT' && event.target.tagName !== 'TEXTAREA') {
                this.toggleEnvData();
            }
        }
    },
    mounted() {
        window.addEventListener('keydown', this.handleKeydown);
    },
    beforeDestroy() {
        window.removeEventListener('keydown', this.handleKeydown);
    }
};
</script>

<style>
.env-wrapper {
    position: fixed;
    bottom: 0;
    right: 0;
    width: 20px;
    height: 20px;
    white-space: nowrap;
    cursor: pointer;
}

.env-panel {
    position: absolute;
    bottom: 5px;
    right: 5px;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 10px;
    border-radius: 5px;
    z-index: 1000;
    opacity: 0;
    pointer-events: none; /* Initially not interactive */
    transition: opacity 0.3s ease, color 0.3s ease;
}

.env-wrapper:hover .env-panel, .env-panel-visible {
  opacity: 1;  /* Makes the panel visible on hover */
  pointer-events: auto; /* Enables clicks */
}
</style>
