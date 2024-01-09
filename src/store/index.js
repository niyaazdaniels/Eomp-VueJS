import Vuex from 'vuex'
import axios from 'axios';


const hostedData = 'https://niyaazdaniels.github.io/JSON/'

export default new Vuex.Store({
state: {
   home: ' ',
   about: ' ',
   resume: ' ',
   projects: ' ',
   testimonial: ' ',
},
mutations: {
   setHome (state, data) {
     state.home = data
   },
   setAbout (state, data) {
     state.about = data
   },
   setResume (state, data) {
    state.resume = data
   },
   setProjects(state, data) {
    state.projects = data
   },
   setTestimonials(state, data){
    state.testimonial = data
   }
},
actions: {
fetchHome (context) {
  try {
    axios.get(hostedData)
     .then(res =>{
      context.commit('setHome', res.data.home)})
      } catch(error) {
          alert('Could not retrieve the Home data', error);
      }
}, 
fetchAbout ({commit}) {
  try {
    axios.get(hostedData)
     .then (res => {
       commit ('setAbout', res.data.about)
         })
          } catch(error) {
            alert('Could not retrieve the About data', error);
              }
},
fetchResume ({commit}) {
  try {
    axios.get(hostedData)
     .then(res => {
       commit('setResume', res.data.resume)
         })
           } catch(error) {
             alert('Could not retrieve the Resume data', error)
              }
},
fetchProjects ({commit}) {
  try {
    axios.get(hostedData)
     .then(res => {
       commit('setProjects', res.data.projects)
         })
           } catch(error) {
             alert('Could not retrieve any Projects data', error);
               }
},
fetchTestimonials ({commit}) {
  try {
    axios.get(hostedData)
     .then(res => {
       commit('setTestimonials', res.data.testimonials)
        })
          }catch (error){
           alert('Could not retrieve Testimonial Data', error)
            }
},
},
modules: {
}
})