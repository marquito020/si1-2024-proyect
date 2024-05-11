import { Request, Response } from "express";
import personService from "../services/person.service";

const getPersons = async (req: Request, res: Response) => {
    try {
        const persons = await personService.getPersons();
        return res.status(200).json(persons);
    } catch (error: any) {
        return res.status(500).json({ message: "Ocurrio un error en el server" });
    }
}

const getPersonById = async (req: Request, res: Response) => {
    try {
        const person = await personService.getPersonById(req.params.id);
        return res.status(200).json(person);
    } catch (error: any) {
        return res.status(500).json({ message: "Ocurrio un error en el server" });
    }
}

const createPerson = async (req: Request, res: Response) => {
    try {
        const person = await personService.createPerson(req.body);
        return res.status(200).json(person);
    } catch (error: any) {
        return res.status(500).json({ message: "Ocurrio un error en el server" });
    }
}

const updatePerson = async (req: Request, res: Response) => {
    try {
        const person = await personService.updatePerson(req.params.id, req.body);
        return res.status(200).json(person);
    } catch (error: any) {
        return res.status(500).json({ message: "Ocurrio un error en el server" });
    }
}

const deletePerson = async (req: Request, res: Response) => {
    try {
        const person = await personService.deletePerson(req.params.id);
        return res.status(200).json(person);
    } catch (error: any) {
        return res.status(500).json({ message: "Ocurrio un error en el server" });
    }
}

export default {
    getPersons,
    getPersonById,
    createPerson,
    updatePerson,
    deletePerson
}