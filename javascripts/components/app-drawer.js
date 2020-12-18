Vue.component('app-drawer', {
  props: {
    currentPath: String
  },
  template: `
  <aside class="drawer">
  <img class="brand-logo" src="images/brand-logo.png" alt="image" />
  <v-list>
    <v-list-item>
      <v-list-item-icon>
        <v-icon>mdi-calendar</v-icon>
      </v-list-item-icon>

      <v-list-item-title>ประกาศ</v-list-item-title>
    </v-list-item>

    <v-list-item>
      <v-list-item-icon>
        <v-icon>mdi-phone</v-icon>
      </v-list-item-icon>

      <v-list-item-title>สมุดโทรศัพท์</v-list-item-title>
    </v-list-item>

    <v-list-group :value="true" prepend-icon="mdi-android-messages">
      <template v-slot:activator>
        <v-list-item-title>ข้อความ</v-list-item-title>
      </template>
      <v-list-item link>
        <v-list-item-icon>
          <v-icon></v-icon>
        </v-list-item-icon>
        <v-list-item-title>Dashboard</v-list-item-title>
      </v-list-item>

      <v-list-item link>
        <v-list-item-icon>
          <v-icon></v-icon>
        </v-list-item-icon>
        <v-list-item-title>Chat</v-list-item-title>
      </v-list-item>

      <v-list-item link href="broadcast.html">
        <v-list-item-icon>
          <v-icon></v-icon>
        </v-list-item-icon>
        <v-list-item-title :class="{'list-item--active': currentPath === 'broadcast'}">Broadcast</v-list-item-title>
      </v-list-item>

      <v-list-item link href="auto-reply.html">
        <v-list-item-icon>
          <v-icon></v-icon>
        </v-list-item-icon>
        <v-list-item-title :class="{'list-item--active': currentPath === 'auto-reply'}">Auto Reply</v-list-item-title>
      </v-list-item>

      <v-list-item link href="keyword-reply.html">
        <v-list-item-icon>
          <v-icon></v-icon>
        </v-list-item-icon>
        <v-list-item-title :class="{'list-item--active': currentPath === 'keyword-reply'}"
          >Keyword Reply</v-list-item-title
        >
      </v-list-item>
    </v-list-group>
  </v-list>

  <v-list-item>
    <v-list-item-icon>
      <v-icon>mdi-inbox</v-icon>
    </v-list-item-icon>
    <v-list-item-title>กล่องรับของ</v-list-item-title>
  </v-list-item>

  <v-list-item>
    <v-list-item-icon>
      <v-icon>mdi-account-multiple</v-icon>
    </v-list-item-icon>
    <v-list-item-title>ข้อมูลลูกบ้าน</v-list-item-title>
  </v-list-item>

  <v-list-item>
    <v-list-item-icon>
      <v-icon>mdi-phone</v-icon>
    </v-list-item-icon>
    <v-list-item-title>โฮมแคร์</v-list-item-title>
  </v-list-item>

  <v-list-item>
    <v-list-item-icon>
      <v-icon>mdi-cog</v-icon>
    </v-list-item-icon>
    <v-list-item-title>ตั้งค่า</v-list-item-title>
  </v-list-item>

  <v-list-item>
    <v-list-item-icon>
      <v-icon>mdi-alert-octagon</v-icon>
    </v-list-item-icon>
    <v-list-item-title>คู่มือ HSA</v-list-item-title>
  </v-list-item>

  <v-list-item>
    <v-list-item-icon>
      <v-icon>mdi-alert-octagon</v-icon>
    </v-list-item-icon>
    <v-list-item-title>แจ้งปัญหาการใช้งาน</v-list-item-title>
  </v-list-item>
</aside>`
})