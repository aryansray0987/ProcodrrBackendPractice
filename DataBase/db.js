import { MongoClient } from 'mongodb';

async function runGetStarted() {
  // Replace the uri string with your connection string
  const uri = 'mongodb://localhost:27017/';
  const client = new MongoClient(uri);
    await client.connect();
  try {
    const database = client.db('college');
    const teachers = database.collection('teachers');

    // Queries for a movie that has a title value of 'Back to the Future'
    const query = { name: 'aniket gupta' };
    const teacher = await teachers.findOne(query);
    console.log(teacher);
  } finally {
    await client.close();
  }
}
runGetStarted().catch(console.dir); //4474/ 6250

