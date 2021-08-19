//import axios from 'axios'

const state = {
  formData: {
    logo: "",
    currency: "",
    invoiceId: "",

    invoiceFrom: "",
    billTo: "",
    shipTo: "",
    date: "",
    paymentDate: "",
    dueDate: "",

    tax: 0,
    shipping: 0,
    discount: 0,
    amountPaid: 0,

    items: [{ description: "", quantity: 0, rate: 0 }],
    notes: "",
    terms: ""
  }
};
const getters = {
  subTotal: state => {
    return state.formData.items.reduce(function(acc, curVal) {
      return acc + curVal.quantity * curVal.rate;
    }, 0);
  },
  total: (state, getters) => {
    const subTotal = +getters.subTotal;
    const discountInPercent = +state.formData.discount;
    const discount = (discountInPercent / 100) * subTotal;
    const shipping = +state.formData.shipping;
    const taxInPercent = +state.formData.tax ?? 0;
    const tax = (taxInPercent / 100) * subTotal;
    return subTotal + shipping + tax - discount;
  },
  balanceDue: (state, getters) => {
    const total = +getters.total ?? 0;
    const amountPaid = +state.formData.amountPaid ?? 0;
    return total - amountPaid;
  }
};
const mutations = {
  updateFormData(state, payload) {
    state.formData[payload.key] = payload.value;
  },
  addItem(state, payload) {
    state.formData["items"].push({
      description: "",
      quantity: 0,
      rate: 0
    });
  },
  removeItem(state, index) {
    state.formData["items"].splice(index, 1);
  },
  updateItem(state, payload) {
    const index = payload.index;
    const key = payload.key;
    const value = payload.value;

    state.formData["items"][index][key] = value;
  },

  clearFormData(state, payload) {
    state.formData = {
      logo: "",
      currency: "",
      invoiceId: "",

      invoiceFrom: "",
      billTo: "",
      shipTo: "",
      date: "",
      paymentDate: "",
      dueDate: "",

      tax: 0,
      shipping: 0,
      discount: 0,
      amountPaid: 0,

      items: [{ description: "", quantity: 0, rate: 0 }],
      notes: "",
      terms: ""
    };
  }
};
const actions = {};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
