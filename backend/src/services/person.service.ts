import personModel from "../models/person.model";
import { Person } from "../interface/person.interface";

const createPerson = async (person: Person) => {
    const personFound = await personModel.findOne({ ci: person.ci });
    if (personFound) {
        throw new Error('Person already exists');
    }
    const newPerson = new personModel(person);
    return await newPerson.save();
}

const getPersons = async () => {
    return await personModel.find();
}

const getPersonById = async (id: string) => {
    return await personModel.findById(id);
}

const updatePerson = async (id: string, person: Person) => {
    return await personModel.findByIdAndUpdate(id, person, { new: true });
}

const deletePerson = async (id: string) => {
    return await personModel.findByIdAndDelete(id);
}

export default {
    createPerson,
    getPersons,
    getPersonById,
    updatePerson,
    deletePerson
}