export default {
  'GET /api/slaves': (req, res) => {
    res.send([
      {
        name: 'app1',
        entry: 'http://localhost:8001',
        container: 'root',
        activeRule: '/app1',
        props: {
          name: 'kuitos',
        }
      }
    ]);
  },
};
