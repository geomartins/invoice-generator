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
                              @added="updateLogoX"
                              :auto-upload="false"
                              label="Add your logo"
                              url="http://localhost:4444/upload"
                             
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
                              v-model="invoiceFrom"
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
                              v-model="billTo"
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
                              v-model="shipTo"
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
                        v-model="invoiceId"
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
                          v-model="date"
                          :dense="dense"
                          style="padding-bottom: 2px"
                        >
                          <template v-slot:append>
                            <q-icon name="event" class="cursor-pointer">
                              <q-popup-proxy
                                transition-show="scale"
                                transition-hide="scale"
                              >
                                <q-date v-model="date" mask="YYYY-MM-DD">
                                  <div class="row items-center justify-end">
                                    <q-btn
                                      v-close-popup
                                      label="Close"
                                      color="primary"
                                      flat
                                    />
                                  </div>
                                </q-date>
                              </q-popup-proxy>
                            </q-icon>
                          </template>
                        </q-input>
                      </div>
                    </div>

                    <div class="input__flex__inline">
                      <div>Payment Date</div>
                      <div>
                        <q-input
                          outlined
                          bottom-slots
                          v-model="paymentDate"
                          :dense="dense"
                          style="padding-bottom: 2px"
                        >
                          <template v-slot:append>
                            <q-icon name="event" class="cursor-pointer">
                              <q-popup-proxy
                                transition-show="scale"
                                transition-hide="scale"
                              >
                                <q-date v-model="paymentDate" mask="YYYY-MM-DD">
                                  <div class="row items-center justify-end">
                                    <q-btn
                                      v-close-popup
                                      label="Close"
                                      color="primary"
                                      flat
                                    />
                                  </div>
                                </q-date>
                              </q-popup-proxy>
                            </q-icon>
                          </template>
                        </q-input>
                      </div>
                    </div>

                    <div class="input__flex__inline">
                      <div>Due Date</div>
                      <div>
                        <q-input
                          outlined
                          bottom-slots
                          v-model="dueDate"
                          :dense="dense"
                          style="padding-bottom: 2px"
                        >
                          <template v-slot:append>
                            <q-icon name="event" class="cursor-pointer">
                              <q-popup-proxy
                                transition-show="scale"
                                transition-hide="scale"
                              >
                                <q-date v-model="dueDate" mask="YYYY-MM-DD">
                                  <div class="row items-center justify-end">
                                    <q-btn
                                      v-close-popup
                                      label="Close"
                                      color="primary"
                                      flat
                                    />
                                  </div>
                                </q-date>
                              </q-popup-proxy>
                            </q-icon>
                          </template>
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

                <div class="q-my-sm"></div>

                <div
                  class="row "
                  v-for="(item, index) in formData.items"
                  :key="item + index"
                >
                  <div class="col-lg-5 col-sm-12 col-xs-12">
                    <q-input
                      outlined
                      bottom-slots
                      type="textarea"
                      autogrow
                      @keyup="updateItemX($event, 'description', index)"
                      :value="item.description"
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
                      @keyup="updateItemX($event, 'quantity', index)"
                      :value="item.quantity"
                      :dense="dense"
                      style="padding-bottom: 2px"
                      class="q-ml-xs"
                      :rules="numericOrDecimal"
                    >
                    </q-input>
                  </div>

                  <div class="col-lg-2 col-sm-12 col-xs-12">
                    <q-input
                      outlined
                      bottom-slots
                      autogrow
                      @keyup="updateItemX($event, 'rate', index)"
                      :value="item.rate"
                      :dense="dense"
                      placeholder="Rate"
                      style="padding-bottom: 2px"
                      class="q-ml-xs"
                      prefix="$"
                      :rules="numericOrDecimal"
                    >
                    </q-input>
                  </div>

                  <div class="col-lg-3 col-sm-12 col-xs-12">
                    <div class="input__flex__inline q-my-sm">
                      <div style="text-align: left; padding-left: 1rem;">
                        ${{ item.rate * item.quantity }}
                      </div>
                      <div>
                        <q-btn
                          round
                          flat
                          color="red"
                          icon="clear"
                          @click.prevent="removeItem(index)"
                          v-if="index > 0"
                        />
                      </div>
                    </div>
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
                    @click.prevent="addItem()"
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
                              v-model="notes"
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
                              v-model="terms"
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
                      <div>${{ subTotal }}</div>
                    </div>

                    <div class="input__flex__inline">
                      <div>Discount</div>
                      <div>
                        <q-input
                          outlined
                          bottom-slots
                          v-model="discount"
                          :dense="dense"
                          style="padding-bottom: 2px"
                          suffix="%"
                          input-class="text-right"
                          :rules="numericOrDecimal"
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
                          v-model="tax"
                          :dense="dense"
                          style="padding-bottom: 2px"
                          suffix="%"
                          input-class="text-right"
                          :rules="numericOrDecimal"
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
                          v-model="shipping"
                          :dense="dense"
                          style="padding-bottom: 2px"
                          prefix="$"
                          :rules="numericOrDecimal"
                        >
                        </q-input>
                      </div>
                    </div>

                    <div class="input__flex__inline q-my-sm">
                      <div>Total</div>
                      <div>${{ total }}</div>
                    </div>

                    <div class="input__flex__inline">
                      <div>Amount Paid</div>
                      <div>
                        <q-input
                          outlined
                          bottom-slots
                          v-model="amountPaid"
                          ref="amountPaid"
                          :dense="dense"
                          style="padding-bottom: 2px"
                          prefix="$"
                          :rules="numericOrDecimal"
                        >
                        </q-input>
                      </div>
                    </div>

                    <div class="input__flex__inline q-my-sm">
                      <div>Balance Due</div>
                      <div>${{ balanceDue }}</div>
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
import VueHtml2pdf from "vue-html2pdf";
import { mapState, mapGetters, mapMutations } from "vuex";

export default {
  name: "PageIndex",
  components: {
    VueHtml2pdf
  },
  data() {
    return {
      numericOrDecimal: [
        val =>
          /^\d+(\.\d{1,2})?$/.test(val) || "Numeric or decimal numbers required"
      ],
      dense: true,
      text: "",
      htmlToPdfOptions: {
        margin: 10
      }
    };
  },
  computed: {
    ...mapState("invoice", ["formData"]),
    ...mapGetters("invoice", ["subTotal", "total", "balanceDue"]),
    amountPaid: {
      get() {
        return this.formData.amountPaid;
      },
      set(value) {
        this.updateFormData({ key: "amountPaid", value: value });
      }
    },
    discount: {
      get() {
        return this.formData.discount;
      },
      set(value) {
        this.updateFormData({ key: "discount", value: value });
      }
    },

    shipping: {
      get() {
        return this.formData.shipping;
      },
      set(value) {
        this.updateFormData({ key: "shipping", value: value });
      }
    },

    tax: {
      get() {
        return this.formData.tax;
      },
      set(value) {
        this.updateFormData({ key: "tax", value: value });
      }
    },

    notes: {
      get() {
        return this.formData.notes;
      },
      set(value) {
        this.updateFormData({ key: "notes", value: value });
      }
    },

    terms: {
      get() {
        return this.formData.terms;
      },
      set(value) {
        this.updateFormData({ key: "terms", value: value });
      }
    },

    billTo: {
      get() {
        return this.formData.billTo;
      },
      set(value) {
        this.updateFormData({ key: "billTo", value: value });
      }
    },

    shipTo: {
      get() {
        return this.formData.shipTo;
      },
      set(value) {
        this.updateFormData({ key: "shipTo", value: value });
      }
    },

    invoiceFrom: {
      get() {
        return this.formData.invoiceFrom;
      },
      set(value) {
        this.updateFormData({ key: "invoiceFrom", value: value });
      }
    },

    invoiceId: {
      get() {
        return this.formData.invoiceId;
      },
      set(value) {
        this.updateFormData({ key: "invoiceId", value: value });
      }
    },

    paymentDate: {
      get() {
        return this.formData.paymentDate;
      },
      set(value) {
        this.updateFormData({ key: "paymentDate", value: value });
      }
    },

    dueDate: {
      get() {
        return this.formData.dueDate;
      },
      set(value) {
        this.updateFormData({ key: "dueDate", value: value });
      }
    },

    date: {
      get() {
        return this.formData.date;
      },
      set(value) {
        this.updateFormData({ key: "date", value: value });
      }
    }
  },
  methods: {
    ...mapMutations("invoice", [
      "updateFormData",
      "addItem",
      "removeItem",
      "updateItem",
      "clearFormData"
    ]),
    openUrl(url) {
      openURL(url);
    },
    generateReport() {
      this.$refs.DownloadComp.generatePdf();
    },
    updateItemX(event, key, index) {
      this.updateItem({ key: key, value: event.target.value, index: index });
    },
    updateLogoX(files) {
      const logo = files[0]["__img"].src;
      console.log(logo, 'ffffffffff')
      this.updateFormData({ key: "logo", value: logo });
    }
  }
};
</script>

<style >
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

.q-uploader__file--img {
    color: #fff;
    height: 100px!important;
    min-width: 200px;
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
