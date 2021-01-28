<template>
  <div class="home">
    <v-container fluid>
  
          <RecordTable />
        
    
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import RecordTable from '../components/RecordTable.vue'

export default Vue.extend({
  data: () => {
    return {

    }
  },
  components: {
    RecordTable
  }
})
</script>
