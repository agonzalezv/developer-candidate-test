# Simple GraphQL Backend

### Installing

- `npm i`
- `npm run start` or `npm run start:dev`

### Usage

- From browser: go to http://localhost:4000/graphiql.
- From command line you can use `curl`. e.g :

    ```curl -X POST -H "Content-Type: application/json" -d '{"query":"{Users{name age gender _id}}"}' http://localhost:4000/graphql | jq```

- Available items are: `age`, `name`, `gender`, `_id`. 
- Available filter criterias are : `gender`, `age`, `age_gte`, `age_lte`. Age filtering is mutually exclusive. 

Example: 

```
query{
  Users(filter:{age_lte:30, gender:"male"}){
    age
    name
  }
}
```
or

```
query{
  Users(filter:{age:24, gender:"female"}){
    age
    name
    gender
  }
}
```

### Potential improvements

- [ ] Better error handling
- [ ] Improve input validation
