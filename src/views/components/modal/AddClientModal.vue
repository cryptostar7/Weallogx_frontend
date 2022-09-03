<template>
  <div class="offcanvas offcanvas-end" tabindex="-1" id="addClientCanvas">
    <div class="offcanvTopDiv">
      <div class="d-flex align-items-center justify-content-between">
        <svg class="client-icon-offcanvas" width="50" height="50" viewBox="0 0 50 50" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <circle cx="25" cy="25" r="25" fill="#127B62" />
          <ellipse cx="25.1061" cy="18.1905" rx="6.31634" ry="6.19048" fill="#0E6651" />
          <ellipse cx="25.1061" cy="33.0474" rx="10.1061" ry="4.95238" fill="#0E6651" />
        </svg>

        <a data-bs-dismiss="offcanvas" aria-label="Close"><img src="@/assets/images/icons/offcanvas-close.svg" class="img-fluid"
            alt="Close Canvas"></a>
      </div>
      <h5 class="fs-38 bold-fw">Add Client</h5>
    </div>
    <div class="offcanvas-body">
      <Form @submit="onSubmit" :validation-schema="schema" v-slot="{ errors }">
        <div class="offcanvasBodyContent">
          <div class="offcanInputDiv">
            <label for="fname" class="form-label">First Name</label>
            <Field type="text" name="firstName" id="fname" class="form-control CanvasinputField" />
            <p class="inputError">{{errors.firstName}}</p>
          </div>
          <div class="offcanInputDiv">
            <label for="mname" class="form-label">Middle Name</label>
            <label for="mname" class="optionalLabel">Optional</label>
            <Field type="text" name="middleName" id="mname" class="form-control CanvasinputField" />
            <p class="inputError">{{errors.middleName}}</p>
          </div>
          <div class="offcanInputDiv">
            <label for="fname" class="form-label">Last Name</label>
            <Field type="text" name="lastName" id="fname" class="form-control CanvasinputField" />
            <p class="inputError">{{errors.lastName}}</p>
            <!-- <p class="inputError">Client already exists. <span>Add Middle Name</span>.</p> -->
          </div>
          <div class="offcanInputDiv">
            <label for="fname" class="form-label">Age <span class="ms-1">Match year 1 age on illustration</span></label>
            <Field type="text" name="age" id="fname" class="form-control CanvasinputField" />
            <p class="inputError">{{errors.age}}</p>
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
import { Form, Field } from 'vee-validate';
import * as Yup from 'yup';
export default {
     components: {
        Form,
        Field
    },
   data() {
        const schema = Yup.object().shape({
            firstName: Yup.string()
                .required('First Name is required.'),
            middleName: Yup.string(),
            lastName: Yup.string()
                .required('Last name is required.'),
            age: Yup.string()
                .required('Age is required.')
        });
        return { 
            schema 
        }
   },
    methods: {
        onSubmit(values) {
            console.log(values);
        }
    }
}
</script>
<style lang="">
  
</style>