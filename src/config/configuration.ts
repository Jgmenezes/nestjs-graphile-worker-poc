export const RequiredEnvVars = [
  'SERVER_PORT',
  'DB_HOST',
  'DB_PORT',
  'DB_USERNAME',
  'DB_PASSWORD',
  'DB_NAME',
];

interface Configuration {
  server: {
    port: number;
  };
  databaseConfig: {
    dbHost: string;
    dbName: string;
    username: string;
    password: string;
  };
}

const DEFAULT_SERVER_PORT = 9090;

export const configuration = (): Configuration => {
  const defaultConfiguration = {
    server: {
      port:
        parseInt(process.env.SERVER_PORT as string, 10) || DEFAULT_SERVER_PORT,
    },
    databaseConfig: {
      dbHost: process.env.DB_HOST as string,
      dbPort: parseInt(process.env.DB_PORT as string, 10),
      dbName: process.env.DB_NAME as string,
      username: process.env.DB_USERNAME as string,
      password: process.env.DB_PASSWORD as string,
    },
  };

  return defaultConfiguration;
};

export const validateEnvironmentVars = (): void => {
  if (process.env.NODE_ENV === undefined) {
    process.env.NODE_ENV = 'development';
  }

  RequiredEnvVars.forEach((variable) => {
    if (!process.env[variable]) {
      throw Error(`Missing required env variable ${variable}`);
    }
  });
};
