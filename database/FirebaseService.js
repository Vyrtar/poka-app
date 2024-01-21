import firebase from './firebase';

class FirebaseService {
  constructor() {
    this.database = firebase.database();
  }

  pushDataToFirebase(jsonData) {
    // Assuming you're using a simple push. Modify as needed.
    this.database.ref('your_ref').push(jsonData);
  }

  // You can add more methods for different operations like fetching data, updating, etc.
}

export default new FirebaseService();
