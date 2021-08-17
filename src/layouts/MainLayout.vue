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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
        <br />
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation
      </div>
    </div>

    <q-page-container>
      <router-view />
    </q-page-container>

    
    <div class="c_footer">
      <div class="c_footer__center">
        <div class="c_foote__center__left">&copy; Martins Abiodun 2019</div>
        <div class="c_foote__center__right">
          <ul>
            <li @click.prevent="openUrl('https://google.com')">Source Code</li>
            <li @click.prevent="openUrl('https://google.com')">
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
    },
  },
};
</script>
