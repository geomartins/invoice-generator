<template>
  <q-page>
    <div class="c_main">
      <div class="c_main__center">
        <div class="row q-mt-md">
          <div
            class="col-lg-9 col-md-9 col-sm-12 col-xs-12"
            style="margin-bottom: 5rem; border: 1px solid #c3c3c3c4; padding: 3rem 1.3rem;"
          >
            <VueHtml2pdf
              :show-layout="true"
              :float-layout="false"
              :enable-download="true"
              :preview-modal="true"
              filename="hee hee"
              :manual-pagination="true"
              :html-to-pdf-options="htmlToPdfOptions"
              pdf-content-width="100%"
              pdf-orientation="landscape"
              ref="DownloadComp"
            >
              <section slot="pdf-content">
            <!-- AAA -->
            <div class="row">
              <div class="col-md-7 col-sm-7 col-xs-12">
                <div class="row">
                  <div class="col-md-8 col-xs-12 col-sm-12">
                    <div class="input__flex">
                      <div></div>
                      <div>
                        <q-uploader
                          flat
                          color="white"
                          text-color="teal"
                          hide-upload-btn
                          :auto-upload="false"
                          label="Add your logo"
                          url="http://localhost:4444/upload"
                          multiple
                        />
                      </div>
                    </div>

                    <div class="input__flex">
                      <div></div>
                      <div>
                        <q-input
                          outlined
                          bottom-slots
                          type="textarea"
                          autogrow
                          v-model="text"
                          :dense="dense"
                          style="padding-bottom: 2px"
                          placeholder="Who is the invoice from??  "
                        >
                        </q-input>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-6 col-xs-12 col-sm-12">
                    <div class="input__flex">
                      <div>Bill To</div>
                      <div>
                        <q-input
                          outlined
                          bottom-slots
                          type="textarea"
                          rows="2"
                          v-model="text"
                          :dense="dense"
                          style="padding-bottom: 2px"
                          placeholder="Who is the invoice to??  "
                        >
                        </q-input>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-6 col-xs-12 col-sm-12">
                    <div class="input__flex">
                      <div>Ship To</div>
                      <div>
                        <q-input
                          outlined
                          bottom-slots
                          type="textarea"
                          rows="2"
                          v-model="text"
                          :dense="dense"
                          style="padding-bottom: 2px"
                        >
                        </q-input>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-5 col-sm-5 col-xs-12">
                <div class="input__flex__inline title">INVOICE</div>
                <div class="input__flex__inline">
                  <q-input
                    outlined
                    bottom-slots
                    v-model="text"
                    :dense="dense"
                    placeholder="Invoice ID"
                  >
                    <template v-slot:before> # </template>
                  </q-input>
                </div>

                <div class="input__flex__inline">
                  <div>Date</div>
                  <div>
                    <q-input
                      outlined
                      bottom-slots
                      v-model="text"
                      :dense="dense"
                      style="padding-bottom: 2px"
                    >
                    </q-input>
                  </div>
                </div>

                <div class="input__flex__inline">
                  <div>Payment Date</div>
                  <div>
                    <q-input
                      outlined
                      bottom-slots
                      v-model="text"
                      :dense="dense"
                      style="padding-bottom: 2px"
                    >
                    </q-input>
                  </div>
                </div>

                <div class="input__flex__inline">
                  <div>Due Date</div>
                  <div>
                    <q-input
                      outlined
                      bottom-slots
                      v-model="text"
                      :dense="dense"
                      style="padding-bottom: 2px"
                    >
                    </q-input>
                  </div>
                </div>
              </div>
            </div>

            <div class="q-ma-md"></div>
            <div class="row">
              <div class="col-lg-5">
                <div class="clip first">Item</div>
              </div>

              <div class="col-lg-2">
                <div class="clip">Quantity</div>
              </div>

              <div class="col-lg-2">
                <div class="clip">Rate</div>
              </div>

              <div class="col-lg-3">
                <div class="clip last">Amount</div>
              </div>
            </div>
            <div class="row q-my-sm">
              <div class="col-lg-5 col-sm-12 col-xs-12">
                <q-input
                  outlined
                  bottom-slots
                  type="textarea"
                  autogrow
                  v-model="text"
                  :dense="dense"
                  placeholder="Description of service or product"
                  style="padding-bottom: 2px"
                  class="q-ml-xs"
                >
                </q-input>
              </div>

              <div class="col-lg-2 col-sm-12 col-xs-12">
                <q-input
                  outlined
                  bottom-slots
                  type="textarea"
                  autogrow
                  v-model="text"
                  :dense="dense"
                  style="padding-bottom: 2px"
                  class="q-ml-xs"
                >
                </q-input>
              </div>

              <div class="col-lg-2 col-sm-12 col-xs-12">
                <q-input
                  outlined
                  bottom-slots
                  type="textarea"
                  autogrow
                  v-model="text"
                  :dense="dense"
                  placeholder="Rate"
                  style="padding-bottom: 2px"
                  class="q-ml-xs"
                >
                </q-input>
              </div>

              <div class="col-lg-3 col-sm-12 col-xs-12">
                <q-input
                  outlined
                  bottom-slots
                  type="textarea"
                  autogrow
                  v-model="text"
                  :dense="dense"
                  style="padding-bottom: 2px"
                  class="q-ml-xs"
                >
                </q-input>
              </div>
            </div>
            <div class="row q-my-sm">
              <q-btn
                color="teal"
                icon="add"
                label="Line Item"
                style="text-transform: capitalize"
                size="md"
                flat
              />
            </div>

            <!-- ------------------------------------------------------------------------ -->

            <div class="row">
              <div class="col-md-7 col-sm-7 col-xs-12">
                <div class="row">
                  <div class="col-md-8 col-xs-12 col-sm-12">
                    <div class="input__flex">
                      <div class="q-ml-md q-mb-sm">Notes</div>
                      <div>
                        <q-input
                          outlined
                          bottom-slots
                          type="textarea"
                          rows="2"
                          v-model="text"
                          :dense="dense"
                          style="padding-bottom: 2px"
                          placeholder="Note: Any relevant information not already covered  "
                        >
                        </q-input>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-8 col-xs-12 col-sm-12">
                    <div class="input__flex">
                      <div class="q-ml-md q-mb-sm">Terms</div>
                      <div>
                        <q-input
                          outlined
                          bottom-slots
                          type="textarea"
                          rows="2"
                          v-model="text"
                          :dense="dense"
                          style="padding-bottom: 2px"
                          placeholder="Terms and conditions - late fees, payment methods, delivery schedule"
                        >
                        </q-input>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-5 col-sm-5 col-xs-12">
                <div class="input__flex__inline q-my-sm">
                  <div>Subtotal</div>
                  <div>$20.00</div>
                </div>

                <div class="input__flex__inline">
                  <div>Discount</div>
                  <div>
                    <q-input
                      outlined
                      bottom-slots
                      v-model="text"
                      :dense="dense"
                      style="padding-bottom: 2px"
                    >
                    </q-input>
                  </div>
                </div>

                <div class="input__flex__inline">
                  <div>Tax</div>
                  <div>
                    <q-input
                      outlined
                      bottom-slots
                      v-model="text"
                      :dense="dense"
                      style="padding-bottom: 2px"
                    >
                    </q-input>
                  </div>
                </div>

                <div class="input__flex__inline">
                  <div>Shipping</div>
                  <div>
                    <q-input
                      outlined
                      bottom-slots
                      v-model="text"
                      :dense="dense"
                      style="padding-bottom: 2px"
                    >
                    </q-input>
                  </div>
                </div>

                <div class="input__flex__inline q-my-sm">
                  <div>Total</div>
                  <div>$20.00</div>
                </div>

                <div class="input__flex__inline">
                  <div>Amount Paid</div>
                  <div>
                    <q-input
                      outlined
                      bottom-slots
                      v-model="text"
                      :dense="dense"
                      style="padding-bottom: 2px"
                    >
                    </q-input>
                  </div>
                </div>

                <div class="input__flex__inline q-my-sm">
                  <div>Balance Due</div>
                  <div>$20.00</div>
                </div>
              </div>
            </div>
            </section>
            </VueHtml2pdf>

            <!-- ----------------------------------------------------------------------------- -->
          </div>

          <div
            class="col-lg-3 col-md-3 col-sm-12 col-xs-12"
            style="margin-bottom: 5rem"
          >
            <div class="cardContainer">
              <div>
                <q-btn
                  color="secondary"
                  label="Download Invoice"
                  unelevated
                  class="full-width"
                  @click="generateReport()"
                />
              </div>

              <div>
                <q-btn
                  color="secondary"
                  label="Preview Invoice"
                  glossy
                  outline
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
import VueHtml2pdf from "vue-html2pdf";

export default {
  name: "PageIndex",
  components: {
    VueHtml2pdf
  },
  data() {
    return {
      dense: true,
      text: "",
      htmlToPdfOptions: {
        margin: 10
      }
    };
  },
  methods: {
    openUrl(url) {
      openURL(url);
    },
    generateReport() {
      this.$refs.DownloadComp.generatePdf();
    }
  }
};
</script>

<style scoped>
.text_right {
  text-align: right;
}
.input__flex__inline {
  display: flex;
  justify-content: flex-end;
  text-align: right;
  align-items: center;
}

.input__flex__inline.title {
  font-size: 2rem;
  font-weight: lighter;
  letter-spacing: 2px;
  margin-bottom: 1rem;
}

.input__flex__inline > div {
  width: 50%;
  color: #999;
}

.input__flex__inline > div:first-child {
  padding-right: 20px;
  color: #999;
}

.input__flex {
  display: flex;
  flex-direction: column;
  text-align: left;
  /* align-items: center; */
  margin-bottom: 1rem;
}

.input__flex > div {
  width: 90%;
}

.input__flex > div:first-child {
  padding-right: 20px;
  color: #999;
}

.clip {
  height: 1.8rem;
  background: #353940;
  color: #fff;
  width: 100%;
  padding-left: 0.8rem;
  display: flex;
  align-items: center;
}

.clip.first {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}

.clip.last {
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}

.cardContainer {
  display: flex;
  flex-direction: column;
  width: 80%;
  justify-content: center;
  align-items: center;
  background: #9999991c none repeat scroll 0% 0%;
  height: 200px;
  margin: auto;
}

.cardContainer > div {
  margin-bottom: 20px;
  width: 70%;
}

@media (min-width: 0px) and (max-width: 900px) {
  .input__flex__inline > div {
    width: 100%;
  }

  .input__flex > div {
    width: 100%;
  }
}
</style>
