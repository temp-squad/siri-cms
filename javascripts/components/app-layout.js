Vue.component('app-layout', {
  props: {
    currentPath: String
  },
  template: `
  <v-app>
    <v-main>
      <div class="content">
        <v-container fluid class="bg-gray-4 p-0">
          <v-row class="h-100">
            <v-col sm="2" class="p-0">
              <app-drawer :current-path="currentPath"></app-drawer>
            </v-col>
            <v-col sm="10" class="p-0">
              <v-toolbar dense flat>
                <v-app-bar-nav-icon></v-app-bar-nav-icon>
                <v-toolbar-title>เดอะเบส เพชรเกษม</v-toolbar-title>
                
                <v-spacer></v-spacer>
                
                  <v-icon class="mr-4">mdi-bell</v-icon>

                  <v-icon class="mr-4">mdi-account-box</v-icon>
                
              </v-toolbar>
              <v-row class="ma-0" style="height: calc(100% - 48px)">
                <slot></slot>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </v-main>
  </v-app>
</v-app>`
})