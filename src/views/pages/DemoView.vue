<template lang="">
  <div>
         <div class="editProfileDpMainDiv" >
            <form class="editProfileDp" >
              <div class="profile-imgDiv" >
                <img :src="profileImg ? profileImg : 'src/assets/images/user/profile-pic.png'" alt="Profile Image" class="preview-pro-image" >
              </div>
              <label for="pro-image-upload" class="editProfileIcon" >
                <input type="file" class="pro-image-upload-cls" id="pro-image-upload"  @change="addImage" hidden>
                <img src="@/assets/images/user/edit-pen-icon.svg" alt="Edit Pen" >
              </label>
            </form>
          </div>
  </div>
</template>
<script>
import { getFirstError } from "../../services/helper";
import { getServerErrors } from "../../services/helper";
import { authHeader } from "../../services/helper";
import { getUrl } from "../../network/url";
import { patch } from "../../network/requests";
export default {
  data() {
    return {
      profileImg: null,
      user: {
        id: 11,
        avatar: null,
      },
    };
  },
  methods: {
    addImage: function(e) {
      var image = new FormData();
      if (e) {
        this.user.avatar = e.target.files[0];
        console.log(this.user.avatar);
        image.append("avatar", e.target.files[0]);
        image.append("test", "kgjdsgdfl");
        this.profileImg = URL.createObjectURL(e.target.files[0]);
        console.log(`${getUrl("profile")}/${this.user.id}/`);
        patch(`${getUrl("profile")}/${this.user.id}/`, image, authHeader())
          .then(response => {
            console.log(response);
            this.$toast.success(response.data.message);
            // this.$router.push("/profile-details");
          })
          .catch(error => {
            console.log(error);
            this.errors = getServerErrors(error);
            console.log(getFirstError(error));
            this.$toast.error(getFirstError(error));
          });
      }
    },
  },
};
</script>
<style lang="">
</style>