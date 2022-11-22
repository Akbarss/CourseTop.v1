import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import bcrypt from 'bcrypt';
// import uzb from '../uzb.json';
// import states from '../states.json';

const saltRounds = 10;

async function adminSeed() {
  const password = 'password';
  const hashedPsw = await bcrypt.hash(password, saltRounds);

  await prisma.user.create({
    data: {
      email: 'akbar@gmail.com',
      name: 'Akbar',
      second_name: 'Gulyamov',
      phone: '+998970200069',
      password: hashedPsw,
      role: 'SUPER_USER',
    },
  });
}

adminSeed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

// async function locationsSeed() {
//   await prisma.country.create({
//     data: {
//       ...uzb,
//       numeric_code: +uzb.numeric_code,
//       phone_code: +uzb.phone_code,
//       latitude: +uzb.latitude,
//       longitude: +uzb.longitude,
//     },
//   });
// }

// locationsSeed()
//   .catch((e) => {
//     console.error(e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });

// async function statesSeed() {
//   states.map(async (st) => {
//     await prisma.state.create({
//       data: {
//         name: st.name,
//         country_id: '6342aceaff4f51e71f694062',
//         cities: st.cities,
//       },
//     });
//   });
// }

// statesSeed()
//   .catch((e) => {
//     console.error(e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });
