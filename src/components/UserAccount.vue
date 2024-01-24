<template>
  <q-card-section class="full-width row">
    <q-card class="col-3 q-pb-xl">
      <q-card-section
        >My account / <a href="#" class="text-black">Home</a></q-card-section
      >
      <q-card-section
        >Hi, {{ userStore.user.firstName }} {{ userStore.user.lastName }}
        <div class="text-weight-light text-caption">
          Thanks for being a Walmart user
        </div>
      </q-card-section>
      <q-separator></q-separator>
      <q-item>
        <q-icon name="receipt_long" class="q-ma-sm" />
        <q-item-section
          ><a href="#" class="aa">Purchase History</a></q-item-section
        >
      </q-item>
      <q-item>
        <q-icon name="receipt_long" class="q-ma-sm" />
        <q-item-section><a href="#" class="aa">My savings</a></q-item-section>
      </q-item>
      <q-item>
        <q-icon name="receipt_long" class="q-ma-sm" />
        <q-item-section><a href="#" class="aa">Wallet</a></q-item-section>
      </q-item>
      <q-item>
        <q-icon name="auto_awesome" color="primary" class="q-ma-sm" />
        <q-item-section><a href="#" class="aa">Walmart+</a></q-item-section>
      </q-item>
      <q-separator></q-separator>
      <q-card-section class="text-weight-bold">My Profile</q-card-section>
      <q-item>
        <q-icon name="auto_awesome" color="primary" class="q-ma-sm" />
        <q-item-section><a href="#" class="aa">Pets</a></q-item-section>
      </q-item>
      <q-item>
        <q-icon name="auto_awesome" color="primary" class="q-ma-sm" />
        <q-item-section><a href="#" class="aa">Vehicels</a></q-item-section>
      </q-item>
      <q-separator></q-separator>
      <q-card-section class="text-weight-bold">Manage Account</q-card-section>
      <q-item>
        <q-icon name="auto_awesome" color="primary" class="q-ma-sm" />
        <q-item-section
          ><a href="#" class="aa">Personal info</a></q-item-section
        >
      </q-item>
      <q-item>
        <q-icon name="auto_awesome" color="primary" class="q-ma-sm" />
        <q-item-section><a href="#" class="aa">Addresses</a></q-item-section>
      </q-item>
      <q-item>
        <q-icon name="auto_awesome" color="primary" class="q-ma-sm" />
        <q-item-section
          ><a href="#" class="aa">Communication & privacy</a></q-item-section
        >
      </q-item>
      <q-item>
        <q-icon name="auto_awesome" color="primary" class="q-ma-sm" />
        <q-item-section
          ><a href="#" class="aa">Giving & impact</a></q-item-section
        >
      </q-item>
      <q-separator></q-separator>
      <q-card-section class="text-weight-bold">My items</q-card-section>
      <q-item>
        <q-icon name="auto_awesome" color="primary" class="q-ma-sm" />
        <q-item-section><a href="#" class="aa">Walmart cash</a></q-item-section>
      </q-item>
      <q-item>
        <q-icon name="auto_awesome" color="primary" class="q-ma-sm" />
        <q-item-section><a href="#" class="aa">Reorder</a></q-item-section>
      </q-item>
      <q-item>
        <q-icon name="auto_awesome" color="primary" class="q-ma-sm" />
        <q-item-section><a href="#" class="aa">Lists</a></q-item-section>
      </q-item>
      <q-item>
        <q-icon name="auto_awesome" color="primary" class="q-ma-sm" />
        <q-item-section><a href="#" class="aa">Registeries</a></q-item-section>
      </q-item>
      <q-separator></q-separator>
      <q-card-section class="text-weight-bold"
        >Subscription & plan</q-card-section
      >
      <q-item>
        <q-icon name="auto_awesome" color="primary" class="q-ma-sm" />
        <q-item-section
          ><a href="#" class="aa">Protection plans</a></q-item-section
        >
      </q-item>
      <q-item>
        <q-icon name="auto_awesome" color="primary" class="q-ma-sm" />
        <q-item-section
          ><a href="#" class="aa">Items subscription</a></q-item-section
        >
      </q-item>
      <q-separator></q-separator>
      <q-card-section class="text-weight-bold">Privacy</q-card-section>
      <q-item>
        <q-icon name="auto_awesome" color="primary" class="q-ma-sm" />
        <q-item-section
          ><a href="#" class="aa">Privacy policy</a></q-item-section
        >
      </q-item>
      <q-item>
        <q-icon name="auto_awesome" color="primary" class="q-ma-sm" />
        <q-item-section
          ><a href="#" class="aa">Your privacy choices</a></q-item-section
        >
      </q-item>
      <q-item>
        <q-icon name="auto_awesome" color="primary" class="q-ma-sm" />
        <q-item-section
          ><a href="#" class="aa"
            >Request My Personal Information</a
          ></q-item-section
        >
      </q-item>
      <q-separator></q-separator>
      <q-card-section class="text-weight-bold"
        >Customer Services</q-card-section
      >
      <q-item>
        <q-icon name="auto_awesome" color="primary" class="q-ma-sm" />
        <q-item-section><a href="#" class="aa">Help</a></q-item-section>
      </q-item>
      <q-item>
        <q-icon name="auto_awesome" color="primary" class="q-ma-sm" />
        <q-item-section><a href="#" class="aa">Terms of Use</a></q-item-section>
      </q-item>
      <q-separator></q-separator>
      <q-item>
        <q-icon name="auto_awesome" color="primary" class="q-ma-sm" />
        <q-item-section><a href="#" class="aa">Sign out</a></q-item-section>
      </q-item>
    </q-card>
    <q-card class="col-9">
      <q-card-section class="text-h5 text-weight-bold q-ma-md row">
        <div class="col-6">Welcome to your Account</div>
        <div class="col-6">
          <q-avatar>
            <img
              src="//i5.walmartimages.com/dfw/63fd9f59-b2d5/5c15110b-7c74-4282-8e87-43515087b5c9/v1/rewards-brand-yellow-logo.svg"
            />
          </q-avatar>
          $0 Walmart Cash
          <span class="text-weight-light text-h6"> How to get more </span>
        </div>
      </q-card-section>
      <div class="row">
        <q-card-section class="col-5">
          <q-card class="q-pa-md">
            <div class="row">
              <div class="col-3">
                <q-avatar>
                  <img
                    src="https://i5.walmartimages.com/dfw/4ff9c6c9-ab43/k2-_141eb459-f61b-446e-aedb-a294804b2e22.v1.svg"
                  />
                </q-avatar>
              </div>
              <div class="col-9">
                <div class="text-weight-bold">Add your phone number</div>
                <div class="text-grey-6 text-weight-light">
                  Make it easier to sign in
                </div>
              </div>
            </div>
          </q-card>
        </q-card-section>
        <q-card-section class="col-5"
          ><q-card class="q-pa-md">
            <div class="row">
              <div class="col-3">
                <q-avatar>
                  <img
                    src="https://i5.walmartimages.com/dfw/4ff9c6c9-3336/k2-_4ac72dd7-66d6-4087-9c37-224d3d305164.v1.svg"
                  />
                </q-avatar>
              </div>
              <div class="col-9">
                <div class="text-weight-bold">Save with free delivery</div>
                <div class="text-grey-6 text-weight-light">
                  Try Walmart+ free for 30 days
                </div>
              </div>
            </div>
          </q-card>
        </q-card-section>
      </div>
      <div>
        <q-card class="bg-light-blue-1 text-h6 q-pa-md q-ma-md"
          ><q-icon name="receipt_long" class="q-ma-sm" /> Purchase History
        </q-card>
      </div>
      <div>
        <q-card class="text-h6 q-ma-md"
          ><q-card-section class="bg-light-blue-1">
            <q-icon name="perm_identity" class="q-ma-sm" /> Account info
            <div class="text-weight-light text-body2 q-ml-md">
              Adresses, Contact information and password
            </div>
          </q-card-section>

          <q-card-section class="row">
            <q-card-section class="col-5">
              Email address
              <div class="text-weight-light text-body2">
                {{ userStore.user.email }}
              </div>
            </q-card-section>
            <q-card-section class="col-5">
              User name
              <div class="text-weight-light text-body2">
                {{ userStore.user.firstName }} {{ userStore.user.lastName }}
              </div>
            </q-card-section>
          </q-card-section>
        </q-card>
      </div>
    </q-card>
  </q-card-section>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useUserStore } from '../stores/user';
export default defineComponent({
  setup() {
    const userStore = useUserStore();
    return {
      userStore,
    };
  },
});
</script>
