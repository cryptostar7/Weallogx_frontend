<template>
     <div class="offcanvas offcanvas-end" tabindex="-1" id="editClientCanvas">
    <div class="offcanvTopDiv">
      <div class="d-flex align-items-center justify-content-between">
        <svg class="dark-user-logo-icon" width="50" height="50" viewBox="0 0 50 50" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <circle cx="25" cy="25" r="25" fill="#127B62" />
          <ellipse cx="25.1061" cy="18.1905" rx="6.31634" ry="6.19048" fill="#0E6651" />
          <ellipse cx="25.1061" cy="33.0474" rx="10.1061" ry="4.95238" fill="#0E6651" />
        </svg>

        <a data-bs-dismiss="offcanvas" ref="closeModalRef" aria-label="Close"><img src="@/assets/images/icons/offcanvas-close.svg" class="img-fluid"
            alt="Close Canvas"></a>
      </div>
      <h5 class="fs-38 bold-fw" ref="openModalRef"  data-bs-toggle="offcanvas" data-bs-target="#editClientCanvas" aria-controls="editClientCanvas">Edit Client</h5>
    </div>
    <div class="offcanvas-body">
      <Form @submit="onSubmit" :validation-schema="schema" v-slot="{ errors }">
        <div class="offcanvasBodyContent">
          <div class="offcanInputDiv">
            <label for="fname" class="form-label">First Name</label>
            <Field type="text" name="firstname" id="fname" v-model="inputs.firstname" class="form-control CanvasinputField" />
            <p class="inputError">{{errors.firstname}}</p>
            <p class="inputError" v-if="serverErrors.firstname">{{serverErrors.firstname[0]}}</p>
          </div>
          <div class="offcanInputDiv">
            <label for="mname" class="form-label">Middle Name</label>
            <label for="mname" class="optionalLabel">Optional</label>
            <Field type="text" name="middlename" id="mname" v-model="inputs.middlename" class="form-control CanvasinputField" />
            <p class="inputError">{{errors.middlename}}</p>
            <p class="inputError" v-if="serverErrors.middlename">{{serverErrors.middlename[0]}}</p>
          </div>
          <div class="offcanInputDiv">
            <label for="fname" class="form-label">Last Name</label>
            <Field type="text" name="lastname" id="fname" v-model="inputs.lastname" class="form-control CanvasinputField" />
            <p class="inputError">{{errors.lastname}}</p>
            <p class="inputError" v-if="serverErrors.lastname">{{serverErrors.lastname[0]}}</p>
            <!-- <p class="inputError">Client already exists. <span>Add Middle Name</span>.</p> -->
          </div>
          <div class="offcanInputDiv">
            <label for="fname" class="form-label">Age <span class="ms-1">Match year 1 age on illustration</span></label>
            <Field type="number" name="age" id="fname" v-model="inputs.age" class="form-control CanvasinputField" />
            <p class="inputError">{{errors.age}}</p>
            <p class="inputError" v-if="serverErrors.age">{{serverErrors.age[0]}}</p>
          </div>
          <div class="offcanBtnDiv">
            <input type="submit" class="btn form-control SaveAddBtn" value="Save & Add New Scenario">
            <input type="submit" class="btn form-control mt-3 SaveclsBtn" value="Save & Close">
          </div>
        </div>
      </Form>
    </div>
  </div>
</template>
<script>
import { Form, Field } from "vee-validate";
import * as Yup from "yup";
import { post, patch } from "../../../network/requests";
import { getUrl } from "../../../network/url";
import { authHeader, getFirstError, getServerErrors } from "../../../services/helper";

export default {
  components: {
    Form,
    Field,
  },
  props: ["client"],
  data() {
    const schema = Yup.object().shape({
      firstname: Yup.string().required("First Name is required."),
      middlename: Yup.string(),
      lastname: Yup.string().required("Last name is required."),
      age: Yup.string().required("Age is required."),
    });
    return {
      schema,
      client:[],
      inputs:[],
      serverErrors: [],
    };
  },
  methods: {
    onSubmit(data) {
      console.log(data);
      this.serverErrors = [];
      this.$store.dispatch("loader", true);
      patch(`${getUrl("client")}${this.client.id}/`, data, authHeader())
        .then(response => {
          console.log(response);
          this.$store.dispatch("loader", false);
          this.client.firstname = data.firstname;
          this.client.middlename = data.middlename;
          this.client.lastname = data.lastname;
          this.client.age = data.age;
          this.$refs.closeModalRef.click();
          this.$toast.success(response.data.message);
        })
        .catch(error => {
          this.$store.dispatch("loader", false);
          console.log(error);
          this.$refs.openModalRef.click();
          this.serverErrors = getServerErrors(error);
          this.$toast.error(getFirstError(error));
        });
    },
  },
  mounted() {
    console.log("client prop data");
    this.client = this.$props.client;
    this.inputs.firstname = this.$props.client.firstname;
    this.inputs.lastname = this.$props.client.lastname;
    this.inputs.middlename = this.$props.client.middlename;
    this.inputs.age = this.$props.client.age;
    console.log(this.client);
  },
};
</script>
<style lang="">
</style>