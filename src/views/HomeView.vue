<template>
  <div class="flex h-screen bg-blue-50">
    <aside class="w-64 bg-gray-200 p-6">
      <div class="flex flex-col items-center mb-6">
        <span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
          <span class="flex h-full w-full items-center justify-center rounded-full bg-muted"></span>
        </span>
        <div class="mt-2 text-center">
          <p class="text-sm font-semibold">Joe</p>
          <p class="text-xs text-gray-600">Physician</p>
        </div>
      </div>
      <nav class="space-y-2"><a class="block" href="#" rel="ugc">
          Inbox
        </a><a class="block" href="#" rel="ugc">
          Drive Files
        </a><a class="block" href="#" rel="ugc">
          Boards
        </a><a class="block" href="#" rel="ugc">
          Updates
        </a><a class="block" href="#" rel="ugc">
          Analytics
        </a><a class="block" href="#" rel="ugc">
          Projects
        </a></nav>
    </aside>
    <main class="flex-1 overflow-hidden">
      <header class="flex items-center justify-between bg-blue-50 p-6">
        <h1 class="text-xl font-bold ">Incoming Patients</h1>
        <div class="flex items-center space-x-4"><button
            class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-red-700 text-white">
            Emergency
          </button>
          <button
            class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-amber-600 text-white">
            Priority
          </button>
          <button
            class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-emerald-600 text-white">
            Non-urgent
          </button>
        </div>
      </header>
      <div class="overflow-y-auto p-6">
        <div class="grid grid-cols-3 gap-6">
          <!--- EMERGENCY -->
          <div>
            <h2 class="mb-4 text-lg font-semibold text-red-600">Level 1 Priority</h2>

            <div v-for="patient in emergency_patients" :key="patient.id"
              class="rounded-lg border bg-card bg-white text-card-foreground shadow-sm mb-4" data-v0-t="card">
              <div class="flex flex-col space-y-1.5 p-6">
                <h3 class="pb-5 text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">{{ patient.name }}</h3>
                <p class="text-md font-bold text-muted-foreground">Symptoms:</p>
                <p class="text-sm text-muted-foreground">{{ patient.symptoms }}</p>
                <p class="text-md font-bold text-muted-foreground">Possible Diagnoses:</p>
                <p class="text-sm text-muted-foreground">{{ patient.diagnoses }}</p>

              </div>
            </div>
          </div>

          <!--- Priority -->
          <div>
            <h2 class="mb-4 text-lg font-semibold text-amber-500">Level 2 Priority</h2>
            <div v-for="patient in priority_patients" :key="patient.id"
              class="rounded-lg border bg-card bg-white text-card-foreground shadow-sm mb-4" data-v0-t="card">
              <div class="flex flex-col space-y-1.5 p-6">
                <h3 class="pb-5 text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">{{ patient.name }}</h3>
                <p class="text-md font-bold text-muted-foreground">Symptoms:</p>
                <p class="text-sm text-muted-foreground">{{ patient.symptoms }}</p>
                <p class="text-md font-bold text-muted-foreground">Possible Diagnoses:</p>
                <p class="text-sm text-muted-foreground">{{ patient.diagnoses }}</p>

              </div>
            </div>
          </div>

          <!--- Non-Urgent -->
          <div>
            <h2 class="mb-4 text-lg font-semibold text-emerald-500">Level 3 Priority</h2>
            <!-- <div class="rounded-lg border bg-card text-card-foreground shadow-sm mb-4" data-v0-t="card">
              <div class="flex flex-col space-y-1.5 p-6">
                <h3 class="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">John Doe</h3>
                <p class="text-sm text-muted-foreground">
                  Patient Information: Name: John Doe Age: 35 Gender: Male Date of Birth: January 15 1987 Symptoms
                  Reported: Fever,Cough, Fatigue, Shortness of Breath,Healthcard Number:12345
                </p>
                <p class="text-sm text-muted-foreground">Report: Pending</p>
              </div>
              <div class="p-6">
                <p>Status: Open</p>
                <p>Priority: 3</p>
                <p>Emergency: Ongoing</p>
                <p>
                  Given the reported symptoms, there is a possibility of a respiratory infection or other underlying
                  medical condition. To further assess and manage the patient's health, the following recommendations
                  are suggested:
                </p>
                <ul>
                  <li>Medical Examination</li>
                  <li>Laboratory Investigations</li>
                  <li>Covid-19 Testing</li>
                  <li>Respiratory Function Tests</li>
                </ul>
                <h3>Report:</h3>
                <p>Pending</p>
              </div>
            </div> -->

            <div v-for="patient in non_urgent_patients" :key="patient.id"
              class="rounded-lg border bg-card bg-white  text-card-foreground shadow-sm mb-4" data-v0-t="card">
              <div class="flex flex-col space-y-1.5 p-6">
                <h3 class="pb-5 text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">{{ patient.name }}</h3>
                <p class="text-md font-bold text-muted-foreground">Symptoms:</p>
                <p class="text-sm text-muted-foreground">{{ patient.symptoms }}</p>
                <p class="text-md font-bold text-muted-foreground">Possible Diagnoses:</p>
                <p class="text-sm text-muted-foreground">{{ patient.diagnoses }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>


<script lang="js">

import axios from 'axios';
import { ref, onMounted } from 'vue'

export default {

  setup() {

    const emergency_patients = ref([]);
    const priority_patients = ref([]);
    const non_urgent_patients = ref([]);

    async function fetchPatientsByPriority(priority) {
      let api_url = "https://healthomatic-psi.vercel.app"
      console.log("API URL:", api_url)
      api_url = 'http://127.0.0.1:8000'

      axios.get(`${api_url}/patients/${priority}`)
        .then(response => {
          if (priority === 'Emergency') {
            emergency_patients.value = response.data;
          }
          else if (priority === 'Priority') {
            priority_patients.value = response.data;
          }
          else if (priority === 'Non-urgent') {
            non_urgent_patients.value = response.data;
          }

        })
        .catch(error => {
          console.error('Error fetching patients:', error);
        });
    };


    onMounted(() => {
      fetchPatientsByPriority("Emergency");
      fetchPatientsByPriority("Priority");
      fetchPatientsByPriority("Non-urgent");
    });



    return {
      emergency_patients,
      priority_patients,
      non_urgent_patients
    }
  }
}



</script>


<style>
.responsive-toolbar span.block {
  font-size: 16px;

}
</style>./HomeView.vue