// ts-check
const rooms = [
  new Array(30)
    .fill(0)
    .map((_, i) => i + 1)
    .flatMap((floor) =>
      Array(9)
        .fill(0)
        .map((_, i) => ({
          no: [`${floor}`.toString().padStart(2, 0), `${i + 111}`].join("/"),
          floor,
        }))
    ),
];

const residentRoles = ["Owner", "Resident", "Renter"];

function Broadcast (broadcastedAt, message, _residentRoles, houseNumbers, toAll) {
  this.broadcastedAt = broadcastedAt
  this.message = message
  this.residentRoles = _residentRoles
  this.houseNumbers = houseNumbers
  this.toAll = !!toAll
  console.log(this.houseNumbers)
}

new Vue({
  el: "#app",
  vuetify: new Vuetify(),
  data() {
    return {
      snackbar: null,
      snackbarText: null,
      dialog: false,
      deleteMessage: "",
      tab: null,
      message: "",
      residentRoles,
      houseNumberMode: "All",
      floors: new Array(30).fill(0).map((_, i) => i + 1),
      rooms,
      selectedFloors: [],
      selectedRooms: [],
      isSelectedAllResidentRoles: true,
      broadcasts: []
    };
  },
  mounted() {
    this.selectedFloors = [...this.floors];
  },
  beforeUpdate() {
    console.log('beforeUpdate', this.broadcasts)
    if (residentRoles.every(r => this.residentRoles.includes(r))) {
      this.isSelectedAllResidentRoles = true
    } else {
      this.isSelectedAllResidentRoles = false
    }
  },
  computed: {
    isSelectedAllFloors() {
      return (
        [...this.selectedFloors].sort().toString() ===
        [...this.floors].sort().toString()
      );
    },
    selectableRooms() {
      if (this.selectedFloors.length) {
        return this.rooms[0].filter((room) => {
          return this.selectedFloors.includes(room.floor);
        });
      }

      return this.rooms[0];
    },
  },
  methods: {
    selectFloor(floor) {
      const index = this.selectedFloors.findIndex((f) => f === floor);
      if (index < 0) {
        this.selectedFloors = [...this.selectedFloors, floor];
      } else {
        this.selectedFloors = [
          ...this.selectedFloors.slice(0, index),
          ...this.selectedFloors.slice(index + 1),
        ];
      }
    },
    selectAllFloors() {
      if (this.selectedFloors.length) {
        this.selectedFloors = [];
      } else {
        this.selectedFloors = [...this.floors];
      }
    },
    broadcast() {
      this.dialog = false;
      this.tab = 1;
      this.snackbar = true
      this.snackbarText = 'Sent broadcast message'
      const broadcast = new Broadcast(
        new Date(),
        this.message,
        this.residentRoles,
        this.houseNumberMode === 'All' ? this.rooms.flat() : this.selectedRooms,
        this.isSelectedAllResidentRoles)

      this.broadcasts.push(broadcast)
    },
    submit() {
      this.dialog = true;
    },
    selectAllResidentRoles() {
      if (this.isSelectedAllResidentRoles) {
        this.residentRoles = [];
      } else {
        this.residentRoles = [...residentRoles];
      }

      this.isSelectedAllResidentRoles = !this.isSelectedAllResidentRoles
    },
  },
});
