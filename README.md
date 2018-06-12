# GraphQL Tutorial

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

### Notes:

- `args` field in `GraphQLObjectType` determines the arguments when client
asks for a schema.

- The reason of wrapping schema fields with a function is;
to make sure each schema is defined so we are using callbacks to ensure it
