<template>
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
                  <img :src="formData.logo"  style="width: 200px; height: 75px"/>
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

        <div class="col-md-5 col-sm-5 col-xs-12">
          <div class="input__flex__inline title">INVOICE</div>
          <div class="input__flex__inline">
            <div>
                #{{ formData.invoiceId  }}
            </div>
          </div>

          <div class="input__flex__inline">
            <div>Date</div>
            <div>
              {{ formData.date }}
            </div>
          </div>

          <div class="input__flex__inline">
            <div>Payment Date</div>
            <div>
              {{ formData.paymentDate }}
            </div>
          </div>

          <div class="input__flex__inline">
            <div>Due Date</div>
            <div>
              {{ formData.dueDate }}
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
          {{ item.description  }}
        </div>

        <div class="col-lg-2 col-sm-12 col-xs-12">
         {{ item.quantity  }}
        </div>

        <div class="col-lg-2 col-sm-12 col-xs-12">
          $ {{ item.rate }}
        </div>

        <div class="col-lg-3 col-sm-12 col-xs-12">
          <div class="input__flex__inline q-my-sm">
            <div style="text-align: left; padding-left: 1rem;">
              ${{ item.rate * item.quantity }}
            </div>
            <div>
              
            </div>
          </div>
        </div>
      </div>
      <div class="row q-my-lg">
       
      </div>

      <!-- ------------------------------------------------------------------------ -->

      <div class="row">
        <div class="col-md-7 col-sm-7 col-xs-12">
          <div class="row">
            <div class="col-md-8 col-xs-12 col-sm-12">
              <div class="input__flex">
                <div class="q-ml-md q-mb-sm">Notes</div>
                <div>
                  {{  formData.notes }}
                 
                </div>
              </div>
            </div>

            <div class="col-md-8 col-xs-12 col-sm-12">
              <div class="input__flex">
                <div class="q-ml-md q-mb-sm">Terms</div>
                <div>
                 {{ formData.terms }}
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
               % {{ formData.discount }}
              
            </div>
          </div>

          <div class="input__flex__inline">
            <div>Tax</div>
            <div>
             % {{ formData.tax }}
            </div>
          </div>

          <div class="input__flex__inline">
            <div>Shipping</div>
            <div>
              $ {{ formData.shipping }}
            </div>
          </div>

          <div class="input__flex__inline q-my-sm">
            <div>Total</div>
            <div>${{ total }}</div>
          </div>

          <div class="input__flex__inline">
            <div>Amount Paid</div>
            <div>
                $ {{ formData.amountPaid }}
              
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
        margin: 10
      }
    };
  },
  computed: {
    ...mapState("invoice", ["formData"]),
    ...mapGetters("invoice", ["subTotal", "total", "balanceDue"]),
    
  },
  methods: {
    generateReport() {
      this.$refs.DownloadComp.generatePdf();
    },
    
    
  }
};
</script>


