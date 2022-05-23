<template>
  <div class="list row">
    <div class="col-md-6">
      <h4> Mission </h4>
      <ul class="list-group">
        <li class="list-group-item select-item"
          :class="{ active: index == currentIndex }"
          v-for="(explorer, index) in explorers"
          :key="index"
          @click="setActiveExplorer(explorer, index)"
        >
          {{ explorer.name }}
        </li>

      </ul>
    </div>
    <div class="col-md-6">
      <div v-if="currentExplorer">
        <h4>Explorer</h4>
        <div>
          <br><label><strong>Nombre:</strong></label> {{ currentExplorer.name}}
          <br><label><strong>Lang:</strong></label> {{ currentExplorer.lang}}
          <br><label><strong>Mission Commander:</strong></label> {{ currentExplorer.missionCommander}}
        </div>
        <router-link :to="'/mission/' + currentExplorer.id" class="btn btn-info"> Editar</router-link>
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
  name: "explorer-list",
  data() {
    return {
      tutorials: [],
      explorers: [],
      currentTutorial: null,
      currentExplorer: null,
      currentIndex: -1,
      title: "",
      explorerId: ""
    };
  },
  methods: {
    getAllExplorers(){
      MissionService.getAll()
        .then(response => {
          this.explorers = response.data;
        })
        .catch(e => {
          console.log(e);
        });
    },
    setActiveExplorer(explorer, index) {
      this.currentExplorer= explorer;
      this.currentIndex = explorer? index : -1;
    }
  },
  mounted() {
    this.getAllExplorers();
  }
};
</script>

<style>
.select-item{
  cursor: pointer;
}
</style>