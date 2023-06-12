import { getRepository } from 'typeorm';
import * as faker from 'faker';
import { Grid } from '../src/grid/grid.entity';
import { Customer } from '../src/customer/customer.entity';
import { Meter } from '../src/meter/meter.entity';
import { MeterType } from '../src/meter/meter-type.enum';
import { Issue } from '../src/issue/issue.entity';
import { IssueType } from '../src/issue/issue.enum';
import { createConnection } from 'typeorm';

async function generateMockData() {
  await createConnection({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'nxt-grid',
    entities: [Grid, Customer, Meter, Issue],
    synchronize: true,
  });

  const gridRepository = getRepository(Grid);
  const customerRepository = getRepository(Customer);
  const meterRepository = getRepository(Meter);
  const issueRepository = getRepository(Issue);

  // Create a few grids
  for (let i = 0; i < 5; i++) {
    const grid = new Grid();
    grid.name = faker.address.city();
    await gridRepository.save(grid);

    // For each grid, create a few customers
    for (let j = 0; j < 5; j++) {
      const customer = new Customer();
      customer.fullName = faker.name.findName();
      customer.phoneNumber = faker.phone.phoneNumber();
      customer.grid = grid;
      await customerRepository.save(customer);

      // For each customer, create a few meters
      for (let k = 0; k < 5; k++) {
        const meter = new Meter();
        meter.number = faker.random.alphaNumeric(10);
        meter.type = faker.random.arrayElement([
          MeterType.FULL_SERVICE,
          MeterType.HIGH_PRIORITY_SERVICE,
        ]);
        meter.customer = customer;
        await meterRepository.save(meter);

        // For each meter, create a few issues
        for (let l = 0; l < 3; l++) {
          const issue = new Issue();
          issue.type = faker.random.arrayElement([
            IssueType.COMMUNICATION,
            IssueType.CREDIT,
            IssueType.CONSUMPTION,
          ]);
          issue.active = faker.random.boolean();
          issue.meter = meter;
          await issueRepository.save(issue);
        }
      }
    }
  }
}

generateMockData().then(() => {
  console.log('Mock data generated.');
});
