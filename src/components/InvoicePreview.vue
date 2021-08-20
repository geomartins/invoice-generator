<template>
  <VueHtml2pdf
    :show-layout="true"
    :float-layout="false"
    :enable-download="true"
    :preview-modal="false"
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
        <div class="col-md-8 col-sm-8 col-xs-8">
          <div class="row">
            <div class="col-md-8 col-xs-12 col-sm-12">
              <div class="input__flex">
                <div></div>
                <div>
                  <img
                    :src="formData.logo"
                    style="width: 200px; height: 75px"
                    v-if="formData.logo"
                  />
                </div>
              </div>

              <div class="input__flex">
                <div></div>
                <div>
                  {{ formData.invoiceFrom }}
                </div>
              </div>
            </div>

            <div class="col-md-6 col-xs-12 col-sm-12">
              <div class="input__flex">
                <div>Bill To</div>
                <div>
                  {{ formData.billTo }}
                </div>
              </div>
            </div>

            <div class="col-md-6 col-xs-12 col-sm-12">
              <div class="input__flex">
                <div>Ship To</div>
                <div>
                  {{ formData.shipTo }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-4 col-sm-4 col-xs-4">
          <div class="input__flex__inline title2">
            INVOICE
          </div>
          <div class="input__flex__inline">
            <div>Invoice ID</div>
            <div style="text-align: left">#{{ formData.invoiceId }}</div>
          </div>

          <div class="input__flex__inline">
            <div>Date</div>
            <div style="text-align: left">
              {{ formData.date | dateToHumanReadableForm }}
            </div>
          </div>

          <div class="input__flex__inline">
            <div>Payment Date</div>
            <div style="text-align: left">
              {{ formData.paymentDate | dateToHumanReadableForm }}
            </div>
          </div>

          <div class="input__flex__inline">
            <div>Due Date</div>
            <div style="text-align: left">
              {{ formData.dueDate | dateToHumanReadableForm }}
            </div>
          </div>
        </div>
      </div>

      <div class="q-ma-md"></div>
      <div class="row">
        <div
          class="col-lg-5 col-md-5 col-sm-5 col-xs-5"
          style="border: 1px solid #fff"
        >
          <div class="clip first">Item</div>
        </div>

        <div
          class="col-lg-2 col-md-2 col-sm-2 col-xs-2"
          style="border: 1px solid #fff"
        >
          <div class="clip">Quantity</div>
        </div>

        <div
          class="col-lg-2 col-md-2 col-sm-2 col-xs-2"
          style="border: 1px solid #fff"
        >
          <div class="clip">Rate</div>
        </div>

        <div
          class="col-lg-3 col-md-3 col-sm-3 col-xs-3"
          style="border: 1px solid #fff"
        >
          <div class="clip last">Amount</div>
        </div>
      </div>

      <div class="q-my-sm"></div>

      <div
        class="row "
        v-for="(item, index) in formData.items"
        :key="item + index"
      >
        <div
          class="col-lg-5 col-md-5 col-sm-5 col-xs-5"
          style="padding-left: 1rem;"
        >
          {{ item.description }}
        </div>

        <div
          class="col-lg-2 col-md-2 col-sm-2 col-xs-2"
          style="padding-left: 1rem;"
        >
          {{ item.quantity }}
        </div>

        <div
          class="col-lg-2 col-md-2 col-md-2 col-xs-2"
          style="padding-left: 1rem;"
        >
          <span v-html="formData.currency"> </span> {{ item.rate }}
        </div>

        <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
          <div class="input__flex__inline q-my-sm">
            <div style="text-align: left; padding-left: 1rem;">
              <span v-html="formData.currency"> </span>
              {{ item.rate * item.quantity }}
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div class="row q-my-lg"></div>

      <!-- ------------------------------------------------------------------------ -->

      <div class="row">
        <div class="col-md-8 col-sm-8 col-xs-8">
          <div class="row">
            <div class="col-md-8 col-xs-12 col-sm-12 q-mb-sm">
              <div class="input__flex" v-if="formData.notes">
                <div class="">Notes</div>
                <div>
                  {{ formData.notes }}
                </div>
              </div>
            </div>

            <div class="col-md-8 col-xs-12 col-sm-12">
              <div class="input__flex" v-if="formData.terms">
                <div class="">Terms</div>
                <div>
                  {{ formData.terms }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-4 col-sm-4 col-xs-4">
          <div class="input__flex__inline q-my-sm">
            <div>Subtotal</div>
            <div style="text-align: left">
              <span v-html="formData.currency"> </span>{{ subTotal }}
            </div>
          </div>

          <div class="input__flex__inline">
            <div>Discount</div>
            <div style="text-align: left">{{ formData.discount }} %</div>
          </div>

          <div class="input__flex__inline">
            <div>Tax</div>
            <div style="text-align: left">{{ formData.tax }} %</div>
          </div>

          <div class="input__flex__inline">
            <div>Shipping</div>
            <div style="text-align: left">
              <span v-html="formData.currency"> </span> {{ formData.shipping }}
            </div>
          </div>

          <div class="input__flex__inline q-my-sm">
            <div>Total</div>
            <div style="text-align: left">
              <span v-html="formData.currency"> </span>{{ total }}
            </div>
          </div>

          <div class="input__flex__inline">
            <div>Amount Paid</div>
            <div style="text-align: left">
              <span v-html="formData.currency"> </span>
              {{ formData.amountPaid }}
            </div>
          </div>

          <div class="input__flex__inline q-my-sm">
            <div>Balance Due</div>
            <div style="text-align: left">
              <span v-html="formData.currency"> </span> {{ balanceDue }}
            </div>
          </div>
        </div>
      </div>
    </section>
  </VueHtml2pdf>
</template>

<script>
import VueHtml2pdf from "vue-html2pdf";
import { mapState, mapGetters } from "vuex";
export default {
  name: "InvoicePreview",
  components: {
    VueHtml2pdf
  },
  data() {
    return {
      dense: true,
      text: "",
      htmlToPdfOptions: {
        margin: 10,
        html2canvas: {
          scale: 1,
          useCORS: true
        }

        // jsPDF: {
        //     unit: 'in',
        //     format: 'a4',
        //     orientation: 'portrait'
        // }
      }
    };
  },
  filters: {
    dateToHumanReadableForm: function(value) {
      if (!value) return "";
      value = value.toString();
      var dateData, dateObject, dateReadable;

      dateData = value
        .replace(/-/g, "/")
        .replace("T", " ")
        .replace(/\..*|\+.*/, ""); //For example

      dateObject = new Date(Date.parse(dateData));

      dateReadable = dateObject.toDateString();

      return dateReadable;
    }
  },
  computed: {
    ...mapState("invoice", ["formData"]),
    ...mapGetters("invoice", ["subTotal", "total", "balanceDue"])
  },
  methods: {
    generateReport() {
      this.$refs.DownloadComp.generatePdf();
    }
  }
};
</script>
