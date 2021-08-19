<template>
  <q-page>
    <div class="c_main">
      <div class="c_main__center">
        <div class="row q-mt-md">
          <div
            class="col-lg-9 col-md-9 col-sm-12 col-xs-12"
            style="margin-bottom: 5rem; border: 1px solid #c3c3c3c4;"
          >
            <q-stepper
              v-model="step"
              ref="stepper"
              active-color="deep-orange"
              flat
              done-color="secondary"
              animated
            >
              <q-step
                :name="1"
                title="Create an Invoice"
                icon="settings"
                :done="step > 1"
              >
                <app-invoice-form />
              </q-step>

              <q-step
                :name="2"
                title="Preview & Download Invoice"
                icon="create_new_folder"
                :done="step > 2"
              >
                <app-invoice-preview ref="invoicePreview" />
              </q-step>

              <template v-slot:navigation>
                <q-stepper-navigation>
                  <q-btn
                    @click="clearFormData()"
                    v-if="step === 1"
                    color="deep-orange"
                    label="Clear"
                    class="q-mr-sm"
                    flat
                  />

                  <q-btn
                    @click="$refs.stepper.next()"
                    v-if="step < 2"
                    color="deep-orange"
                    label="Continue"
                  />
                  <q-btn
                    v-if="step > 1"
                    flat
                    color="deep-orange"
                    @click="$refs.stepper.previous()"
                    label="Back"
                    class="q-ml-sm"
                  />

                  <q-btn
                    v-if="step === 2"
                    color="deep-orange"
                    label="Download Invoice"
                    @click.prevent="$refs.invoicePreview.generateReport()"
                  />
                </q-stepper-navigation>
              </template>
            </q-stepper>
          </div>

          <div
            class="col-lg-3 col-md-3 col-sm-12 col-xs-12"
            style="margin-bottom: 5rem"
          >
            <div class="cardContainer">
              <!-- <div>
                <q-btn
                  color="secondary"
                  label="Download Invoice"
                  unelevated
                  class="full-width"
                  @click="generateReport()"
                />
              </div> -->

              <div>
                <q-btn
                  color="red"
                  label="Clear Invoice"
                  glossy
                  outline
                  @click.prevent="clearFormData()"
                  class="full-width"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapMutations } from "vuex";
import InvoiceForm from "../components/InvoiceForm.vue";
import InvoicePreview from "../components/InvoicePreview.vue";

export default {
  name: "PageIndex",
  components: {
    "app-invoice-form": InvoiceForm,
    "app-invoice-preview": InvoicePreview
  },
  data() {
    return {
      step: 1
    };
  },

  methods: {
    ...mapMutations("invoice", ["clearFormData"])
  }
};
</script>

<style></style>
