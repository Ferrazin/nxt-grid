### NXT Grid - Nest Assignment

RESTful API created using Nestjs and TypeORM. Developed using Postgres and Postman: collection available in this repository (NXT.postman_collection.json).

# 1 - Generate test data
Install ts-node or tool of choice for and use './mock-creator/create-mock.ts' file (might need some reconfiguration to write on your local DB).

# 2 - Query form grid ID 
From the endpoint [baseURL]:3000/grid/:id/meters, fetch all meters, their customers names and phone numbers, issues and issue type.

# 3 - Query from meter number
From endpoint <baseUrl>:3000/meter/:number, fetch the meter with that specific meter number. This could be expanded, for instance to include a range rather than a specific number.

### NOTES

1. Choice of endpoint logic: the endpoint belongs to Grid because meters are considered sub-resources and only used in relation to grids. In larger contexts, a more general approach might be preferable. 

2. Use the DB to retrieve the latest issue instead of using JS

3. Add pagination & sorting metadata to the response

4. Add validation for pagination in request
