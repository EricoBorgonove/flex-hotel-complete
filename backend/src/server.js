const app = require("./app");

if (require.main === module) {
  const port = Number(process.env.PORT) || 3000;
  app.listen(port, () => {
    console.log(`FlexHotel API running on port ${port}`);
  });
}
