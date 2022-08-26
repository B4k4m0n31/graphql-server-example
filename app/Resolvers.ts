import people from "./dataset"; // get all of the avaiable data from our database

const Resolvers = {
    Query: {
        getAllPeople: () => people, // if the user runs the getAllPeople command

        // if the user runs the getPerson command
        getPerson: (_: any, args: any) => {
            console.log(args);
            // returns the object with the specified ID
            return people.find((person) => person.id === args.id);
        }
    },
    Mutation: {
        addPerson: (_: any, args: any) => {
            const newPerson = {
                id: people.length + 1,
                name: args.name
            };
            people.push(newPerson);
            return newPerson;
        },
        removePerson: (_: any, args: any) => {
            people.splice(args.id - 1, 1);
            return people;
        }
    }
};

export default Resolvers;