# NestJS + Prisma Boiler Plate
***
NestJS + Prisma Boilerplate is a starter kit.

## Tech
***
- NestJS
- Prisma
- Class Validator/Transformer
- MySQL(Optional)

## Customization
***
- You can customize **Node Version** in `.nvmrc` file;
- You can customize **Error Response** in `/src/common/dto/error-response.dto.ts` file;
- You can customize **Application Exception** in `/src/common/exception/application.exception.ts` file;
- You can customize **Database** in `prisma/schema.prisma` file;

## Run Application
***
1. Set Node Version - if the nvm is installed, you can use `nvm use` command.
2. Set Database - if the database is not installed, you can use `docker compose up -d` command.
3. Generate prisma client using `yarn prisma:generate` command.
4. Run Application - use the appropriate commands for each environment.
   - ex. run the `yarn start:local` command if it is run in the local environment.
