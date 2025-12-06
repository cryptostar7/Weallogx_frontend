<template lang="">
    <div class="main-form-heading">
        <div class="heading-container d-flex align-items-center">
            <h2 class="fs-34 bold-fw main-tab-heading me-2"  id="stopLoaderBtn" @click="$store.dispatch('loader', false)">
                New Scenario
            </h2>
            <a
              v-if="showWalkthroughButton"
              href="javascript:void(0)"
              @click="showVideoModal = true"
              class="walkthrough-button"
            >
              Walkthrough
            </a>
        </div>
    </div>

    <!-- Video Walkthrough Modal -->
    <div
      v-if="showVideoModal"
      class="modal fade show d-block"
      tabindex="-1"
      style="background-color: rgba(0, 0, 0, 0.8); z-index: 9999;"
      @click.self="showVideoModal = false"
    >
      <div class="modal-dialog modal-xl modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ modalTitle }}</h5>
            <button
              type="button"
              class="btn-close"
              @click="showVideoModal = false"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body p-0">
            <div style="position: relative; padding-bottom: 56.25%; height: 0;">
              <iframe
                :src="videoUrl"
                frameborder="0"
                webkitallowfullscreen
                mozallowfullscreen
                allowfullscreen
                style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            showVideoModal: false,
            walkthroughVideos: {
                'scenario-details': {
                    url: 'https://www.loom.com/embed/ea5af5675be94cc09bd44bd4daab00f6',
                    title: 'New Scenario - Step 1'
                },
                'illustration-data': {
                    url: 'https://www.loom.com/embed/c325b5ea02bc42a78da0986421fd8e3a',
                    title: 'New Scenario - Step 2'
                },
                'comparative-vehicles': {
                    url: 'https://www.loom.com/embed/a9a74aba958d4e2cb578c212eca738ff',
                    title: 'New Scenario - Step 3'
                },
                'historical-index-strategy-allocation': {
                    url: 'https://www.loom.com/embed/57ae225effc94127b5e31e0f94e467a2',
                    title: 'New Scenario - Step 4'
                }
            }
        };
    },
    computed: {
        currentStep() {
            const path = this.$route.path;
            if (path.includes('scenario-details')) return 'scenario-details';
            if (path.includes('illustration-data') && !path.includes('historical')) return 'illustration-data';
            if (path.includes('comparative-vehicles')) return 'comparative-vehicles';
            if (path.includes('historical-index-strategy-allocation')) return 'historical-index-strategy-allocation';
            return null;
        },
        showWalkthroughButton() {
            return this.currentStep && this.walkthroughVideos[this.currentStep];
        },
        videoUrl() {
            return this.walkthroughVideos[this.currentStep]?.url || '';
        },
        modalTitle() {
            return this.walkthroughVideos[this.currentStep]?.title || 'Walkthrough';
        }
    },
    mounted(){
        document.querySelector('body').classList.add('scrolledTop');
        document.querySelector('body').scrollIntoView();
        document.querySelector('body').classList.remove('scrolledTop');
    }
}
</script>
<style scoped>
    .heading-container {
        max-width: 600px;
        justify-content: center;
    }

    .main-tab-heading {
        white-space: nowrap;
    }

    .walkthrough-button {
        display: inline-grid;
        place-items: center;
        padding: 0 25px;
        height: 45px;
        background: #e67e22;
        color: #fff;
        border-radius: 50px;
        font-size: 14px;
        font-weight: 600;
        text-decoration: none;
        cursor: pointer;
        transition: all 0.3s ease;
        margin-left: 15px;
        white-space: nowrap;
    }

    .walkthrough-button:hover {
        background: #d35400;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        color: #fff;
    }
</style>
<style>
    body.scrolledTop {
        padding-top:50px;
    }
</style>