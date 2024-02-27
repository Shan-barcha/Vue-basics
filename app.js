const { createApp } = Vue; // Destructure createApp function from Vue

// Create Vue app
const app = createApp({
    data() {
        return {
          name: 'Maximilian',
          age: 31,
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Man_Daeng_Waterfall.jpg/640px-Man_Daeng_Waterfall.jpg'
        };
      },
      methods: {
        calculateAge() {
         
          return (this.age) + 5; 
        },
        calculateRandom() {
         
          return Math.floor(Math.random() * 10) + 1; 
        }
      }
    });

// Mount Vue app
app.mount("#Vueapp");