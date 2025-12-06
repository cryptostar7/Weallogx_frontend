<template lang="">
    <div class="main-form-heading">
        <div class="heading-container d-flex align-items-center">
            <h2 class="fs-34 bold-fw main-tab-heading me-2"  id="stopLoaderBtn2" @click="$store.dispatch('loader', false)">
                Historical Simulations
            </h2>
            <a
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
                'simulation-details': {
                    url: 'https://www.loom.com/embed/0132884d21eb400e81d6986906bac6fb',
                    title: 'Historical Simulation Walkthrough - Step 1'
                },
                'illustration-data': {
                    url: 'https://www.loom.com/embed/0132884d21eb400e81d6986906bac6fb',
                    title: 'Historical Simulation Walkthrough - Step 2'
                },
                'parameters': {
                    url: 'https://www.loom.com/embed/960be0706ae749158cb270ec47bbfac0',
                    title: 'Historical Simulation Walkthrough - Step 3'
                }
            }
        };
    },
    computed: {
        currentStep() {
            const path = this.$route.path;
            if (path.includes('simulation-details')) return 'simulation-details';
            if (path.includes('illustration-data')) return 'illustration-data';
            if (path.includes('parameters')) return 'parameters';
            return 'illustration-data';
        },
        videoUrl() {
            return this.walkthroughVideos[this.currentStep]?.url || this.walkthroughVideos['illustration-data'].url;
        },
        modalTitle() {
            return this.walkthroughVideos[this.currentStep]?.title || 'Historical Simulation Walkthrough';
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