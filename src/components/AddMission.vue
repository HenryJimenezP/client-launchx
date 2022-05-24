<template>
  <div class="submit-form">
    <div v-if="!submitted">
    <h3>Nueva Mission</h3>
      <div class="form-group">
        <label for="title">Nombre </label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="mission.name"
          name="title"
        />
      </div>
      <div class="form-group">
        <label for="title">Lang</label>
        <input
          type="text"
          class="form-control"
          id="lang"
          required
          v-model="mission.lang"
          name="lang"
        />
      </div>
      <div class="form-group">
        <label for="title">Mission Commander</label>
        <input
          type="text"
          class="form-control"
          id="missionCommander"
          required
          v-model="mission.missionCommander"
          name="missionCommader"
        />
      </div>
      <div class="form-group">
        <label for="title">Enrollments</label>
        <input
          type="number"
          class="form-control"
          id="enrollments"
          required
          v-model="mission.enrollments"
          name="enrollments"
        />
      </div>
      <button @click="saveMission" class="btn btn-success">Agregar</button>
    </div>
    <div v-else>
      <h4> Mission creada exitosamente. </h4>
      <button class="btn btn-success" @click="newMission">Add</button>
    </div>
  </div>
</template>

<script>
import MissionService from "../services/MissionService";
export default {
  name: "add-mission",
  data() {
    return {
      mission: {
        id: null,
        name: "",
        lang: "",
        missionCommander: "",
        enrollments: ""
      },
      submitted: false
    };
  },
  methods: {
    saveMission() {
      var data = {
        name: this.mission.name,
        lang: this.mission.lang,
        missionCommander: this.mission.missionCommander,
        enrollments: this.mission.enrollments
      };
      MissionService.create(data)
        .then(response => {
          this.mission.id = response.data.id;
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    newMission() {
      this.submitted = false;
      this.mission = {};
    }
  }
};
</script>
