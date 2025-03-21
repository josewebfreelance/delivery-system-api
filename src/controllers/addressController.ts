import { Request, Response } from 'express';
import {addressSearch} from "../services";
import {AddressParams} from "../models";

const getAddress = async (req: Request, res: Response) => {
    try {
        const limit = req.query.limit ? parseInt(req.query.limit as string, 10) : undefined;

        const params: AddressParams = {
            id: req.params.id,
            name: req.query.name as string,
            address: req.query.address as string,
            start: req.query.start as string,
            end: req.query.end as string,
            sort: req.query.sort as string,
            limit,
            lastCode: req.query.lastCode as string,
            lastName: req.query.lastName as string
        };

        const response = await addressSearch(params);

        res.status(200).json(response);
    } catch (e) {
        console.error('Error in getAddress:', e);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


const findAddress = async (req: Request, res: Response) => {
    try {
        console.log('prueba');

        res.status(200).json({message: 'Find Success'});
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const createAddress = async (req: Request, res: Response) => {
    try {
        console.log('query', JSON.stringify(req.query));
        console.log('params', JSON.stringify(req.params));
        console.log('Body', JSON.stringify(req.body));

        res.status(200).json({message: 'Create Success'});
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const updateAddress = async (req: Request, res: Response) => {
    try {
        console.log('query', JSON.stringify(req.query));
        console.log('params', JSON.stringify(req.params));
        console.log('Body', JSON.stringify(req.body));

        res.status(200).json({message: 'Update Success'});
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export { getAddress, findAddress, createAddress, updateAddress };
