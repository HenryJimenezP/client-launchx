<template>
  <div class="list row">
    <div class="col-md-6">
      <h4> Mission </h4>
      <ul class="list-group">
        <li class="list-group-item select-item"
          :class="{ active: index == currentIndex }"
          v-for="(mission, index) in missions"
          :key="index"
          @click="setActiveMission(mission, index)"
        >
          {{ mission.name }}
        </li>

      </ul>
    </div>
    <div class="col-md-6">
      <div v-if="currentMission">
        <h4>Mission</h4>
        <div>
          <br><label><strong>Nombre:</strong></label> {{ currentMission.name}}
          <br><label><strong>Lang:</strong></label> {{ currentMission.lang}}
          <br><label><strong>Mission Commander:</strong></label> {{ currentMission.missionCommander}}
          <br><label><strong>Enrollments:</strong></label> {{ currentMission.enrollments}}
        </div>
        <router-link :to="'/mission/' + currentMission.id" class="btn btn-info"> Editar</router-link>
      </div>
      <div v-else>
        <br />
        <p> Selecciona una mission.</p>
      </div>
    </div>
  </div>
</template>
<script>

import MissionService from "../services/MissionService";

export default {
  name: "mission-list",
  data() {
    return {
      tutorials: [],
      missions: [],
      currentTutorial: null,
      currentMission: null,
      currentIndex: -1,
      title: "",
      missionId: ""
    };
  },
  methods: {
    getAllMissions(){
      MissionService.getAll()
        .then(response => {
          this.missions = response.data;
        })
        .catch(e => {
          console.log(e);
        });
    },
    setActiveMission(mission, index) {
      this.currentMission= mission;
      this.currentIndex = mission? index : -1;
    }
  },
  mounted() {
    this.getAllMissions();
  }
};
</script>

<style>
.select-item{
  cursor: pointer;
}
</style>