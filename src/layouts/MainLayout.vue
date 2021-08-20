<template>
  <q-layout view="hhh LpR fFf">
    <div class="c_nav">
      <div class="c_nav__center">
        <q-btn
          color="white"
          label="Invoice Generator"
          style="text-transform: capitalize; font-size: 1rem"
          flat
        />
      </div>
    </div>

    <div class="c_desc">
      <div class="c_desc__center">
        <!-- <q-btn color="purple" label="Purple" /> -->
        Welcome to the original Free Online Invoice Generator, trusted by
        millions of people. Invoice Generator lets you quickly make invoices
        with our attractive invoice template straight from your web browser, no
        sign up necessary. <br /><br />
        Did we also mention that Invoice Generator lets you generate an
        unlimited number of invoices for free? Get started....
        <br />
        <br />
      </div>
    </div>

    <q-page-container>
      <router-view />
    </q-page-container>

    <div class="c_footer">
      <div class="c_footer__center">
        <div class="c_foote__center__left">
          &copy; Swampfox {{ new Date().getFullYear() }}
        </div>
        <div class="c_foote__center__right">
          <ul>
            <li
              @click.prevent="
                openUrl('https://github.com/geomartins/invoice-generator')
              "
            >
              Source Code
            </li>
            <li @click.prevent="openUrl('https://github.com/geomartins')">
              About Developer
            </li>
          </ul>
        </div>
      </div>
    </div>
  </q-layout>
</template>

<script>
import { openURL } from "quasar";
export default {
  name: "MainLayout",
  data() {
    return {};
  },
  methods: {
    openUrl(url) {
      openURL(url);
    }
  }
};
</script>
