import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.role.createMany({
    data: [
      { name: 'Admin' },
      { name: 'Manager' },
      { name: 'Employee' }
    ],
    skipDuplicates: true
  });
}

main()
  .finally(() => prisma.$disconnect());
