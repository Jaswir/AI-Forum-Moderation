<template>
  <div class="bg-blue-50 p-8">
    <div class="max-w-4xl mx-auto">
      <div class="flex justify-between">
        <div class="w-1/2 p-4 bg-white rounded-lg shadow">
          <h2 class="text-xl font-semibold mb-4">Personal and Appointment Details</h2>
          <div class="mb-4">
            <label class="block mb-2" for="name">
              Your Name
            </label>
            <input
              class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              id="name" placeholder="Enter your name" v-model="formData.name" />
            <p v-if="showWarningName" class="text-red-500">Please enter your name.</p>
            <div data-lastpass-icon-root=""
              style="position: relative !important; height: 0px !important; width: 0px !important; float: left !important;">
            </div>
          </div>
          <div class="mb-4">
            <label class="block mb-2" for="gender">
              Gender
            </label>
            <select v-model="formData.gender" id="gender"
              class="flex bg-white h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
              <option value="" className="hidden">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <p v-if="showWarningGender" class="text-red-500">Please enter your gender.</p>
          </div>
          <div class="mb-4">
            <label class="block mb-2" for="dob">
              Date of Birth
            </label>
            <input
              class="block bg-white h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              type="date" v-model="formData.birth_date" placeholder="Enter text here" />
            <p v-if="showWarningDateOfBirth" class="text-red-500">Please enter your date of birth.</p>
          </div>
          <div class="mb-4">
            <label class="block mb-2" for="healthcard">
              Healthcard Number
            </label>
            <input
              class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              v-model="formData.healthcardNumber" id="healthcard" placeholder="Enter your healthcard number" />
            <p v-if="showWarningHealthcard" class="text-red-500">Please enter your Healthcard Number</p>
            <div data-lastpass-icon-root=""
              style="position: relative !important; height: 0px !important; width: 0px !important; float: left !important;">
            </div>
          </div>
          <div class="mb-4">
            <label class="block mb-2" for="appointment">
              Appointment Timings
            </label>
            <input
              class="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              type="datetime-local" v-model="formData.appointmentTimings" id="appointment"
              placeholder="Enter preferred appointment timings" />
            <p v-if="showWarningAppointment" class="text-red-500">Please enter the time of your appointment</p>
          </div>
          <div class="mb-4">
            <label class="block mb-2" for="symptoms">
              Describe symptoms in your own words and add your symptom, or select symptoms from the list:
            </label>
            <div class="flex items-center gap-2 mb-2">
              <div class="inline-flex items-center rounded-full whitespace-nowrap border px-2.5 py-0.5 w-fit text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-blue-500 hover:text-white hover:cursor-pointer">
                fever
              </div>
              <div class="inline-flex items-center rounded-full whitespace-nowrap border px-2.5 py-0.5 w-fit text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-blue-500 hover:text-white hover:cursor-pointer">
                chest pain
              </div>
              <button 
                class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="text-white">
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
              </button>
            </div>
            <input
              class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              id="symptoms" placeholder="Enter your symptom e.g. chest pain" v-model="formData.symptom" />
            <p v-if="showWarningSymptoms" class="text-red-500">Please enter a symptom.</p>
          </div>



          <button
            class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 w-full bg-blue-500 hover:bg-blue-600 text-white"
            @click="submitForm">
            <p v-if="submitting === false">Thank you for submitting</p>
            <svg v-if="submitting" aria-hidden="true" role="status" class="inline w-4 h-4 me-3 text-white animate-spin"
              viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="#E5E7EB" />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentColor" />
            </svg>
            <p v-if="submitting">Submitting...</p>
          </button>
        </div>

        <div class="w-1/2 p-4 flex flex-col gap-4">
          <div class="mb-2">
            <h2 class="text-xl font-semibold mb-4">Enter symptoms in your own words OR start typing</h2>
            <ul class="list-disc pl-5 text-sm">
              <li>Enter your symptoms in normal, everyday language.</li>
              <li>Enter each symptom separately or put them all on one line but separated by commas.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useRouter } from 'vue-router';
import axios from 'axios';
import { ref } from 'vue'

export default {

  data() {
    return {
      imageUrl: null,
      file: null
    };
  },

  methods: {

  },

  setup() {

    const router = useRouter();
    const formData = ref({
      name: '',
      gender: '',
      birth_date: '', // Add default value or use a date picker component
      healthcardNumber: '',
      appointmentTimings: '',
      symptom: '',
    });
    const showWarningSymptoms = ref(false);
    const showWarningName = ref(false);
    const showWarningAge = ref(false);
    const showWarningGender = ref(false);
    const showWarningHealthcard = ref(false);
    const showWarningAppointment = ref(false);
    const showWarningDateOfBirth = ref(false);
    const submitting = ref(false);



    async function submitForm() {

      // Warnings for empty data
      let api_url = "https://healthomatic-psi.vercel.app"
      console.log("API URL:", api_url)
      api_url = 'http://127.0.0.1:8000'

      let invalidSubmission = false


      if (
        formData.value.symptom === '' ||
        formData.value.name === '' ||
        formData.value.gender === '' ||
        formData.value.birth_date === '' ||
        formData.value.healthcardNumber === '' ||
        formData.value.appointmentTimings === ''
      ) {
        invalidSubmission = true;
      }

      showWarningName.value = formData.value.name === '';
      showWarningGender.value = formData.value.gender === '';
      showWarningDateOfBirth.value = formData.value.birth_date === '';
      showWarningHealthcard.value = formData.value.healthcardNumber === '';
      showWarningAppointment.value = formData.value.appointmentTimings === '';
      showWarningSymptoms.value = formData.value.symptom === '';

      if (invalidSubmission) return;

      submitting.value = true;

      // Getting priority and diagnoses
      console.log("Getting priority based on symptoms", formData.value.symptom)
      const response = await axios.get(`${api_url}/getPriorityFromSymptoms/${formData.value.symptom}`);
      let priority = response.data.urgency;
      console.log("Priority:", priority)

      console.log("Getting possible diagnoses")
      const responseDiagnoses = await axios.get(`${api_url}/getDiagnosesFromSymptoms/${formData.value.symptom}`);
      let diagnoses = responseDiagnoses.data.possible_diseases.join(', ');
      console.log("Diagnoses:", diagnoses)

      console.log("Adding Patient")

      //Filling payload and sending to backend
      const payload = {
        name: formData.value.name,
        gender: formData.value.gender,
        birth_date: formData.value.birth_date,
        healthcard_number: formData.value.healthcardNumber,
        appointment_timings: formData.value.appointmentTimings,
        priority: priority,
        symptoms: formData.value.symptom,
        diagnoses: diagnoses
      };


      axios.post(`${api_url}/addPatient`, payload)
        .then(response => {
          console.log(response.data); // Log the response data to the console

          router.push('/incoming-patients');
        })
        .catch(error => {
          console.error('Error:', error); // Log any errors to the console
        });

    }

    return {
      submitForm,
      formData,
      showWarningSymptoms,
      showWarningName,
      showWarningAge,
      showWarningGender,
      showWarningHealthcard,
      showWarningAppointment,
      showWarningDateOfBirth,
      submitting

    }
  }
}

</script>




<style></style>