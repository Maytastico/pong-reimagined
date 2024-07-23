import { Request, Response, NextFunction } from "express";
import axios, {AxiosResponse} from "axios";

const testFunction = async (req: Request, res: Response, next: NextFunction) =>{
    let result: AxiosResponse = await axios.get(`http://jsonplaceholder.typicode.com/todos/1`)
    return res.send(result.data);
}

export default testFunction;