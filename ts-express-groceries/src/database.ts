import { createConnection } from "typeorm";

export const dbConnect = async () => {
  await createConnection()
    .then(connection => {
      // here you can start to work with your entities
      // console.warn(connection);
    })
    .catch(error => console.log(error));
};
