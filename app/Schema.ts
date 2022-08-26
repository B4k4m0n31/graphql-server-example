import { gql } from "apollo-server-express";

const Schema = gql`
    type Person {
        id: ID!
        name: String
    }
    type Query {
        getAllPeople: [Person] # will return multiple Person instances
        getPerson(id: Int): Person # has an argument of 'id' of type Integer
    }
    type Mutation {
        addPerson(name: String): Person
        removePerson(id: Int): [Person]
    }
`;

export default Schema;