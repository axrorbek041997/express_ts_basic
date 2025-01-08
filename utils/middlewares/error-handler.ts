import {Request, Response, NextFunction} from 'express'

export default (error: any, _: Request, res: Response, next: NextFunction) => {
    const status = error.statusCode || 500
    res.status(status).json({message: error.message})
    next()
}
