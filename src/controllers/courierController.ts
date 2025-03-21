import { Request, Response } from 'express';

const getCouriers = async (req: Request, res: Response) => {
    try {
        console.log('query', JSON.stringify(req.query));
        console.log('params', JSON.stringify(req.params));

        res.status(200).json({message: 'Get Success'});
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const findCourier = async (req: Request, res: Response) => {
    try {
        console.log('query', JSON.stringify(req.query));
        console.log('params', JSON.stringify(req.params));

        res.status(200).json({message: 'Find Success'});
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const createCourier = async (req: Request, res: Response) => {
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

const updateCourier = async (req: Request, res: Response) => {
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

export { getCouriers, findCourier, createCourier, updateCourier };
